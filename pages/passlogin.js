import { useState } from "react";
import supabase from "../client";
import { useRouter } from "next/router";

const SignIn = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const router = useRouter();
  const user = supabase.auth.user();
  user ? router.push("/index") : null;
  
  return (
    <>
      <div className="min-h-screen min-w-screen bg-gray-700 flex justify-center items-center">
        <form
          className="px-10 py-8 rounded-sm bg-white shadow flex flex-col gap-4"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
            value={mail}
            onChange={e => setMail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter a password..."
            className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />

          <button
            className="px-4 py-2 rounded-sm bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};
const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: mail,
      password: pass,
    });
  
    error ? console.log(error) : console.log(user);
    };

export default SignIn;
