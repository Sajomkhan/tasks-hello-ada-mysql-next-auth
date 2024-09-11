import { logout } from "@/lib/action";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button className="bg-teal-500 text-white  px-2 rounded-sm">
        Logout
      </button>
    </form>
  );
};

export default LogoutForm;
