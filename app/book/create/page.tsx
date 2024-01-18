import React from "react";
import CreateBookForm from "./CreateBookForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const CreateBookPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex flex-col mt-11">
        <h1 className="text-3xl font-bold">Add Book</h1>
      </div>
      <div className="flex flex-col mt-5">
        <CreateBookForm />
      </div>
    </main>
  );
};

export default CreateBookPage;
