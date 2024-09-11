import { TaskType } from "@/lib/data";
import axios from "axios";
import { X } from "lucide-react";
import { FormEvent, useState } from "react";

type ModatType = "create" | "update";

const TaskModal = ({
  modalType,
  setOpen,
  task,
}: {
  modalType: ModatType;
  setOpen: any;
  task?: TaskType;
}) => {
  const [taskInput, setTaskInput] = useState({
    title: task?.title || "",
    desc: task?.desc || "",
  });

  const handleOnChange = (e: any) => {
    setTaskInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // CTEATE TASK
  const createTask = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("api/task", taskInput);
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE TASK
  const updateTask = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/task?id=${task?.id}`, taskInput);
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-96 bg-white flex flex-col gap-4 rounded-lg py-4 px-6 border-2 shadow-lg">
      {/* CLOSE ICON */}
      <div className="self-end border rounded-sm hover:border-red-500 p-0.5">
        <X color="#ec1313" size={20} onClick={() => setOpen(false)} />
      </div>
      {/* TASK FORM */}
      <form action="" className="flex flex-col gap-5">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={taskInput?.title}
          onChange={(e) => handleOnChange(e)}
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={taskInput?.desc}
          rows={5}
          onChange={(e) => handleOnChange(e)}
        />
        {/* CONDITIONAL BUTTON */}
        {modalType === "create" ? (
          <button className="btn mt-2" onClick={createTask}>
            Create
          </button>
        ) : (
          <button className="btn mt-2" onClick={updateTask}>
            Update
          </button>
        )}
      </form>
    </div>
  );
};

export default TaskModal;
