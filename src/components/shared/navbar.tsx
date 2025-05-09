import Logo from "./logo-app";
import Searchbar from "./searchbar";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="poppins p-6 flex justify-between items-center">
      <div className="flex items-center gap-16">
        <Logo />
        <Searchbar /> 
      </div>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Separator orientation="vertical" className="h-5 w-[2px] bg-gray-500" />
        <Button className="text-white rounded-3xl h-10 shadow-none">
          Add New Project
        </Button>
      </div>
    </div>
  )
}