"use client";
import useStore from "@/hooks/zustand";
import React from "react";
import { Menu } from "@/constant/meal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "@/styles/menu.scss";

function Page() {
  const addMeal = useStore((state) => state.addMeal);

  return (
    <div className="menu__bg">
      <main className="menu_main_content ">
        {Menu.map((item) => (
          <div className="menu_main_items hover:shadow-custom" key={item.id}>
            <div className="menu_items ">
              <Image src={item.image} alt={String(item.mealName)} />
              <span className=" flex flex-col gap-3">
                <span>{item.mealName}</span>
                <span>price:{item.price}</span>
              </span>
            </div>

            <Button
              className=" hover:bg-orange-500 w-32"
              onClick={() => addMeal(item)}
            >
              Order meal
            </Button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Page;
