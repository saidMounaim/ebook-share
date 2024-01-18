"use client";

import { useFormState } from "react-dom";
import { deleteBook } from "../book/create/actions";
import FormSubmitButton from "./FormSubmitButton";

interface DeleteBookButtonProps {
  userId: number;
  bookId: number;
}

const DeleteBookButton = ({ userId, bookId }: DeleteBookButtonProps) => {
  const [formState, formAction] = useFormState(deleteBook, undefined);

  return (
    <form action={formAction}>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="bookId" value={bookId} />
      <FormSubmitButton
        type="submit"
        className="w-full bg-red-600 hover:bg-red-900"
      >
        Delete book
      </FormSubmitButton>
    </form>
  );
};

export default DeleteBookButton;
