import type { NextPage } from "next";
import Image from "next/image";
// import sp from "../img/sp.png"; 
import gold from "../img/buildspace/gold.jpeg";
// import blue from "../img/buildspace/blue.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <div className="block mx-auto mt-[0] md:mt-[5rem] w-[100%] md:w-[60%] relative mb-[7.5rem]">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Image src={gold} alt="Space" className=" md:rounded-2xl" />
        </motion.div>
        <motion.div
          drag
          dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
          dragElastic={0.2}
          dragConstraints={{ left: 0, right: 50, top: 10, bottom: 10 }}
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
        <div className="absolute mt-[4rem] ml-[10vw] text-sm md:text-base">
          hi , i&apos;m anurag. i build beautiful things. <br />
        </div>
      </div>
    </>
  );
};
export default Home;
