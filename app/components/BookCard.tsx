import { Book } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book: { title, image, author } }: BookCardProps) => {
  return (
    <article className="flex flex-col">
      <div className="h-[300px] flex flex-col relative">
        <Image src={image} alt={title} className="object-cover" fill />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <span className="text-md text-muted-foreground font-medium">
          {author}
        </span>
        <h3 className="text-1xl font-bold">{title}</h3>
      </div>
    </article>
  );
};

export default BookCard;
