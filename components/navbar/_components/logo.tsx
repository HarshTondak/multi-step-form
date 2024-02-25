import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/logos/logo.svg"
          alt="logo"
          width={150}
          height={150}
          className="w-30 ml-4"
        />
      </Link>
    </>
  );
};

export default Logo;
