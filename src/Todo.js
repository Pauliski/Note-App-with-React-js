import React, { useEffect, useRef, useState } from 'react'
import {AddTask} from './AddTask';
import LoadNote from './LoadNote'
import './app.css'

export const Todo =()=>{
    const defaultTodoState = {text: '', id: '' };
    let [note, setNote] = useState([]);
    const [todo, setTodo] = useState(defaultTodoState)
    var inputDisable = true;

    // *** When DOM is Loaded ***
    useEffect(() => {
        let existingNote = JSON.parse(localStorage.getItem('allNote')) || []
        setNote(existingNote)
    }, [])

    // when notes changes
    useEffect(()=>{
        localStorage.setItem('allNote', JSON.stringify(note))
    }, [note])
   
    // *** Generating random alphanumeric string 
    const getRandomStr = (keyLength)=> {
        let key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
        var charactersLength = characters.length;
    
        for (let i = 0; i < keyLength; i++) {
            key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
        }
    
        return key;
    }
  
    
    const handleChange = ({target})=>{
        setTodo({ 
            text: target.value,
            id: getRandomStr(12)
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(todo.text === '' || !todo.text.trim()){
            return;
        } 

        
         const items = [...note, todo]
         setNote(items)
        setTodo(defaultTodoState)
    
    }


    const Change = (text, id)=>{
    const items = [...note];
        items.map(item =>{
            
           if(item.id === id){
            
            console.log(item['text'])
           
             item['text'] = text 
            
           }
           
       })
       setNote(items)
    }
    const handleDelete = (event, id)=>{
        const check = note.filter(item => item.id !== id)
        //console.log(event.target.parentElement)
        event.target.parentElement.style.animationPlayState = 'running';
        event.target.parentElement.addEventListener('animationend', ()=>{
            setNote([...check])
            //event.target.parentElement.remove()
        })
    }

    const handleEdit = (itemId)=>{
        const items = note;
        let inputTag = document.getElementById(itemId + '_input');
        let butttonElement = document.getElementById('edit_'+itemId)
        items.map(item =>{
           if(item.id == itemId) {
            //    inputDisable = inputDisable === true ? false : true
               inputTag.hasAttribute('disabled')  ? inputTag.removeAttribute('disabled'): inputTag.setAttribute('disabled', true);
                  butttonElement.innerHTML = butttonElement.innerHTML === 'Edit' ? 'Save' : 'Edit'
           }
       })
    }
    const draggingItem = useRef()
    const dragOverItem = useRef()

    const onDragStart = (e, position)=>{ 
        const target = e.target
        draggingItem.current = note.findIndex(item => item.id === position)
        console.log(target.innerHTML)
       
    }
    const onDragEnter = (e, position)=>{
        const target = e.target
        dragOverItem.current = note.findIndex(item => item.id === position)
        // console.log( dragOverItem.current)
    }
    
    const onDragEnd = ()=>{
        const copyNote = [...note]
        const draggingItemContent = copyNote[draggingItem.current]
        copyNote.splice(draggingItem.current, 1)
        copyNote.splice(dragOverItem.current, 0, draggingItemContent)
        draggingItem.current = dragOverItem.current
        dragOverItem.current = null
        setNote(copyNote);
    }
    
    return(
        <div>
           <div id='head'>
               <div id='headItems'>
                    <h1 
                    id='headText'
                    > Note
                        <span id='spanText'>
                            App
                        </span>
                    </h1>
                    <AddTask 
                    onSubmit={handleSubmit} 
                    onChange={handleChange} 
                    text={todo.text} 
                    />
                </div>
        
           </div>
            <LoadNote 
            change={Change} 
            delete={handleDelete} 
            edit={handleEdit} 
            tasks={note} 
            inputDisable = {inputDisable}
            onDragEnd={onDragEnd} 
            onDragStart ={onDragStart} 
            onDragEnter={onDragEnter}
            />
            
            
        </div>
    )
}