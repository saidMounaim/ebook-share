"use server";

import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

interface registerUserProps {
  name: string;
  email: string;
  password: string;
}

export async function registerUser({
  name,
  email,
  password,
}: registerUserProps) {
  const passwordHashed = bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHashed,
    },
  });

  redirect("/login");
}
