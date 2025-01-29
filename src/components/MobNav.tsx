import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-4">
        <SheetTitle>
          <span>Welcome to FoodEats.com</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobNav;
