import Link from "next/link";
import { NavOptions } from "./NavOptions";
import { INavbarOptions } from "@/types/interface";
import LinkItem from "./LinkItem";
import { RxHamburgerMenu, RxBackpack } from "react-icons/rx";

const NavItems = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/">
        <RxBackpack className="w-7 h-7 mr-3" />
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {NavOptions?.map((item: INavbarOptions) => (
          <LinkItem key={item.id} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default NavItems;
