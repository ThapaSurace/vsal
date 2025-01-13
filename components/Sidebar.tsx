import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavLinks from "./NavBar";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center gap-10 sticky top-0 left-0">
      {/* <div className="flex flex-col items-center gap-4 mt-10">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-semibold">Bishal Daha Khatri</p>
          <p className="text-muted-foreground text-sm text-center">
            Public Health Officer
          </p>
        </div>
      </div> */}

      {/* navLinks */}
      <NavLinks />
    </div>
  );
}
