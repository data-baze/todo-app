import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TaskItem from "./TaskItem";
import ProfilePhoto from "/profile-photo.png";
import TrophyIcon from "/trophy-icon.svg";

interface SidebarProps {
  onEditTask: (taskId: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onEditTask }) => {
  const tasks = useSelector((state: RootState) => state.todos.tasks);

  return (
    <div className="border-r border-[#E7E7E7] text-white h-full w-[424px] flex flex-col">
      <div className="flex gap-2 px-8 py-4 bg-[#3556AB]">
        <img src={ProfilePhoto} alt="" className="h-12 w-12" />
        <div className="flex flex-col">
          <h2 className="text-base font-medium mb-2">Hello, Jhon</h2>
          <p className="mb-4 font-thin italic text-2xl">
            What are your plans for today?
          </p>
        </div>
      </div>

      <div className="bg-[#9EB031] pl-8 pb-6  space-x-5 flex justify-center">
        <img src={TrophyIcon} alt="Yellowish Trophy icon" className="pt-6" />
        <h5 className="font-bold text-lg text-[#071D55] pt-10">
          Go Pro Upgrade Now
        </h5>
        <div className="bg-[#071D55] p-8 text-[#F2C94C]">$1</div>
      </div>

      {/* Task List */}
      <div className="py-6 px-3">
        <div className="flex-1 space-y-4 overflow-y-auto">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              onEdit={() => onEditTask(task.id)}
            />
          ))}
        </div>
      </div>
      {/* Floating Add Task Button */}
      <button
        onClick={() => onEditTask("new")}
        className="bg-[#3556AB] border border-[#123EB1] text-white w-12 h-12 rounded-full flex items-center justify-center absolute bottom-6 right-6 shadow-lg "
      >
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_243_231)">
            <path
              d="M17.9141 8.27148V11.3301H0.371094V8.27148H17.9141ZM10.7773 0.800781V19.4336H7.52539V0.800781H10.7773Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_243_231"
              x="0.371094"
              y="0.800781"
              width="17.543"
              height="20.6328"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_243_231"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_243_231"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
