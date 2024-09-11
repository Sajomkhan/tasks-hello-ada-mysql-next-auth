"use client"
import { taskData, TaskType } from "@/lib/data";
import { useEffect, useState } from "react";
import UpdateButton from "./Button/UpdateButton";
import axios from "axios";
import { X } from "lucide-react";

const TaskCard = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  // TASK DATA FETCHING
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("api/task");
        setTasks(res?.data || taskData);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof Error) {
          console.log({ error: error.message });
        } else {
          console.log("An unknown error occurred.");
        }
      }
    };
    fetchTasks();
  }, []);

  // DELETE TASK FUNCTION
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/task?id=${id}`);
      console.log("Task deleted successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {tasks?.sort((a, b) => b.id - a.id).map((task) => (
        <div
          className="flex flex-col bg-white pt-2 px-4 pb-4 rounded-lg shadow-lg"
          key={task.id}
        >
          <div className="self-end flex gap-4 ">
            {/* UPDATE BUTTON */}
            <UpdateButton task={task} />
            <div
              className="self-end border border-gray-300 hover:border-red-500 rounded-sm p-0.5"
              onClick={() => handleDelete(task?.id)}
            >
              {/* DELETE BUTTON */}
              <X color="#ec1313" size={20} />
            </div>
          </div>
          <h1 className="text-xl font-semibold">{task?.title}</h1>
          <p className="mt-2">{task?.desc}</p>
        </div>
      ))}
    </>
  );
};

export default TaskCard;
