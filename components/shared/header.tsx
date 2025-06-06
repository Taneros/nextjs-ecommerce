import { cn } from "@/lib/utils";
import React from "react";
import { Container, SearchInput } from "@/components/shared";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface IHomeProps {
  className?: string;
}

export const Header: React.FC<IHomeProps> = ({ className }) => {
  return (
    <header className={cn("border border-button", className)}>
      <Container className="flex justify-between items-center py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Papa Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">У папы вкуснее</p>
          </div>
        </div>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex gap-3 items-center">
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className="group relative">
              <b>520 Р</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="relative" size={16} strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                size={20}
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
