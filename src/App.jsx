
import './App.css';
import { ToDoList } from './components/todo-list';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-pink-50 shadow-lg rounded-lg border border-gray-200">
        <header className="bg-pink-100 text-pink-800 text-lg font-semibold p-4 rounded-t-lg">
          My To-Do List
        </header>
        <div className="p-4">
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
