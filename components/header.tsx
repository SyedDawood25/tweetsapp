import { UserButton } from "@clerk/nextjs";
import { FaTwitter } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="flex h-[80px] items-center px-10 justify-between">
      <div className="flex gap-x-3 font-bold text-lg text-black">
        <span>
          <FaTwitter size={20} />
        </span>
        Twitter
      </div>
      <UserButton afterSignOutUrl="/sign-in" />
    </header>
  );
};
