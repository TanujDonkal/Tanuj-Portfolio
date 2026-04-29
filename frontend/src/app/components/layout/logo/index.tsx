import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={getImgPath("/images/logo/logo.svg")}
          alt="logo"
          width={70}
          height={70}
          className="h-12 w-12 sm:h-[70px] sm:w-[70px]"
        />
      </Link>
    </>
  );
};

export default Logo;
