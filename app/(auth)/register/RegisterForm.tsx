"use client";

import LoadingButton from "@/app/components/LoadingButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerUserSchema, registerUserValues } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerUser } from "./actions";
import { useToast } from "@/components/ui/use-toast";

const RegisterForm = () => {
  const { toast } = useToast();
  const form = useForm<registerUserValues>({
    resolver: zodResolver(registerUserSchema),
  });

  async function onSubmit(values: registerUserValues) {
    const { name, email, password } = values;

    try {
      await registerUser({ name, email, password });
      toast({
        description: "Account registered successfully.",
        className: "bg-green-600 text-white font-semiBold",
      });
    } catch (error) {
      toast({
        description: "Something went wrong, please try again.",
        className: "bg-red-600 text-white font-semiBold",
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton type="submit" loading={form.formState.isSubmitting}>
          Register
        </LoadingButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
