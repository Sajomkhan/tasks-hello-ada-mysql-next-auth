"use client";

import { useState } from "react";
import TaskModal from "../TaskModal";
import { Pencil } from "lucide-react";
import { TaskType } from "@/lib/data";

const UpdateButton = ({task}:{task:TaskType}) => {
  const [open, setOpen] = useState(false); 

  return (
    <div className="relative">
      <div className="border border-gray-300 hover:border-gray-400 rounded-sm p-1"
      onClick={()=> setOpen((prev)=>!prev)}>
        <Pencil size={16} />
      </div>
      {open && (
        <div className="absolute z-20 top-7 -right-6">
          <TaskModal modalType="update" setOpen={setOpen} task={task}/>
        </div>
      )}
    </div>
  );
};

export default UpdateButton;
