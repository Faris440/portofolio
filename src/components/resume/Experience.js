import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">Experience Professionnelle</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Chef de Projet Informatique"
            subTitle="3M COMPANY - (2020 - à nos jours)"
            result="BURKINA FASO"
            des="3M COMPANY est une Entreprise qui évolu dans plusieurs domaines comme
            l'immobilier,le BTP, la Gestion, le suivi des PME,les TIC, les Formations 
            et le commerce général,j'ai intégré la société en 2020 par recommandation 
            de SANLAM Assurance en qualité de Conseiller Commercial,puis après grace 
            à mes preuve je suis devenu Directeur Marketing et aujourd'hui j'occupe un second
            post notament Chef de Projets informatique."
          />
          <ResumeCard
            title="Conseiller Commercial"
            subTitle="SANLAM ASSURANCE - (2019 - 2020)"
            result="BURKINA FASO"
            des="Après l'obtention du BACCALAUREAT en 2019,j'ai été retenu lors d'un 
            recrutement de commerciaux,ma principale mission était de faire la publicité des produits de la société,
            dissuader la population des avantages qui s’offrent à elle et les faire adhérer à
            travers une souscription,ainsi j'ai eu à parcourir plusieurs villes et villages
            du Brkina Faso malgré l'insécurité affrontant ainsi les difficultés, les dangers 
            et les obstacles."
          />
          <ResumeCard
            title="Formation en Python-Django"
            subTitle="Orange Digital Center - (2023)"
            result="BURKINA FASO"
            des="Un centre technologique librement accessible et totalement gratuit qui 
            propose des formations et des événements pour la communauté de jeunes 
            développeurs, geeks et personnes ayant des idées de projets,ainsi j'ai été 
            retenu pour prendre part à une formation sur le framework Django assorti d'une
            Attestation de participation."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">Realisations Professionnelles</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Formation en Infographie"
            subTitle="Formation libre (2021)"
            result="3M COMPANY"
            des="Cette formation a vue le jour pour la première fois en Juillet 2021 alors
            que je venais d'acquérir des connaissances en Infographie dans l'un des modules
             de mes cours j'ai décidé les mettre en pratique et c'était une grande réussite."
          />
          <ResumeCard
            title="Formation en Dev Web avec la bibliothèque React de JavaScript"
            subTitle="Locaux de 3M COMPANY (2022)"
            result="3M COMPANY"
            des="La formation a été lancé par la 3M COMPANY dans le cadre de ses activités."
          />
          <ResumeCard
            title="Formation en Art Oratoire"
            subTitle="ECOLE POLYTECHNIQUE DE OUAGADOUGOU (2020)"
            result="INITIATIVE PERSONNELLE"
            des="Passionné des lettres et l'Art de la parole, je me suis auto formé depuis le 
            collège et j'ai décidé de partager cette compétence à travers une formation
            à l'endroit des élèves et étudiants."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
