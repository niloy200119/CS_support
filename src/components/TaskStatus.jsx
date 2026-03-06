const TaskStatus = ({ inProgress, resolved, onComplete }) => {
  return (
    <aside className="min-w-[260px] flex-1">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Task Status</h2>
      {inProgress.length === 0 ? (
        <p className="text-gray-400 text-sm italic">No active tasks. Click a ticket to add it here.</p>
      ) : (
        inProgress.map((task) => (
          <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-3.5 mb-3 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-800 mb-2.5">{task.title}</h4>
            <button
              onClick={() => onComplete(task)}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold cursor-pointer transition-colors"
            >
              Complete
            </button>
          </div>
        ))
      )}

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Resolved Tasks</h3>
      {resolved.length === 0 ? (
        <p className="text-gray-400 text-sm italic">No resolved tasks yet.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {resolved.map((task) => (
            <span key={task.id} className="bg-purple-100 text-purple-700 px-3.5 py-1.5 rounded-full text-sm font-medium">
              {task.title}
            </span>
          ))}
        </div>
      )}
    </aside>
  );
};

export default TaskStatus;
