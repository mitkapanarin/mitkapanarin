import Link from "next/link";
import {
  LuAtSign,
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuFacebook,
  LuYoutube,
  LuInstagram,
  LuPhone,
} from "react-icons/lu";
import { Button } from "../ui/button";

const HeroSectionIcons = ({
  linkType,
  link,
}: {
  linkType: string;
  link: string;
}) => {
  const logic = () => {
    switch (linkType) {
      case "github":
        return <LuGithub className="h-6 w-6" />;
      case "linkedin":
        return <LuLinkedin className="h-6 w-6" />;
      case "email":
        return <LuAtSign className="h-6 w-6" />;
      case "twitter":
        return <LuTwitter className="h-6 w-6" />;
      case "facebook":
        return <LuFacebook className="h-6 w-6" />;
      case "instagram":
        return <LuInstagram className="h-6 w-6" />;
      case "youtube":
        return <LuYoutube className="h-6 w-6" />;
      case "phone":
        return <LuPhone className="h-6 w-6" />;
      default:
        return null;
    }
  };

  if (linkType === "email")
    return (
      <Link href={`mailto:${link}`}>
        <Button variant="ghost" size="icon">
          {logic()}
        </Button>
      </Link>
    );

  if (linkType === "phone")
    return (
      <Link href={`https://wa.me/${link}`}>
        <Button variant="ghost" size="icon">
          {logic()}
        </Button>
      </Link>
    );

  return (
    <div className="">
      <Link href={link} target="_blank">
        <Button variant="ghost" size="icon">
          {logic()}
        </Button>
      </Link>
    </div>
  );
};

export default HeroSectionIcons;
