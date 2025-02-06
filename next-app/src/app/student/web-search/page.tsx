"use client";

import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  image?: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI Doubt solving assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSend = async (message: string, file?: File) => {
    try {
      setIsLoading(true);

      // Add user message
      const imageUrl = file ? URL.createObjectURL(file) : undefined;
      const userMessage: Message = {
        id: Date.now().toString(),
        content: message,
        isBot: false,
        image: imageUrl,
      };

      setMessages((prev) => [...prev, userMessage]);

      // Simulate AI response (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "This is a simulated response. Replace this with actual API integration.",
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-10 h-screen">
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isBot={message.isBot}
              image={message.image}
            />
          ))}
        </div>
      </main>
      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
};

export default Index;
