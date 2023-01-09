import type { NextPage } from "next";
import Image from "next/image";
import ocean from "../img/ocean.jpg";
import Link from "next/link";
import blue from "../img/buildspace/blue.jpeg";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { RiLinksFill } from "react-icons/ri";

const Builds: NextPage = () => {
  return (
    <>
      <div className="block mx-auto mt-[0] md:mt-[5rem] w-[100%] md:w-[60%] relative mb-[28.5rem]">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Image src={blue} alt="Ocean" className=" md:rounded-2xl" />{" "}
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
        <div className="absolute mt-[4rem] ml-[10vw] text-sm md:text-base ">
        <div className="mr-5">
              <span className="text-blue-400">CodeAI</span> - Your AI pair programmer
              <div className="my-[1rem] flex flex-row">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://github.com/Anurag30112003/codeai"
                className="mx-3"
              >
                <FiGithub className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
              |
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://code.tfss.live/"
                className="mx-3"
              >
                <RiLinksFill className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
            </div>
            </div>
            <div className="mr-5">
            <span className="text-blue-400">Artwork AI</span> - Create Artwork
            using AI in just a few clicks. <br />
            <div className="my-[1rem] flex flex-row">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://github.com/Anurag30112003/ArtworkAI"
                className="mx-3"
              >
                <FiGithub className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
              |
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://artworkai.tfss.live/"
                className="mx-3"
              >
                <RiLinksFill className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
            </div>
          </div>
          <div className="mr-5">
            <span className="text-blue-400">Stories </span> - Get Random Stories
            in just few clicks.
            <div className="my-[1rem] flex flex-row">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://github.com/Anurag30112003/stories"
                className="mx-3"
              >
                <FiGithub className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
              |
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://story.tfss.live/"
                className="mx-3"
              >
                <RiLinksFill className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
            </div>
          </div>

          <div className="mr-5">
            <span className="text-blue-400">SQLscape </span> - Your own SQL query writer.
            <div className="my-[1rem] flex flex-row">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://github.com/Anurag30112003/sqlscape"
                className="mx-3"
              >
                <FiGithub className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
              |
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://sql.proooj.co/"
                className="mx-3"
              >
                <RiLinksFill className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Builds;
