import { NextPage } from "next";
import { FiTwitter, FiGithub, FiMail, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
const Footer: NextPage = () => {
  return (
    <>
      <div className=" ml-[10vw] md:ml-[30vw] mb-[5rem] ">
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
            href="https://github.com/Anurag30112003"
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
            href="https://anurag.tfss.live"
            className="mx-3"
          >
            <FiSun className="iniline  text-xl md:text-2xl text-[#ffffff7f] hover:text-white " />{" "}
          </motion.a>
        </div>
        <div className="text-[#434343] text-sm md:text-base hover:text-[#a5a5a5]">
          build using nextjs and tailwind
        </div>
      </div>
    </>
  );
};

export default Footer;
