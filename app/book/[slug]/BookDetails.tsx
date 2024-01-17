import { Button } from "@/components/ui/button";
import { Book } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface BookDetailsProps {
  book: Book;
}

const BookDetails = ({
  book: { title, image, description, author, pdfFile },
}: BookDetailsProps) => {
  return (
    <div className="flex gap-6 mt-11">
      <div className="flex flex-col gap-3">
        <div className="w-[250px] h-[300px] flex flex-col relative">
          <Image src={image} alt={title} className="object-cover" fill />
        </div>
        <div>
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
