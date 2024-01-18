import BookCard from "@/app/components/BookCard";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getBooks(id: number) {
  const books = await prisma?.book.findMany({
    where: { id },
    orderBy: { createdAt: "desc" },
  });
  return books;
}

const ProfilePage = async () => {
  const session = await getServerSession();

  if (!session) redirect("/login");

  const books = await getBooks(session?.user?.id);

  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex flex-col mt-11 gap-2">
        <h1 className="text-3xl font-bold">{session.user?.name}</h1>
        <p className="text-muted-foreground">{session.user?.email}</p>
      </div>
      <h1 className="text-3xl font-bold mt-11">My Books</h1>

      <div className="grid grid-cols-1 mt-4 gap-3 md:grid-cols-3">
        {books?.map((book) => (
          <Link key={book.id} href={`/book/${book.slug}`}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProfilePage;
