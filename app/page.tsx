import prisma from "../lib/prisma";

async function getBooks() {
  const books = await prisma?.book.findMany({});
  return books;
}

export default async function Home() {
  const books = await getBooks();

  console.log(books);

  return (
    <main className="max-w-4xl mx-auto my-5">
      <h1 className="text-3xl font-bold ">Latest Books</h1>
    </main>
  );
}
