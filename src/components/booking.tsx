"use client";
import { useUser } from "@stackframe/stack";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form as MyForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";
import useStore from "@/hooks/zustand";
import { useFormStatus } from "react-dom";

const Meal = z.enum([
  "fried rice plus",
  "jollof rice plus",
  "ofada rice plus",
  "Egusi",
  "Afang",
  "Edikiakong",
  "Banga",
  "Bitter leaf",
  "Ewedu",
  "Ogbono",
]);
const meals = [
  { label: "fried rice plus", value: "fried rice plus" },
  { label: "jollof rice plus", value: "jollof rice plus" },
  { label: "ofada rice plus", value: "ofada rice plus" },
  { label: "Egusi", value: "Egusi" },
  { label: "Edikiakong", value: "Edikiakong" },
  { label: "Afang", value: "Afang" },
  { label: "Banga", value: "Banga" },
  { label: "Bitter leaf", value: "Bitter leaf" },
  { label: "Ogbono", value: "Ogbono" },
  { label: "Ewedu", value: "Ewedu" },
] as const;
const noPersons = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
] as const;

const FormSchema = z.object({
  dob: z.date({
    required_error: "A reservation date is required.",
  }),
  numberOfPersons: z.string(),
  purpose: z.string(),
  userId: z.string(),
  meal: Meal,
  name: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
});

export function ReservationForm() {
  const createBooking = useStore((state) => state.createRes);
  const Bookings = useStore((state) => state.booking);
  const user = useUser({ or: "redirect" });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      numberOfPersons: "",
      purpose: "",
      userId: "",
      meal: "Afang",
    },
  });

  const { pending } = useFormStatus();
  function onSubmit(values: z.infer<typeof FormSchema>) {
    createBooking(values);
    console.log(values);
  }
  return (
    <div className="form__bg ">
      <p className="text-white text-center pt-6">
        Hi, {user.displayName} {Bookings.length}
      </p>
      ;<p className="text-white"></p>
      <h1 className=" text-center font-normal text-3xl text-white py-5">
        Make Reservation
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Include your last name and first name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Purpose</FormLabel>
                  <FormControl>
                    <Input placeholder="Reservation purpose" {...field} />
                  </FormControl>
                  <FormDescription>
                    Reason/purpose of reservation
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfPersons"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className=" text-white">Table for:</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? noPersons.find(
                                (person) => person.value === field.value
                              )?.label
                            : "Select number of persons"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search number of persons..." />
                        <CommandList>
                          <CommandEmpty>Not found.</CommandEmpty>
                          <CommandGroup>
                            {noPersons.map((person) => (
                              <CommandItem
                                value={person.label}
                                key={person.value}
                                onSelect={() => {
                                  form.setValue(
                                    "numberOfPersons",
                                    person.value
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    person.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {person.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Number of persons</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className=" text-white">
                    Reservation date
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Reservation date</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="meal"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className=" text-white">Delicacies</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? meals.find((meal) => meal.value === field.value)
                                ?.label
                            : "Select delicacy"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search delicacy..." />
                        <CommandList>
                          <CommandEmpty>No delicacy found.</CommandEmpty>
                          <CommandGroup>
                            {meals.map((meal) => (
                              <CommandItem
                                value={meal.label}
                                key={meal.value}
                                onSelect={() => {
                                  form.setValue("meal", meal.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    meal.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {meal.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Available cuisine</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={pending} type="submit">
              {pending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </MyForm>
        <div className=" w-1/3 hidden md:block" />
      </div>
    </div>
  );
}
