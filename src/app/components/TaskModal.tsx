import { X } from "lucide-react";

type TaskType = "create" | "update";

const TaskModal = ({ modalType, setOpen }: { modalType: TaskType, setOpen: any}) => {
  return (
    <div className="w-96 bg-white flex flex-col gap-4 rounded-lg py-4 px-6 border-1 shadow-lg">
      <div className="self-end border hover:border-red-500 p-0.5">
        <X color="#ec1313" size={20} onClick={()=>setOpen(false)}/>
      </div>
      <form action="" className="flex flex-col gap-5">
        <input type="text" placeholder="Title" />
        <textarea name="desc" placeholder="Description"/>
        {/* <input type="text" placeholder="Description" /> */}
        <button className="btn mt-2">{modalType === 'create' ? "Create" : "Update"}</button>
      </form>
    </div>
  );
};

export default TaskModal;
