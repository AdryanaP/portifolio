import me from "../assets/me.jpg";
import React from "react";

export default function Home() {
  return (
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
          responsivos, acessíveis e bonitos, de forma que valorize a experiencia
          do usuário e o proporcione-o uma navegação intuitiva.
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
  );
}
