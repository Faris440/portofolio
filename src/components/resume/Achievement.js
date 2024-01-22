import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Connaissance Lingustiques</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Français."
            subTitle="Orale et écrit."
            result="Excellent niveau"
            des=""
          />
          <ResumeCard
            title="Anglais."
            subTitle="Orale & écrit."
            result="Niveau intermédiaire"
            des=""
          />
          <ResumeCard
            title="Mooré."
            subTitle="Orale."
            result="Excellent niveau"
            des=""
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Loisirs</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sport"
            subTitle="Football,Basketball,Handball,Maratthon."
            result="J'adore❤️"
            des=""
          />
          <ResumeCard
            title="Lecture & Recherches"
            subTitle="Romans africains & étrangers,Hacking."
            result="J'adore❤️"
            des=""
          />
          <ResumeCard
            title="Musique"
            subTitle="Rap,Gospel,Salsa,Hip-Hop,Traditionnelles."
            result="J'aime"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
