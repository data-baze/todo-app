import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, editTodo, deleteTodo } from "../features/todo/todoSlice";

interface EditTaskProps {
  taskId: string | null;
  onClose: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ taskId, onClose }) => {
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) =>
    state.todos.tasks.find((task) => task.id === taskId)
  );

  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (taskId !== "new" && task) {
      setTaskName(task.name);
    } else {
      setTaskName("");
    }
  }, [taskId, task]);

  const handleSave = () => {
    if (taskId === "new") {
      dispatch(addTodo({ name: taskName }));
    } else if (taskId && taskName.trim()) {
      dispatch(editTodo({ id: taskId, name: taskName }));
    }
    onClose();
  };

  const handleDelete = () => {
    if (taskId && taskId !== "new") {
      dispatch(deleteTodo({ id: taskId }));
    }
    onClose();
  };

  return (
    <div className="flex-1 bg-white  flex flex-col justify-between shadow-lg">
      {/* Header */}
      <div className="flex gap-2 px-8 py-6 h-[144px] bg-[#3556AB] justify-center  mb-4">
        <h2 className="text-2xl font-medium mb-6 text-white">
          {taskId === "new" ? "Add New Task" : "Edit Task"}
        </h2>
      </div>

      {/* Input Field */}
      <div className="flex-1 px-4 space-y-2">
        <label htmlFor="task" className="mb-2">
          {" "}
          Task Name
        </label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          className="w-full p-3 border border-gray-300 rounded text-lg"
        />
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex justify-between p-4 space-x-8">
        {/* Delete Button */}
        {taskId !== "new" && (
          <button
            onClick={handleDelete}
            className="bg-[#AB3535] text-white px-4 py-2 rounded border border-[#720D0D]"
          >
            Delete
          </button>
        )}

        <div className="flex-1  ">
          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={!taskName.trim()}
            className="bg-blue-500 text-white px-4 py-2 min-w-[500px] rounded hover:bg-blue-600 disabled:bg-gray-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
