"use client";

import { TweetSchema } from "@/schemas/tweetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaTwitter } from "react-icons/fa6";
import { useUser } from "@clerk/nextjs";
import { createTweet } from "@/actions/createTweet";

export const TweetForm = () => {
  const { user } = useUser();

  const form = useForm<z.infer<typeof TweetSchema>>({
    resolver: zodResolver(TweetSchema),
    defaultValues: {
      tweet: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof TweetSchema>) {
    createTweet(values, user?.username);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-screen h-[100px] items-center justify-center space-x-8"
      >
        <FormField
          control={form.control}
          name="tweet"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="flex w-[1200px] border-2 border-slate-700"
                  placeholder="Make your Tweet!"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-700">
          Tweet
          <span className="ml-4">
            <FaTwitter size={15} />
          </span>
        </Button>
      </form>
    </Form>
  );
};
