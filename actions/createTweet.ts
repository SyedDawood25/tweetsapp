"use server";

import { TweetSchema } from "@/schemas/tweetSchema";
import { z } from "zod";
import { db } from '@/lib/db';

export const createTweet = async (values: z.infer<typeof TweetSchema>, username: string|null|undefined) => {

    const validatedValues = TweetSchema.safeParse(values);

    if(!validatedValues?.success) {
        return {
            error: 'Invalid Values'
        }
    }

    const tweet = await db.tweet.create({
        data: {
            tweet: validatedValues?.data.tweet,
            owner: username,
            liked: false,
            totalLikes: 0
        }
    })
}