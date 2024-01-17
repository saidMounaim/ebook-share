"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { addBookSchema, addBookValues } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createBook } from "./actions";

const CreateBookForm = () => {
  const form = useForm<addBookValues>({
    resolver: zodResolver(addBookSchema),
  });

  async function onSubmit(values: addBookValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createBook(formData);
    } catch (error) {
      toast({
        className: "bg-red text-white font-semiBold",
        description: "Something went wrong, please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Author" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field: { value, ...fieldValues } }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  {...fieldValues}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    fieldValues.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pdfFile"
          render={({ field: { value, ...fieldValues } }) => (
            <FormItem>
              <FormLabel>PDF File</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  {...fieldValues}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    fieldValues.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};

export default CreateBookForm;
