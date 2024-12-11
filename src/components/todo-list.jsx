import { List } from "./list";
import { AddTodo } from "./todo-add";
import { ToDoFilter } from "./todo-filter";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 101, text: "read a book", completed: false },
    { id: 102, text: "eat a burger", completed: true },
    { id: 103, text: "buy flowers", completed: false },
  ]);

  
  const [filter, setFilter] = useState("All");
  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredToDos = () => {
    if (filter === "All") return todos;
    if (filter === "Active") return todos.filter((item) => !item.completed);
    if (filter === "Completed") return todos.filter((item) => item.completed);
  };

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleToggle = (id, text) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed, text };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    toast.success("ToDo has been deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-pink-50 text-gray-800 rounded-lg shadow-md border border-gray-200">
      <p className="text-lg font-bold mb-4 text-pink-800">To-Do List</p>
      <div className="mb-4">
        <AddTodo todo={todos} onAdd={handleAdd} />
      </div>
      <div className="mb-4">
        <ToDoFilter onFilter={handleFilter} />
      </div>
      <List
        items={filteredToDos()}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
};
