"use server";

import { toSlug } from "@/lib/utils";
import { addBookSchema } from "@/lib/validator";
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";
import path from "path";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createBook(formData: FormData) {
  const session = await getServerSession(authOptions);

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
      userId: session.user.id,
    },
  });

  redirect("/book-submitted");
}

export async function deleteBook(previousState: any, formData: FormData) {
  try {
    const bookId = parseInt(formData.get("bookId") as string);
    const userId = parseInt(formData.get("userId") as string);

    const session = await getServerSession(authOptions);

    if (session.user.id !== userId) {
      throw new Error("Unauthorized");
    }

    await prisma.book.delete({ where: { id: bookId } });

    revalidatePath("/user/profile");
  } catch (error: any) {
    let message = "Unexpected error";
    if (error) {
      message = error.message;
    }
    return { error: message };
  }
  redirect("/user/profile");
}
