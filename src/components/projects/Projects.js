import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,iU1,iU2,iU3, personne1, personne2, personne3, personne4, personne5, personne6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="GALERIE"
          des="PROJETS REALISÉS"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Ma première Page Cv"
          des=" J'ai dévéloppé cette page dès ma première année de Licence en Génie Logiciel en qualité de débutant😅!"
          src={projectOne}
        />
        <ProjectsCard
          title="NoteApp"
          des=" Cette application est une application Native développée sous android studio avec le langage Java!"
          src={projectTwo}
        />
        <ProjectsCard
          title="SITE-ZFAMA"
          des=" J'ai dévéloppé cette application Web pour l'entreprise Z-FAMA SA!"
          src={projectThree}
        />
        
      </div>
      <div className="flex justify-center items-center text-center">
        <Title
          title="ILLUSTRATIONS"
          des="CONCEPTION DE LOGOS"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="LOGO"
          des=" Conception de Logo pour une startup: Nourou et Bala Basins!"
          src={iU1}
        />
        <ProjectsCard
          title="LOGO"
          des=" Conception de Logo pour la Société ALADISS!"
          src={iU2}
        />
        <ProjectsCard
          title="LOGO"
          des=" Conception de Logo pour la Compagnie ' Mariam Marie Mariam Company ' "
          src={iU3}
        />
        </div>

<div className="flex justify-center items-center text-center">
        <Title
          title="DECOUVERTE"
          des="MON MONDE"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ORANGE DIGITAL CENTER"
          des=" Formation"
          src={personne1}
        />
        <ProjectsCard
          title="HUAWEI"
          des=" Participation au concours 'Seeds For The Future' "
          src={personne2}
        />
        <ProjectsCard
          title="HUAWEI"
          des=" Participation au concours 'Seeds For The Future' "
          src={personne3}
        />

<ProjectsCard
          title="HUAWEI TECHNOLOGY"
          des="Participation au concours 'Seeds For The Future' "
          src={personne4}
        />
        <ProjectsCard
          title="HUAWEI TECHNOLOGY"
          des=" Participation au concours 'Seeds For The Future' "
          src={personne5}
        />
        <ProjectsCard
          title="HUAWEI TECHNOLOGY"
          des=" Participation au concours 'Seeds For The Future' "
          src={personne6}
        />
      </div>
    </section>
  );
}

export default Projects