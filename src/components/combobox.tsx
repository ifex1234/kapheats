"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
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
import { toast } from "@/hooks/use-toast";

const meals = [
  { label: "fried_rice", value: "fr" },
  { label: "jollof_rice", value: "jr" },
  { label: "Egusi", value: "eg" },
  { label: "Edikiakong", value: "ed" },
  { label: "Afang", value: "af" },
  { label: "Banga", value: "ba" },
  { label: "Bitter_leaf", value: "bl" },
  { label: "Ogbono", value: "og" },
  { label: "Ewedu", value: "ew" },
] as const;

const FormSchema = z.object({
  meal: z.string({
    required_error: "Please select delicacy.",
  }),
});

export function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="meal"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Delicacies</FormLabel>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
