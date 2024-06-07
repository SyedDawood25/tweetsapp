"use server";

import { db } from '@/lib/db';

export const removeTweet = async (id: number) => {
    const tweet = await db.tweet.delete({
        where: {id: id}
    })
}