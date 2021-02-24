import React from 'react';
import './app.css'

export const AddTask = (props)=>{
    return(
        <form onSubmit={props.onSubmit} id='noteEntry'>
            <input type='text' onChange={props.onChange} value={props.text} id='inputText'/>
            <button id='addNote'>Add New Task</button>
        </form>
    )
}