import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "@/components/shared";
import Image from "next/image";
import { Button } from "@/components/ui";
import { User } from "lucide-react";

interface IHomeProps {
  className?: string;
}

export const Header: React.FC<IHomeProps> = ({ className }) => {
  return (
    <header className={cn("border border-button", className)}>
      <Container className="flex justify-between items-center py-8 px-4">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Papa Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">У папы вкуснее</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
        </div>
      </Container>
    </header>
  );
};
