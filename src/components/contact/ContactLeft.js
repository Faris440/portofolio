import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">FARIS RABO </h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Ma devise, c'est d'abord de se faire plaisir dans tout ce qu'on fait,
         d'être sincère et déterminé, et d'avoir l'amour du travail bien fait.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          TELEPHONE: <span className="text-lightText">+226 72980909</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          WHATSAPP: <span className="text-lightText">+226 07493318</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">farisrabo@protonmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Rejoignez moi sur :</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft