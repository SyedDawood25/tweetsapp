import {z} from 'zod';

export const TweetSchema = z.object({
  tweet: z.string().min(2).max(200),
})