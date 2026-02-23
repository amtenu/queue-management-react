import { useState } from "react";
import TaskIntake from "./components/TaskIntake";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name, priority) => {
    const newTask = {
      id: crypto.randomUUID(), // Gives every task a unique
      name: name,
      priority: priority,
      status: "pending",
      createdAt: new Date().toLocaleTimeString(),
    };

    setTasks([...tasks, newTask]); //keeping the old tasks add the new task
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 text-gray-900">
      <h1 className="text-3xl font-black text-center mb-10">
        QUEUE MANAGEMENT SYSTEM
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <TaskIntake onAdd={addTask} />

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Live Queue Data</h2>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="p-2 bg-gray-50 border rounded">
                <span className="font-bold">{task.name}</span> -
                <span className="text-blue-600 ml-2">{task.priority}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
