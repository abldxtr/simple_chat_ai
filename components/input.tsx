"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { ChangeEvent, FormEvent } from "react";
import { ChatRequestOptions } from "ai";
// import { ChatRequestOptions } from "ai";
import { SendIcon } from "lucide-react";

const formSchema = z.object({
  message: z
    .string()
    .min(2, { message: "Please enter a message, at least 2 characters." }),
});

interface Props {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    ChatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
}

const ChatInput: React.FC<Props> = ({
  input,
  handleInputChange,
  handleSubmit,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder="Send a message..."
                  {...field}
                  value={input}
                  onChange={handleInputChange}
                  className="focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"icon"} type="submit">
          <SendIcon className="w-5 h-5" />
        </Button>
      </form>
    </Form>
  );
};

export default ChatInput;
