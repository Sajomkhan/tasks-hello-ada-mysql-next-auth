"use client";
import { X } from "lucide-react";
import AddButton from "./components/Button/AddButton";
import UpdateButton from "./components/Button/UpdateButton";
import { useState } from "react";

type TaskType = {
  id: number;
  title: string;
  desc: string;
};

const taskData: TaskType[] = [
  {
    id: 1,
    title: "Collect the new technologies",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione veritatis eveniet illo cumque sed odio obcaecati. Ut, itaque quis.",
  },
  {
    id: 2,
    title: "Collect the new technologies",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione veritatis eveniet illo cumque sed odio obcaecati. Ut, itaque quis.",
  },
  {
    id: 3,
    title: "Collect the new technologies",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione veritatis eveniet illo cumque sed odio obcaecati. Ut, itaque quis.",
  },
];

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>(taskData);

  const handleDelete = (id: number) => {
    console.log(id);
    
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  return (
    <div className="">
      <div className="max-w-2xl mx-auto flex flex-col gap-6 mt-6">
        {/* HEAD LINE */}
        <h1 className="text-lg font-bold uppercase text-center">
          A simple task managing web application
        </h1>
        {/* ADD TASK */}
        <AddButton />
        {/* TASK CARD */}
        {tasks.map((task) => (
          <div
            className="flex flex-col bg-white pt-2 px-4 pb-4 rounded-lg shadow-lg"
            key={task.id}
          >
            <div className="self-end flex gap-4 ">
              {/* UPDATE BUTTON */}
              <UpdateButton />
              <div
                className="self-end border border-gray-300 hover:border-red-500 rounded-sm p-0.5"
                onClick={() => handleDelete(task.id)}
              >
                {/* DELETE BUTTON */}
                <X color="#ec1313" size={20} />
              </div>
            </div>
            <h1 className="text-xl font-semibold">{task.title}</h1>
            <p className="mt-2">{task.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
