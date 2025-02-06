import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  image?: string;
}

export const ChatMessage = ({ message, isBot, image }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-3 p-4 message-appear",
        isBot ? "bg-secondary/50" : "bg-background"
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={isBot ? "/bot-avatar.png" : "/user-avatar.png"} />
        <AvatarFallback>{isBot ? "AI" : "You"}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 w-full max-w-4xl">
        <span className="text-sm font-semibold">
          {isBot ? "AI Assistant" : "You"}
        </span>
        {image && (
          <img
            src={image}
            alt="Uploaded content"
            className="max-w-xs rounded-lg shadow-sm"
          />
        )}
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
};
