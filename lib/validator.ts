import * as z from "zod";
import { checkFileType } from "./utils";

const MAX_FILE_SIZE = 5000000;

export const addBookSchema = z.object({
  title: z.string().min(1, "required").max(100),
  description: z.string().min(1, "required").max(500),
  author: z.string().min(1, "required").max(100),
  image: z
    .any()
    .refine((file: any) => file?.length !== 0, "File is required")
    .refine((file) => file?.size < MAX_FILE_SIZE, "Max size is 5MB.")
    .refine(
      (file) => checkFileType({ file, types: ["jpg", "jpeg", "png"] }),
      "Only .jpg, .jpeg, .png formats are supported."
    ),
  pdfFile: z
    .any()
    .refine((file: any) => file?.length !== 0, "File is required")
    .refine((file) => file?.size < MAX_FILE_SIZE, "Max size is 5MB.")
    .refine(
      (file) => checkFileType({ file, types: ["pdf", "docx"] }),
      "Only .pdf, .docx formats are supported."
    ),
});

export type addBookValues = z.infer<typeof addBookSchema>;

export const loginUserSchema = z.object({
  email: z.string().min(1, "required").email(),
  password: z.string().min(1, "required"),
});

export type loginUserValues = z.infer<typeof loginUserSchema>;
