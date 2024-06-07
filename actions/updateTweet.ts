"use server";
import { db } from '@/lib/db';

export const updateTweetLikes = async (updatedTweet: any) => {
    const tweet = await db.tweet.update({
        where: {id : updatedTweet.id},
        data : {
            liked : updatedTweet.liked,
            totalLikes: updatedTweet.totalLikes
        }
    })
}