
// export const AddTodo = () => {
//   return <>
//   <p>AddTodo</p>
//   <div>
//     <input />
//     <button>save</button>
//   </div>
//   </>
// }

//import {useRef} from 'react'
import { useState } from "react";

export const AddTodo = ({ todo, noAdd }) => {
  const [text, setText] = useState("")
  const [error, setError] = useState(null)
  

  const handleSave = () => {
    if (!text.trim()) {
      return setError("Please fill all the fields")
    }
    setError(null)
    noAdd({ id: Date.now(), text, completed: false })
    setText("")
  }

  return (
    <div className="p-4 bg-pink-50 text-gray-800 rounded-lg shadow-sm border border-gray-200">
      <p className="text-pink-800 text-base font-semibold mb-2">Add Todo</p>
      <div className="flex flex-col space-y-2">
        {error && (
          <p className="text-sm bg-pink-100 text-pink-800 p-2 rounded-lg border border-pink-200">
            {error}
          </p>
        )}
        <div className="flex items-center space-x-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter a new task"
            className="flex-1 p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-pink-100 text-pink-800 rounded-lg hover:bg-pink-200 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
