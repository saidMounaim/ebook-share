import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { Book } from "@prisma/client";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import DeleteBookButton from "@/app/components/DeleteBookButton";

interface BookDetailsProps {
  book: Book;
}

const BookDetails = async ({
  book: { id, title, image, description, author, pdfFile, userId },
}: BookDetailsProps) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex gap-6 mt-11">
      <div className="flex flex-col gap-3">
        <div className="w-[250px] h-[300px] flex flex-col relative">
          <Image src={image} alt={title} className="object-cover" fill />
        </div>
        <div className="flex flex-col gap-2">
          <Button asChild>
            <Link
              href={pdfFile}
              target="_blank"
              rel="nopener"
              className="w-full"
            >
              Download
            </Link>
          </Button>
          {session.user.id == userId && (
            <DeleteBookButton userId={userId} bookId={id} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="text-md text-muted-foreground font-medium">
          {author}
        </span>
        <div className="flex flex-col mt-4">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
