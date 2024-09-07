"use client";

import { useState } from "react";
import TaskModal from "./TaskModal";

const Button = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="relative">
      <button className="btn" onClick={() => setOpen((prev) => !prev)}>
        Add Task
      </button>
      {open && (
        <div className="absolute z-20 top-12 left-0">
          <TaskModal modalType="create" setOpen={setOpen}/>
        </div>
      )}
    </div>
  );
};

export default Button;
