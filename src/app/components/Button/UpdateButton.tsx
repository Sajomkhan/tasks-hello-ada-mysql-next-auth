"use client";

import { useState } from "react";
import TaskModal from "../TaskModal";
import { Pencil } from "lucide-react";

const UpdateButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="border border-gray-300 hover:border-gray-400 rounded-sm p-1"
      onClick={()=> setOpen((prev)=>!prev)}>
        <Pencil size={16} />
      </div>
      {open && (
        <div className="absolute z-20 top-7 -right-6">
          <TaskModal modalType="update" setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default UpdateButton;
