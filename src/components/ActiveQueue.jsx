export default function ActiveQueue({ tasks, onStart, onComplete, onDelete }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2 flex justify-between items-center">
        Current Work
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
          {tasks.length}
        </span>
      </h2>

      {tasks.length === 0 && (
        <p className="text-gray-400 italic text-sm text-center py-10">
          Queue is empty. Add a task to begin.
        </p>
      )}

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 border rounded-lg shadow-sm transition-all ${
              task.status === "processing"
                ? "bg-blue-50 border-blue-300"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-800">{task.name}</h3>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Priority: {task.priority}
                </p>
              </div>

              <button
                onClick={() => onDelete(task.id)}
                className="text-gray-300 hover:text-red-500 transition-colors"
                title="Remove task"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              {task.status === "pending" ? (
                <button
                  onClick={() => onStart(task.id)}
                  className="w-full bg-blue-600 text-white text-sm py-2 rounded font-semibold hover:bg-blue-700 transition"
                >
                  Start Process
                </button>
              ) : (
                <button
                  onClick={() => onComplete(task.id)}
                  className="w-full bg-green-600 text-white text-sm py-2 rounded font-semibold hover:bg-green-700 animate-pulse"
                >
                  Finish Task
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
