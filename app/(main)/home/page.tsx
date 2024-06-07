"use client";

import { Header } from "@/components/header";
import { TweetForm } from "@/components/tweet-form";
import { getTweets } from "@/actions/getTweets";
import { useEffect, useState } from "react";
import { TweetCard } from "@/components/tweet-card";
import { useUser } from "@clerk/nextjs";

const HomePage = () => {
  const [tweets, setTweets] = useState<any>();
  const { user } = useUser();

  useEffect(() => {
    getTweets()
      .then((data) => {
        setTweets(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tweets]);

  return (
    <main className="flex flex-col">
      <Header />
      <TweetForm />
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-[1400px] gap-y-4">
          {tweets?.map((tweet: any, index: number) => {
            return <TweetCard key={index} tweet={tweet} username={user?.username}/>;
          })}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
