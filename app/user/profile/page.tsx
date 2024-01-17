import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession();

  if (!session) redirect("/login");

  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex flex-col mt-11 gap-2">
        <h1 className="text-3xl font-bold">{session.user?.name}</h1>
        <p className="text-muted-foreground">{session.user?.email}</p>
      </div>
    </main>
  );
};

export default ProfilePage;
