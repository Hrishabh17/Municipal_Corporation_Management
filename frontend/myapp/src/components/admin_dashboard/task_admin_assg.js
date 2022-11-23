import React, {useState, useEffect, useContext} from "react";
import ToDo from "./toDo";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import { UserContext } from "../context";
import toast from "react-hot-toast";
const axios = require('axios')

export default function AdminDashBody(){
    const [toDoData, setToDoData] = useState([])
    const [inProgressData, setInProgressData] = useState([])
    const [doneData, setDoneData] = useState([])
    const [rejectedData, setRejectedData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [dragId, setDragId] = useState('')
    const [adminId, setAdminId] = useState('')

    const {value, setValue} = useContext(UserContext)

    

    const [state, setState] = useState({
        toDo:{
            title:"To Do",
            items:[]
        },
        inProgress:{
            title:"In Progress",
            items:[]
        },
        done:{
            title:"Done",
            items:[]
        },
        rejected:{
            title:"Rejected",
            items:[]
        }
    })

    const getAllData = async()=>{
        await axios.get('/complaint/getallcomplaints').then((response)=>{
            setLoading(true)

            response.data?.map((data)=>{
                if(data.complaint_status === 'Pending'){
                    setToDoData(toDoData =>[...toDoData, data])
                }
                else if(data.complaint_status === 'Resolved'){
                    setDoneData(doneData =>[...doneData, data])
                }
                else if(data.complaint_status === 'Working'){
                    setInProgressData(inProgressData =>[...inProgressData, data])
                }
                else if(data.complaint_status === 'Rejected'){
                    setRejectedData(rejectedData =>[...rejectedData, data])
                }
            })

            setState(state=>({...state, toDo:{title:'To Do', items:toDoData}}))
            setState(state=>({...state, inProgress:{title:'In Progress', items:inProgressData}}))
            setState(state=>({...state, done:{title:'Done', items:doneData}}))
            setState(state=>({...state, rejected:{title:'Rejected', items:rejectedData}}))

            setLoading(false)
            if(loading === false){
                console.log(state)
            }

        }).catch((err)=>{
            console.log(err)
        }) 
    }
   
    useEffect(()=>{
        getAllData()
        if(value.exists===true && value.type==='admin'){
            setAdminId(value.user_id)
        }
    }, [loading])

    useEffect(()=>{
        if(state.toDo.items.length === 0 && state.done.items.length === 0 && state.inProgress.items.length === 0 && state.rejected.items.length === 0){
            setLoading(true)
        }
        else{
            setLoading(false)
        }
        console.log('rendering')
    }, [])

    function handleOnDragEnd({destination, source}) {
        setIsDragging(false)

        if(source.droppableId === "done" || source.droppableId ==="inProgress" || destination.droppableId ==="done" || destination.droppableId ==="inProgress")
        {
            toast.error('Not Allowed')
            return
        }
        if(!destination)
        {
            return
        }
        if(destination.index === source.index && destination.droppableId === source.droppableId)
        {
            return
        }
        const itemCopy = {...state[source.droppableId].items[source.index]}
        setState(prev=>{
            prev={...prev}
            prev[source.droppableId].items.splice(source.index, 1)
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })

        var newDate = new Date()
        var year = newDate.getFullYear()
        var month = newDate.getMonth()
        var date = newDate.getDate()
        var hours = newDate.getHours()
        var minutes = newDate.getMinutes()
        var seconds = newDate.getSeconds()

        var comment_time = ""

        comment_time += year + "-" + (month<10?"0":"")+ month + (date<10?"0":"") + "-"+date + " "
        comment_time += (hours<10 ? "0":"") + hours + ":"
        comment_time += (minutes<10 ? "0":"") + minutes + ":"
        comment_time += (seconds<10 ? "0":"")+seconds

        if(destination.droppableId === 'toDo'){
            updateComplaintStatus({id:dragId, status:'Pending', empId:75369, commentTime:comment_time})
        }
        else if(destination.droppableId === 'rejected'){
            updateComplaintStatus({id:dragId, status:'Rejected', empId:75369, commentTime:comment_time})
        }
      }

      
      const updateComplaintStatus = async(data)=>{
          try{
              const res = await axios.post('/complaint/updatecomplaint', 
              data  
              )
              console.log(res)
              if(res.status === 200 && res.data.value.updated === true && res.data.value2.commentCreated === true){
                  setDoneData([])
                  setInProgressData([])
                  setToDoData([])
                  setRejectedData([])
                  setLoading(true)
                }
            }
            catch(err){
                console.log(err)
            }
        }

        function handleOnDragStart(e)
        {
            setIsDragging(true)
            setDragId(e.draggableId)
        }

        return(
            <div className="w-full h-max bg-[#171717]  min-h-[740px]">
                <div className="container mx-auto h-max rounded-xl mt-6 py-2">
                    <div className="border-b-[0.2px] border-b-orange-200"></div>
                    {!loading && <div className="flex flex-row items-start justify-between mt-4 w-11/12 mx-auto">
                
                        <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
                            {_?.map(state, (data, key)=>{
                                return(
                                    
                                        <div className={`flex flex-col items-start justify-center w-1/4 px-6 ${isDragging ? "border-[0.5px] border-white border-dashed rounded-xl":"border-0"}`}>
                                            <h1 className="font-[Poppins] text-white text-lg py-4 text-start">{data.title}</h1>
                                        
                                            <Droppable droppableId={key}>
                                                {(provided)=>{
                                                    return(
                                                        <div {...provided.droppableProps} ref={provided.innerRef} className="w-full">
                                                            {data?.items?.map((el, index)=>{
                                                                return(
                                                                    <Draggable key={el.complaint_number.toString()} index={index} draggableId={el.complaint_number.toString()}>
                                                                        {(provided)=>{
                                                                            return(
                                                                                <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className={`py-2`}>
                                                                                    <ToDo description={el} isdraggable={isDragging} dragid={dragId} column={data.title} adminId={adminId}/>
                                                                                </div>
                                                                            )
                                                                        }}
                                                                    </Draggable>  
                                                                )
                                                            })}
                                                            {provided.placeholder}
                                                        </div>
                                                    )}}
                                            </Droppable>
                                        </div>
                                )
                            })}
                        </DragDropContext>
    
                    </div>}
                </div>
            </div>
        )
    }
    