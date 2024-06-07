import { updateTweetLikes } from "@/actions/updateTweet";
import { removeTweet } from "@/actions/deleteTweet";
import { useCallback, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { cn } from "@/lib/utils";

type TweetCardProps = {
  tweet: any;
  username: string | null | undefined;
};

export const TweetCard = ({ tweet, username }: TweetCardProps) => {
  const likeTweet = useCallback(() => {
    const totalLikes = tweet.totalLikes + 1;
    const updatedTweet = {
      id: tweet.id,
      liked: true,
      totalLikes: totalLikes,
    };
    updateTweetLikes(updatedTweet);
  }, [tweet.totalLikes]);

  const unlikeTweet = useCallback(() => {
    const totalLikes = tweet.totalLikes - 1;
    const updatedTweet = {
      id: tweet.id,
      liked: false,
      totalLikes: totalLikes,
    };
    updateTweetLikes(updatedTweet);
  }, [tweet.totalLikes]);

  const deleteTweet = useCallback(() => {
    removeTweet(tweet.id);
  }, [tweet.id]);

  const getTime = (tweet: any) => {
    var timeDiff = new Date().getTime() - tweet.createdAt.getTime();
    var timeInSeconds = timeDiff / 1000;
    if (timeInSeconds <= 59) {
      return "Just Now";
    } else {
      var timeInMinutes = Math.round(timeInSeconds / 60);
      if (timeInMinutes <= 59) {
        return `${timeInMinutes} Minutes Ago`;
      } else {
        var timeInHours = Math.round(timeInMinutes / 60);
        if (timeInHours <= 23) {
          return `${timeInHours} Hours Ago`;
        } else {
          var timeInDays = Math.round(timeInHours / 24);
          return `${timeInDays} Days Ago`;
        }
      }
    }
  };

  return (
    <div className="flex justify-between border border-slate-500 rounded-lg p-6">
      <div className="flex flex-col justify-between">
        <h1>{tweet.tweet}</h1>
        <h2 className="text-sm text-slate-500">{getTime(tweet)}</h2>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        {tweet.liked ? (
          <IoHeartSharp size={25} color="#ff3636" onClick={unlikeTweet} />
        ) : (
          <IoHeartOutline size={25} color="#ff3636" onClick={likeTweet} />
        )}
        <h3 className="text-xs text-slate-500">{tweet.totalLikes}</h3>
        <span className={cn(username === tweet.owner ? "mt-4" : "hidden")}>
          <AiOutlineDelete size={25} color="#5c5c5c" onClick={deleteTweet} />
        </span>
      </div>
    </div>
  );
};
