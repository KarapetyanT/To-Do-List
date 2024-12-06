
import { ToDoItem } from "./todo-items";

export const List = ({ items, onDelete, onToggle }) => {
 
  return (
    <div className="p-4 bg-pink-50 text-gray-800 rounded-lg shadow-sm border border-gray-200">
      <p className="text-pink-800 text-base font-semibold mb-4">To-Do List</p>
      <div className="space-y-4">
        {items.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle}
     
          />
        ))}
      </div>
    </div>
  )
}

