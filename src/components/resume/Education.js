import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="UNIVERSITE VIRTUELLE DU BURKINA FASO"
            subTitle="Génie Logiciel Pure Developer (2020 - à nos jours)"
            result="Licence 3"
            des="Depuis la première année jusqu'à ce jours nous avons reçu des cours autour de certains langages de 
            programmations et descriptions (Java,Langage C,C++,Python,JavaScript,Flutter,HTML+CSS),certains Framework (React,Angular,Django),
            certains cours en Infographie UI,UX Design etc...
            ."
          />
          <ResumeCard
            title="UNIVERSITE THOMAS SANKARA"
            subTitle="Droit (2019 - 2020)"
            result="Licence 1"
            des="Après avoir obtenu le BACCALAUREAT en 2019 j'ai été orienté en Droit à l'UTS."
          />
          <ResumeCard
            title="LYCEE PRIVE RIDWANE"
            subTitle="Secondaire (2016 - 2019)"
            result="BACCALAUREAT"
            des="Après avoir obtenu le BEPC en 2016,je me suis inscrit au LYCEE PRIVEE RIDWANE pour le secondaire."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projets réalisés</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Réalisation d'une page CV"
            subTitle="Projet de fin d'année - (2020 - 2021)"
            result="UNIVERSITE VIRTUELLE"
            des="A la fin de notre première année en Licence nous, nous avons été soumis à 
            plusieurs projets informatiques au choix dont le mien était la conception d'une page 
            de CV en ligne et mise en ligne sur GIthub."
          />
          <ResumeCard
            title="Dématérialisation des sites du Gouvernement du Burkina Faso"
            subTitle="Projet de fin d'études - (2021 - 2022)"
            result="UNIVERSITE VIRTUELLE"
            des="Comme chaque fin d'année, à cette année nous avons eu comme projet , la dématérialisation
            de certains site des Ministères du Burkina Faso, et mon projet était conception d'un 
            site de demandes de pièces d'état civil."
          />
          <ResumeCard
            title="Rapport de soutenance"
            subTitle="Rapport de fin d'étude du cycle de la Licence - (2022 - 2023)"
            result="UNVERSITE VIRTUELLE"
            des="En cours"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education