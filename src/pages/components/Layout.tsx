import Navbar from "./Navbar";
import Footer from "./Footer";
import {motion} from 'framer-motion'

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        {children}
        <Footer />
      </motion.div>
    </>
  );
}
