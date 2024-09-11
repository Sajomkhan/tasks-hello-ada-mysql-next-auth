
import AddButton from "../components/Button/AddButton";
import TaskCard from "../components/TaskCard";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto flex flex-col gap-6 mt-6 mb-12">
        {/* HEAD LINE */}
        <h1 className="text-xl font-bold uppercase text-center">
          A simple task managing web application
        </h1>
        {/* ADD TASK */}
        <AddButton />
        {/* TASK CARD */}
        <TaskCard />
      </div>
    </div>
  );
}
