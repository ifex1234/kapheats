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
//import { toast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
// import { useFormState, useFormStatus } from "react-dom";
// import { BookTable, Submit } from "./actions";

const Meal = z.enum([
  "fried_rice",
  "jollof_rice",
  "Egusi",
  "Afang",
  "Edikiakong",
  "Banga",
  "Bitter_leaf",
  "Ewedu",
  "Ogbono",
]);
const meals = [
  { label: "fried_rice", value: "fried_rice" },
  { label: "jollof_rice", value: "jollof_rice" },
  { label: "Egusi", value: "Egusi" },
  { label: "Edikiakong", value: "Edikiakong" },
  { label: "Afang", value: "Afang" },
  { label: "Banga", value: "Banga" },
  { label: "Bitter_leaf", value: "Bitter_leaf" },
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
// const initialState = {
//   name: "",
//   numberOfPersons: "",
//   purpose: "",
//   userId: "",
//   meals: "",
// };

export function ReservationForm() {
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

  // const [state, formAction] = useFormState(BookTable, initialState);
  // const { pending } = useFormStatus();

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log(data);
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }

  return (
    <div className="form__bg ">
      <p className="text-white text-center pt-6">Hi, {user.displayName}</p>;
      <h1 className=" text-center font-normal text-3xl text-white py-5">
        Make Reservation
      </h1>
      <div className="form__content">
        <div className=" w-1/3 hidden md:block" />
        <MyForm {...form}>
          <form
            //onSubmit={form.handleSubmit(onSubmit)}
            // action={Submit}
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
            {/* <p aria-live="polite">{state.userId}</p>
            <Button disabled={pending} type="submit">
              {pending ? "Submitting..." : "Submit"}
            </Button> */}
          </form>
        </MyForm>
        <div className=" w-1/3 hidden md:block" />
      </div>
    </div>
  );
}
