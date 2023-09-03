import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedProfile, setSelectedProfile] = useState(false);
  const [selectedProfileName, setSelectedProfileName] = useState("");

  interface ProfileProps {
    name: string;
    image: string;
    selected: boolean;
  }

  const Profile: React.FC<ProfileProps> = ({ name, image, selected }) => {
    return (
      <button
        className="w-[100px] md:w-[10vw] rounded-sm relative space-y-3 mx-auto duration-150 hover:text-white"
        onMouseEnter={() => setSelectedProfileName(name)}
        onMouseLeave={() => setSelectedProfileName("")}
        onClick={() => setSelectedProfile(true)}
      >
        <div
          className={
            "md:w-[10vw] md:h-[10vw] w-[100px] duration-150 h-[100px] relative rounded-sm outline outline-2 " +
            (selectedProfileName == name
              ? " outline-white "
              : "outline-transparent")
          }
        >
          <Image src={image} className="rounded-sm" fill alt="haruxe" />
        </div>
        <p
          className={
            "text-xl text-center duration-150 " +
            (selectedProfileName == name ? " text-white" : "text-zinc-500")
          }
        >
          {name}
        </p>
      </button>
    );
  };
  return (
    <>
      {!selectedProfile ? (
        <motion.div
          style={{
            backgroundImage: `url("/images/Space1.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ backgroundSize: "cover" }}
          animate={{ backgroundSize: "cover" }}
          transition={{ duration: 0.5 }}
        >
          <div className="place-content-center place-items-center mx-auto relative">
            <Navbar />
            <div className="max-w-[1500px] place-items-center mx-auto">
              <Component {...pageProps} />
              <Footer />
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="bg-[#141414] h-screen place-content-center place-items-center flex">
          <motion.div
            className="space-y-10 place-content-center place-items-center flex flex-col"
            // initial={{ opacity: 0, scale: 1.05 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
          >
            <h1 className="text-center text-5xl font-medium">
              Who&apos;s Watching?
            </h1>
            <div className="flex gap-8">
              <Profile name="Gon" image="/images/gon.jpg" selected={true} />
              <Profile
                name="Anonymous"
                image="/images/anonymous.png"
                selected={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default MyApp;
