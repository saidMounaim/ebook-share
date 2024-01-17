"use server";

import { toSlug } from "@/lib/utils";
import { addBookSchema } from "@/lib/validator";
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";
import path from "path";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createBook(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { title, description, image, pdfFile, author } =
    addBookSchema.parse(values);

  const slug = `${toSlug(title)}-${nanoid(10)}`;

  let bookImage: string = "";
  let bookFile: string = "";

  if (image) {
    const blob = await put(`images/${slug}${path.extname(image.name)}`, image, {
      access: "public",
      addRandomSuffix: false,
    });
    bookImage = blob.url;
  }

  if (pdfFile) {
    const blob = await put(
      `files/${slug}${path.extname(pdfFile.name)}`,
      pdfFile,
      {
        access: "public",
        addRandomSuffix: false,
      }
    );
    bookFile = blob.url;
  }

  await prisma.book.create({
    data: {
      title,
      slug,
      description,
      author,
      pdfFile: bookFile,
      image: bookImage,
    },
  });

  redirect("/book-submitted");
}
