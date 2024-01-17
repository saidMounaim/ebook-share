import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CheckFileTypeProps {
  file: File;
  types: string[];
}

export function checkFileType({ file, types }: CheckFileTypeProps): boolean {
  if (file?.name) {
    const fileType = file.name.split(".").pop();
    if (fileType && types.includes(fileType)) {
      return true;
    }
  }
  return false;
}
