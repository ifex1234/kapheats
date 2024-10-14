import { StaticImageData } from "next/image";
import { toast } from "sonner";
import { create } from "zustand";

type BookingSchema = {
  name: string;
  dob: Date;
  meal: string;
  numberOfPersons: string;
  userId: string;
  purpose: string;
};

type BookingsSchema = {
  name: string;
  dob: Date;
  meal: string;
  numberOfPersons: string;
  userId: string;
  purpose: string;
}[];

type Meals = {
  id: number;
  mealName: string;
  price: number;
  image: StaticImageData;
}[];
type MealProp = {
  id: number;
  mealName: string;
  image: StaticImageData;
  price: number;
};
type StoreProp = {
  booking: BookingsSchema;
  meal: Meals;
  createRes: (data: BookingSchema) => void;
  addMeal: (data: MealProp) => void;
  removeMeal: (id: number) => void;
};
const useStore = create<StoreProp>((set) => ({
  booking: [],
  meal: [],
  addMeal: (data) => {
    set((state) => ({
      meal: state.meal.concat(data),
    }));
    setTimeout(() => toast("Item added"), 500);
  },
  removeMeal: (id: number) => {
    set((state) => ({ meal: state.meal.filter((item) => item.id !== id) }));
    setTimeout(() => toast("Item removed"), 500);
  },
  createRes: (data) => {
    set((state) => ({
      booking: state.booking.concat(data),
    }));
    setTimeout(() => toast("Table reservation created"), 500);
  },
}));

export default useStore;
