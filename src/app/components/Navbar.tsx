import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-white flex justify-center items-center border">
      <div className="w-[80%] flex justify-between items-center">
        <Link href="/" className="w-1/5 font-extrabold text-lg uppercase text-teal-500">
          Hello Ada Task)
        </Link>
        <Link href="/create" className="text-lg font-bold uppercase">
          A simple task managing web application
        </Link>
        <Link href="/update" className="w-1/5">
          Username
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
