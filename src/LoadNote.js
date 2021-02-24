import React, { useRef, useState } from 'react'
import './app.css'

const LoadNote = (props)=>{
    // let existingNote = JSON.parse(localStorage.getItem('allNote'))
    // if(existingNote == null) existingNote = []
    // const draggables = document.querySelectorAll('.draggableItem')
    // const container = document.querySelector('#container')
    // let existTodo = JSON.parse(localStorage.getItem('Todo'))
    // if(existTodo == null) existTodo = []
   
   // let [note, setNote] = useState(existTodo)
    
   
    //console.log(itemName)

    const onDragStart = (e, position)=>{ 
        const target = e.target
        draggingItem.current = position
        console.log(target.innerHTML)
        console.log(`you just drag item with an id: ${target.id} `)
        e.dataTransfer.setData('item', target.id)
        // setTimeout(()=>{
        //     target.style.display = 'none'
        // }, 0)
    }
    const onDragEnter = (e, position)=>{
        const target = e.target
        dragOverItem.current = position
        console.log(target.innerHTML)
    }
   
   
    // const onDrop = (e)=>{
    //     e.preventDefault()
    //     const item = e.dataTransfer.getData('item')
    //     console.log(item)
    //     console.log('just dropped an item')
    //     const dragItem = document.getElementById(item)
    //     dragItem.style.display = 'block'
    //     console.log(e.target)
    //     e.target.append(dragItem)
    //     console.log(existingNote)
    //     const Notes = existingNote
        // let notes = existingNote.filter(note =>{
        //     if(note.id == item){
        //         // Notes.indexOf(note) + 1
        //     }
            
        // })
    //}
    // draggables.forEach(draggable => {
    //     console.log('heloo')
    //     draggable.addEventListener('dragstart', ()=>{
    //         console.log('item dragged')
    //     })
    // })


    const dragOver = (e)=>{
        
        e.stopPropagation()
        e.preventDefault()
    }
    
    // {console.log(props.tasks)}
    

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
                {console.log(item.id)}
                <input type="text" 
                key={''+item.id} 
                id={item.id + '_input'} 
                defaultValue={item.text} 
                onChange={(e)=>{props.change(e.target.value, item.id)}} 
                //disable={!isEditing}
                disabled
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