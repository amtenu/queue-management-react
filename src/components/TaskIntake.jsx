import { useState } from "react";

export default function TaskIntake({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Normal");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === "") return;

    onAdd(taskName, priority);

    setTaskName("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">1. Entry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task name..."
          value={taskName} // The box shows what is in the "Memory"
          onChange={(e) => setTaskName(e.target.value)} // Update memory as we type
          className="w-full p-2 border rounded text-gray-900"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded text-gray-900"
        >
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded font-bold">
          Add Task
        </button>
      </form>
    </div>
  );
}
