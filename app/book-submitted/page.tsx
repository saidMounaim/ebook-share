import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const BookSubmittedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex flex-col mt-11 gap-2">
        <h1 className="text-3xl font-bold">Book added successfully</h1>
        <p className="text-muted-foreground">
          Your book posting has been submitted and processed.
        </p>
      </div>
    </main>
  );
};

export default BookSubmittedPage;
