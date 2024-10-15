"use client";

import { useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import ChatInput from "./input";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-col gap-3 border rounded-lg h-60 max-h-60 overflow-y-auto p-2">
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex",
              m.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <span
              className={cn(
                "py-2 px-4 rounded-lg",
                m.role === "user"
                  ? "bg-secondary text-primary rounded-tr-none"
                  : "bg-primary text-secondary rounded-tl-none"
              )}
            >
              {m.content}
            </span>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Chat;
