
export const ToDoFilter = ( {onFilter}) => {

  return (
    <div className="p-4 bg-pink-50 text-gray-800 rounded-lg shadow-sm border border-gray-200">
      <p className="text-pink-800 text-base font-semibold mb-2">To-Do Filter</p>
      <div className="flex space-x-2">
        <button 
        onClick={() => onFilter("All")}
        className="px-4 py-2 bg-pink-100 text-pink-800 rounded-lg hover:bg-pink-200 transition"
        >
          All
        </button>
        
        <button 
        onClick={(() => onFilter("Active"))}
        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
        >
          Active
        </button>
        <button 
        onClick={() => onFilter("Completed")}
        className="px-4 py-2 bg-pink-100 text-pink-800 rounded-lg hover:bg-pink-200 transition">
          Completed
        </button>
      </div>
    </div>
  )
}
