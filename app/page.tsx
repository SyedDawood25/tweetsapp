import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-y-6">
      <span>
        <FaTwitter size={50} />
      </span>
      <h1 className="text-5xl font-bold text-center">Welcome to Twitter!</h1>
      <Button asChild size={"lg"}>
        <Link href={"/home"}>Continue</Link>
      </Button>
    </main>
  );
};

export default Home;
