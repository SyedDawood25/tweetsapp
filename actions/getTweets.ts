"use server";

import { db } from '@/lib/db'

export const getTweets = async () => {
    return await db.tweet.findMany();
}