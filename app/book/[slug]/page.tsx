import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import BookDetails from "./BookDetails";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getBook(slug: string) {
  const book = await prisma.book.findFirst({ where: { slug } });
  return book;
}

const BookDetailsPage = async ({ params: { slug } }: PageProps) => {
  const book = await getBook(slug);

  if (!book) notFound();

  return (
    <main className="max-w-3xl mx-auto">
      <BookDetails book={book} />
    </main>
  );
};

export default BookDetailsPage;
