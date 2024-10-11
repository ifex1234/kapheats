"use client";
import { useUser } from "@stackframe/stack";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form as MyForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export function ContactForm() {
  const user = useUser({ or: "redirect" });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="form__bg h-[100vh]">
      <p className="text-white text-center pt-6">
        Hi, {user.displayName} do you have a message for us?
      </p>
      ;
      <h1 className=" text-center font-normal text-3xl text-white py-5">
        Contact us
      </h1>
      <div className="form__content">
        <div className=" w-1/3 hidden md:block" />
        <MyForm {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full md:w-1/3"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Name</FormLabel>
                  <FormControl>
                    <Input
                      className=" h-16"
                      placeholder="Message title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Name</FormLabel>
                  <FormControl>
                    <Textarea
                      className=" h-60"
                      placeholder="Message body"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </MyForm>
        <div className=" w-1/3 hidden md:block" />
      </div>
    </div>
  );
}
