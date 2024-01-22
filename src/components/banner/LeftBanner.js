import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developeur.", "En cours de formation.", "Etudiant."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">BIENVENUE DANS MON MONDE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hello, Je suis Abourahim <span className="text-designColor capitalize">Faris Rabo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
            Répondant au nom de ABOURAHIM RABO, je suis actuellement étudiant en 3è
            année de Licence en Génie Logiciel à l’université virtuelle du Burkina Faso, passionné par les TIC,la Science,la
            programmation ,le Design et la conception des systèmes informatiques,je suis
            également coach formateur en Infographie, bureautique, développement web & mobiles et
            en technique de prise de parole en public.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner