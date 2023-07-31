import React from 'react'

export default function FormInputs() {
  return (
 <form autoComplete="off">
            <input type='text' name='todos' id='todos' 
            required placeholder='Tasks that needs to be done' />
            <button>Add Task</button>
 </form>

  )
}
