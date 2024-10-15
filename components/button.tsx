import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircleIcon } from "lucide-react";
import Chat from "./chat";

const ChatButton = () => {
  return (
    <Dialog>
      <DialogTrigger className="relative p-6 border border-primary rounded-full shadow-lg dark:bg-primary hover:bg-primary duration-300 group">
        <MessageCircleIcon className="h-6 w-6 dark:text-secondary group-hover:text-background duration-300" />
        <span className="absolute top-0 right-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center sm:justify-start gap-x-2">
            <MessageCircleIcon className="h-6 w-6" />
            Live support chat
          </DialogTitle>
          <DialogDescription>Be gentle talking to the bot.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <Chat />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatButton;
