import axios from "axios";
import { useForm } from "react-hook-form";

export const AddTodo = ({ onAdd }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleSave = data => {
    axios
    .post("http://localhost:3000/todos", data)
    .then(res => {
      console.log(res.data);
      reset()
      onAdd(res.data)
    })
  }

  return (
    <div className="p-4 bg-pink-50 text-gray-800 rounded-lg shadow-sm border border-gray-200">
      <p className="text-pink-800 text-base font-semibold mb-2">Add Todo</p>
      <div className="flex flex-col space-y-2">
        {errors.text && (
          <p className="text-sm bg-pink-100 text-pink-800 p-2 rounded-lg border border-pink-200">
            {errors.text.message}
          </p>
        )}
        <div className="flex items-center space-x-2">
          <form
           onSubmit={handleSubmit(handleSave)}
           className="flex flex-col w-full bg-gray-100 p-4 rounded-lg shadow-md">
          <input
            {...register("text", {required: "Please fill the field"})}
            type="text"
            placeholder="Enter a new task"
            className="flex-1 p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
           <input
           {...register("description")}
           type="text"
           placeholder="Provide a description"
           className="flex-1 p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-pink-100 text-pink-800 rounded-lg hover:bg-pink-200 transition"
          >
            Save
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}
