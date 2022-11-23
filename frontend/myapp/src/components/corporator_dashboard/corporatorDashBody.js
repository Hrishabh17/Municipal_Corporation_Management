import React, {useState, useEffect, useContext} from "react";
import ToDo from "./toDo";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import { UserContext } from "../context";
import toast from "react-hot-toast";
const axios = require('axios')

export default function CorporatorDashBody(props){
    const [toDoData, setToDoData] = useState([])
    const [inProgressData, setInProgressData] = useState([])
    const [doneData, setDoneData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [dragId, setDragId] = useState('')
    const [corporatorId, setCorporatorId] = useState('')

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
        }
    })

    const getAllData = async()=>{
        await axios.get(`/complaint/getwardcomplaints/${props.empId}`).then((response)=>{
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
            })

            setState(state=>({...state, toDo:{title:'To Do', items:toDoData}}))
            setState(state=>({...state, inProgress:{title:'In Progress', items:inProgressData}}))
            setState(state=>({...state, done:{title:'Done', items:doneData}}))

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
        if(value.exists===true && value.type==='corporator'){
            setCorporatorId(value.user_id)
        }
    }, [loading])

    useEffect(()=>{
        if(state.toDo.items.length === 0 && state.done.items.length === 0 && state.inProgress.items.length === 0){
            setLoading(true)
        }
        else{
            setLoading(false)
        }
    }, [])

    function handleOnDragEnd({destination, source}) {
        setIsDragging(false)
        toast.error('Not Allowed')
        return 
      }

    function handleOnDragStart(e)
    {
        setIsDragging(true)
        setDragId(e.draggableId)
    }

    return(
        <div className="w-full h-max bg-[#171717] py-4 mt-4 min-h-[780px]">
            <div className="container mx-auto h-max rounded-xl mt-6 py-2">
                <div className="flex flex-row items-center justify-center gap-4 bg-[#303030] mt-6 py-2 w-11/12 mx-auto rounded-xl">
                        <h1 className="font-[Poppins] text-white font-semibold text-lg">Corporator Dashboard</h1>
                </div>
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
                                                                                <ToDo description={el} isdraggable={isDragging} dragid={dragId} column={data.title} corporatorId={corporatorId}/>
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
    