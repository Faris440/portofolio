import React from 'react'
import {  FaTwitter, FaLinkedinIn, FaReact, FaEnvelope, FaAngular, FaLaravel, FaPython } from "react-icons/fa";
import {  } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Rejoignez-moi sur
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaEnvelope />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Langages & Frameworks
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaAngular />
            </span>
            <span className="bannerIcon">
              <FaLaravel />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
          </div>
        </div>
        
      </div>
  )
}

export default Media