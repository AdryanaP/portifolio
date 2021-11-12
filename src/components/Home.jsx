import me from "../assets/me.jpg";
import React from "react";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="text-white">
      <nav className="fixed w-screen flex items-center md:p-10 p-6 justify-center">
        <ul className="flex list-none text-lg md:gap-14 gap-4">
          <li className="flex-1 mr-2">
            <a
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              href="./Projects"
            >
              Projects
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              href="#"
            >
              Infos
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4 md:flex md:justify-center gap-48 md:content-center md:justify-items-center h-screen pt-20">
        <div className="space-y-8 md:max-w-30 md:self-center">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-8xl md:text-left text-center">
              Adryana
            </h2>
            <h2 className="text-4xl md:text-8xl md:text-right text-center">
              Portugal
            </h2>
          </div>
          <p className="">
            Sou uma Desenvolvedora apaixonada por Front-End e descobri na
            programação minha verdadeira vocação. Prezo por criar layouts
            responsivos, acessíveis e bonitos, de forma que valorize a
            experiencia do usuário e o proporcione-o uma navegação intuitiva.
          </p>
        </div>
        <div className="flex items-center justify-center pt-4 md:pt-0">
          <img
            src={me}
            alt="foto Adryana Portugal"
            className="w-48 md:w-96 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
