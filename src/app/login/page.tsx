import { login } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 flex flex-col gap-10 bg-white px-6 py-14 rounded-lg">
        <h1 className="text-xl font-semibold text-center">
          Log in your account
        </h1>
        {/* LOGIN FORM */}
        <form action={login} className="flex flex-col gap-8">
          <input type="text" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <div className="flex items-center justify-between">
            {/* GO FOR SING UP */}
            <p className="text-sm text-gray-500">
              No account?{" "}
              <a className="underline hover:text-teal-500" href="/register">
                Sign up
              </a>
            </p>
            {/* LOGIN BUTTON */}
            <button className="w-fit py-1 px-3 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-all ease-linear duration-150">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
