export const ToDoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="p-4 bg-pink-50 text-gray-800 rounded-lg shadow-sm mb-4 flex items-center justify-between border border-gray-200">
      <div>
        <p
          className={`text-base font-medium ${
            todo.completed ? "text-gray-500 line-through" : "text-gray-800"
          }`}
        >
          {todo.text}
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onToggle(todo.id, todo.text)}
          className="px-3 py-1 bg-pink-100 text-pink-800 rounded-lg hover:bg-pink-200 transition"
        >
          {todo.completed ? "Cancel" : "Completed"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
