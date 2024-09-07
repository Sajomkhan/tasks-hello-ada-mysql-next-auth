import Link from "next/link";
import Button from "./components/Button";

type TaskType = {
  id: number,
  title: string,
  desc: string,
}

const tasks: TaskType[] = [
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
  return (
    <div className="">
      <div className="max-w-2xl mx-auto flex flex-col gap-5 mt-10">
      <Button/>
        {tasks.map((task)=>(
          <div className="bg-white p-4 rounded-lg shadow-lg" key={task.id}>
            <h1 className="text-xl font-semibold">{task.title}</h1>
            <p className="mt-2">{task.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
