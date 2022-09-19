import { NextPage } from "next";
import { FiTwitter,FiGithub,FiMail,FiSun } from "react-icons/fi"

const Navbar: NextPage = () => {
  return (
    <>
      <div className="ml-[30vw] mb-[5rem] ">
        <div className="mb-[2rem] flex flex-row ">
            <a href="https://twitter.com/theanuragdev" className="mr-3"><FiTwitter className="iniline text-2xl text-[#ffffff7f] hover:text-white "/> </a>
            <a href="https://github.com/Anurag30112003" className="mx-3"><FiGithub className="iniline text-2xl text-[#ffffff7f] hover:text-white "/> </a>
            <a href="mailto:anuragsharma011011@gmail.com" className="mx-3"><FiMail className="iniline text-2xl text-[#ffffff7f] hover:text-white "/> </a>
            <a href="https://me.anuragdev.me" className="mx-3"><FiSun className="iniline text-2xl text-[#ffffff7f] hover:text-white "/> </a>

        </div>
        <div className="text-[#434343]">build using nextjs and tailwind</div>
      </div>
    </>
  );
};

export default Navbar;
