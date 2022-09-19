import type { NextPage } from "next";
import Image from "next/image";
import earth from "../img/earth.jpg";
import Link from "next/link";

const Writings: NextPage = () => {
  return (
    <>
      <div className="block mx-auto mt-[5rem] w-[60%] relative">
        <Image src={earth} className="opacity-60 rounded-2xl" />
        <div className="absolute text-3xl ml-[10vw] bottom-[8vh] font-bold leading-8	">
          never <br /> stop <br /> building.
        </div>
        <div className="absolute flex flex-row  ml-[10vw] font-medium text-xl text-third">
          <div className=" hover:text-h mr-3">
          <Link href="/" >
            about 
          </Link>
          </div>
          |
          <div className=" hover:text-h mx-3">
          <Link href="/builds" >
            builds
          </Link>
          </div>
          |
          <div className=" hover:text-h mx-3">
          <Link href="/writings" >
            writings
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Writings;
