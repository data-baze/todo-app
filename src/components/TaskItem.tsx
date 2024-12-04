// src/components/TaskItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";

interface TaskItemProps {
  id: string;
  name: string;
  completed: boolean;
  onEdit: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, name, completed, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white text-[#071D55] p-5 rounded shadow-lg">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodo({ id }))}
          className="w-5 h-5"
        />
        <span className={completed ? "line-through text-[#071D55]/70" : ""}>
          {name}
        </span>
      </div>
      <button
        onClick={onEdit}
        className=" text-[#071D55] px-3 py-1 rounded border border-[#071D55]"
      >
        Edit
      </button>
    </div>
  );
};

export default TaskItem;
