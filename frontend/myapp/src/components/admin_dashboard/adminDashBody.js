import React, {useState} from "react";
import ToDo from "./toDo";
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";

const item1={
    id:v4(),
    title:"Water Problem since 2 days",
    priority:"High",
    department:"Water Problem",
    issueDate:"11/08/2022",
    completionDate:"15/08/2022",
    emp:"Sonali",
    comment:""
}
const item2={
    id:v4(),
    title:"Road Problem in Kothrud",
    priority:"Low",
    department:"Road Problem",
    issueDate:"04/05/2022",
    completionDate:"13/05/2022",
    emp:"Asha",
    comment:""
}
const item3={
    id:v4(),
    title:"Garbage Problem in Vimannagar",
    priority:"High",
    department:"Garbage Problem",
    issueDate:"14/03/2022",
    completionDate:"15/03/2022",
    emp:"Divya",
    comment:""
}
const item4={
    id:v4(),
    title:"Power Outage since 2 hours",
    priority:"Medium",
    department:"Electricity Problem",
    issueDate:"12/07/2022",
    completionDate:"15/07/2022",
    emp:"Naina",
    comment:""
}
const item5={
    id:v4(),
    title:"Drainage Blockage since 2 days",
    priority:"High",
    department:"Water Problem",
    issueDate:"12/07/2022",
    completionDate:"15/07/2022",
    emp:"Arun",
    comment:""
}


export default function AdminDashBody(){

    const [isDragging, setIsDragging] = useState(false)
    const [dragId, setDragId] = useState('')
    const [state, setState] = useState({
        assignTask:{
            title:"Tasks to be Assigned",
            items:[item1, item2]
        },
        inProgress:{
            title:"In Progress",
            items:[item3]
        },
        done:{
            title:"Completed Tasks",
            items:[item5]
        },
        rejectedTasks:{
            title:"Rejected Tasks",
            items:[item4]
        }
    })


    function handleOnDragEnd({destination, source}) {
        setIsDragging(false)
        

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
      }

      function handleOnDragStart(e)
      {
        setIsDragging(true)
        setDragId(e.draggableId)
      }

    return(
        <div className="w-full h-max bg-[#171717] py-2 mt-[70px] min-h-[700px]">
            <div className="container mx-auto h-max rounded-xl mt-6 py-2">
                <div id="main" class="grid grid-cols-3 grid-flow-col"> 
                <a href = "admindash" class="bg-[#4A88BA] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Task Assignment
                </a>
                <a href = "TabEmp" class="bg-[#4A88BA] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Employee Management
                </a>
                <a href = "TabUser" class="bg-[#4A88BA] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    User Management
                </a>
                </div> 
                <br></br>
                <div className="flex flex-row items-center justify-center gap-4 bg-[#303030] py-2 w-11/12 mx-auto rounded-xl">
                    <h1 className="font-[Poppins] text-white font-semibold text-lg">Admin Task Assignment Dashboard </h1>
                </div>
                                
                <div className="flex flex-row items-start justify-between mt-4 w-11/12 mx-auto">
            
                    <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
                        {_.map(state, (data, key)=>{
                            return(
                                
                                    <div className={`flex flex-col items-start justify-center w-1/4 px-6 ${isDragging ? "border-[0.5px] border-white border-dashed rounded-xl":"border-0"}`}>
                                        <h1 className="font-[Poppins] text-white text-lg py-4 text-start">{data.title}</h1>
                                    
                                        <Droppable droppableId={key}>
                                            {(provided)=>{
                                                return(
                                                    <div {...provided.droppableProps} ref={provided.innerRef} className="w-full">
                                                        {data.items.map((el, index)=>{
                                                            return(
                                                                <Draggable key={el.id} index={index} draggableId={el.id}>
                                                                    {(provided)=>{
                                                                        return(
                                                                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className={`py-2`}>
                                                                                <ToDo description={el} isdraggable={isDragging} dragid={dragId} column={data.title}/>
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

                </div>
            </div>
        </div>
    )
}