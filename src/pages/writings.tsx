import type { NextPage } from "next";
import Image from "next/image";
import earth from "../img/earth.jpg";
import write from "../img/buildspace/write.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiLinksFill } from "react-icons/ri";

const Writings: NextPage = () => {
  return (
    <>
      <div className="block mx-auto mt-[0] md:mt-[5rem] w-[100%] md:w-[60%] relative mb-[15.5rem]">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Image src={write} alt="Home" className=" md:rounded-2xl" />{" "}
        </motion.div>
        <motion.div
          drag
          dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
          dragElastic={0.2}
          dragConstraints={{ left: 0, right: 50, top: 10, bottom: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="absolute  text-xl md:text-3xl ml-[10vw] bottom-[2vh] md:bottom-[8vh] font-bold leading-6 md:leading-8	">
            never <br /> stop <br /> building.
          </div>
        </motion.div>
        <div className="absolute flex flex-row  ml-[10vw] font-medium text-base md:text-xl text-third">
          <div className=" hover:text-h mr-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="/">about</Link>
            </motion.div>
          </div>
          |
          <div className=" hover:text-h mx-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="/builds">builds</Link>
            </motion.div>
          </div>
          |
          <div className=" hover:text-h mx-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="/writings">writings</Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute mt-[4rem] ml-[10vw] text-sm md:text-base ">
          <span className="text-blue-400">
            Using Vercel Edge Functions with NextJS
          </span>{" "}
          - Adding Serverless Functionality to Your Next.js App with Vercel Edge
          Functions
          <br />
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://anurag30112003.hashnode.dev/using-vercel-edge-functions-with-nextjs"
            className="mx-3"
          >
            <RiLinksFill className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
          </motion.a>
        </div>
      </div>
    </>
  );
};
export default Writings;
