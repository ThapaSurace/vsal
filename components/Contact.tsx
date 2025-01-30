import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";

export default function Contact() {
  return (
    <div className="mt-16 flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-32">
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-md">
            <Mail />
          </div>
          <span>vsaldahal22@gmail.com</span>
        </div>
      </div>
      <Separator className="md:hidden" />
      <form className="space-y-4 flex-1">
        <div className="flex gap-4">
          <div className="space-y-2 flex-1">
            <Label htmlFor="fullname">Fullname</Label>
            <Input id="fullname" placeholder="Enter your fullname" />
          </div>
          <div className="space-y-2 flex-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subjext" placeholder="Enter subject" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message" rows={3} />
        </div>

        <Button className="w-full">Submit</Button>
      </form>
    </div>
  );
}
