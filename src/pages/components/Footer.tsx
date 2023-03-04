import { NextPage } from "next";
import { FiTwitter, FiGithub, FiMail, FiSun } from "react-icons/fi";
import {GiBrickWall} from 'react-icons/gi'
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer: NextPage = () => {
  return (
    <>
      <div className="mt-[5rem] z-0">
        <div className=" ml-[10vw] md:ml-[30vw] mb-[5rem]">
          <div className="mb-[2rem] flex flex-row ">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://twitter.com/theanuragdev"
              className="mr-3"
            >
              <FiTwitter className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://github.com/anuragts"
              className="mx-3"
            >
              <FiGithub className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="mailto:anuragsharma011011@gmail.com"
              className="mx-3"
            >
              <FiMail className="iniline text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://www.linkedin.com/in/theanuragdev"
              className="mx-3"
            >
              <FaLinkedin className="inline text-xl md:text-2xl text-[#ffffff7f] hover:text-white mb-[5px] " />{" "}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://anurag.tfss.live"
              className="mx-3"
            >
              <FiSun className="iniline  text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://wall.anuragdev.me/"
              className="mx-3"
            >
              <GiBrickWall className="inline text-xl md:text-2xl text-[#ffffff7f] hover:text-white mb-[5px] " />{" "}
            </motion.a>
          </div>
          <div className="text-[#434343] text-sm md:text-base hover:text-[#a5a5a5] cursor-grab">
            build using nextjs and tailwind
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
