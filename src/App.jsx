import { useState } from "react";
import TaskIntake from "./components/TaskIntake";
import ActiveQueue from "./components/ActiveQueue";

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

  const startTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "processing",
              startedAt: new Date().toLocaleTimeString(),
            }
          : task,
      ),
    );
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "completed",
              completedAt: new Date().toLocaleTimeString(),
            }
          : task,
      ),
    );
  };

  const deleteTask = (id) => {
    // Filter means "Keep everything EXCEPT the one with this ID"
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 text-gray-900">
      <h1 className="text-3xl font-black text-center mb-10">
        QUEUE MANAGEMENT SYSTEM
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* The Producer */}
        <TaskIntake onAdd={addTask} />

        {/* The Worker (Form 2) */}
        <ActiveQueue
          // We only show tasks that are NOT completed here
          tasks={tasks.filter((t) => t.status !== "completed")}
          onStart={startTask}
          onComplete={completeTask}
          onDelete={deleteTask}
        />

        {/* The Archive (Placeholder for now) */}
        <div className="bg-gray-200 rounded-xl p-6 border-2 border-dashed border-gray-300 text-gray-400 text-center">
          Completed History will go here
        </div>
      </div>
    </div>
  );
}
