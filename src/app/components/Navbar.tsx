import Link from "next/link";
import LogoutForm from "./LogoutForm";
import { getSession } from "@/lib/action";

const Navbar = async() => {
  const session = await getSession()
  
  return (
    <div className="h-16 w-full bg-white flex justify-center items-center border">
      <div className="w-[80%] flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="font-extrabold text-lg uppercase text-teal-500"
        >
          Hello Ada Task)
        </Link>
        {/* SESSION */}
        <div className="flex gap-5 justify-center items-center">
          <div className="">{session.email?.split("@")[0]}</div>
          {session.isLoggedIn && <LogoutForm />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
