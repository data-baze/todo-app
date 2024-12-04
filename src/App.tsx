// src/App.tsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import EditTask from "./components/EditTask";

const App: React.FC = () => {
  const [editingTask, setEditingTask] = useState<string | null>(null);

  const handleEdit = (taskId: string | null) => {
    setEditingTask(taskId);
  };

  const closeEditTask = () => {
    setEditingTask(null);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar onEditTask={handleEdit} />

      {/* Edit Task */}
      {editingTask ? (
        <EditTask taskId={editingTask} onClose={closeEditTask} />
      ) : (
        <div className="flex-1 bg-gray-100 flex items-center justify-center">
          <h1 className="text-xl font-bold text-gray-700">
            Select a task to edit or create a new one
          </h1>
        </div>
      )}
    </div>
  );
};

export default App;
