import type { NextPage } from "next";
import Image from "next/image";
import sp from "../img/sp.webp";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="block mx-auto mt-[0] md:mt-[5rem] w-[100%] md:w-[60%] relative mb-[7.5rem]">
        <Image src={sp} className="opacity-60 md:rounded-2xl" />
        <div className="absolute  text-xl md:text-3xl ml-[10vw] bottom-[2vh] md:bottom-[8vh] font-bold leading-6 md:leading-8	">
          never <br /> stop <br /> building.
        </div>
        <div className="absolute flex flex-row  ml-[10vw] font-medium text-base md:text-xl text-third">
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
        <div className="absolute mt-[4rem] ml-[10vw] text-sm md:text-base">
          hi , i&apos;m anurag. i build beautiful things. <br />
        </div>
      </div>
    </>
  );
};

export default Home;
