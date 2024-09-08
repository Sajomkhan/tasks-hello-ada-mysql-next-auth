import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-white flex justify-center items-center border">
      <div className="w-[80%] flex justify-between items-center">
        <Link
          href="/"
          className="font-extrabold text-lg uppercase text-teal-500"
        >
          Hello Ada Task)
        </Link>

        <Link href="" className="">
          Username
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
