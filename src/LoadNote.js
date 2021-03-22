import React, { useRef, useState } from 'react'
import './app.css'



const LoadNote = (props)=>{
    var inputDisable = true;
     const loadList = props.tasks.map((item, i) =>{
        return(
            <div 
            draggable 
            key={item.id} 
            id={item.id} 
            onDragStart={(e)=>props.onDragStart(e, item.id)} 
            onDragEnter ={(e)=>props.onDragEnter(e, item.id)} 
            onDragEnd={()=>{props.onDragEnd()}} 
            onDragOver={(e) => e.preventDefault()} 
            className='draggableItem'>
              
                
                <input type="text" 
                key={''+item.id} 
                id={item.id + '_input'} 
                defaultValue={item.text} 
                onChange={(e)=>{props.change(e.target.value, item.id)}} 
                //disable={!isEditing}
                disabled = {props.inputDisable}
                className='noteInput'/>
     
                <button 
                key={'edit_'+item.id} 
                id={'edit_'+item.id} 
                onClick={()=>props.edit(item.id)} 
                className='editBtn inputBtn'
                
                >
                    {/* {isEditing ? 'Save' : 'edit'} */}
                    Edit
                </button>
                <button 
                key={'del_'+item.id} 
                id={'del_'+item.id} 
                onClick={(e)=>{props.delete(e, item.id)}} 
                className='deleteBtn inputBtn'
                >
                    Delete
                </button>
                

            </div>
            
        )
    })
    return(
        <div id='container'  className='droppable'>{loadList}</div>
    )
}

// onDragOver ={(e)=>{onDragOver(e)}} onDrop ={onDrop}
// const notes = [
//     {
//         note1
//     },
//     {
//         note2
//     }
// ]

export default LoadNote