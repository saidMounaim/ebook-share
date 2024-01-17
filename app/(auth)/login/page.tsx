import { getServerSession } from "next-auth";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex flex-col mt-11">
        <h1 className="text-3xl font-bold">Login</h1>
      </div>
      <div className="flex flex-col mt-5">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
