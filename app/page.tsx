import Link from "next/link";
import prisma from "../lib/prisma";
import BookCard from "./components/BookCard";

async function getBooks() {
  const books = await prisma?.book.findMany({});
  return books;
}

export default async function Home() {
  const books = await getBooks();

  return (
    <main className="max-w-4xl mx-auto my-5">
      <h1 className="text-3xl font-bold ">Latest Books</h1>

      <div className="grid grid-cols-4 mt-6 gap-3">
        {books.map((book) => (
          <Link key={book.id} href={`/book/${book.slug}`}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </main>
  );
}
