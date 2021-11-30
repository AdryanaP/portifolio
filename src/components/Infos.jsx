import { BsGithub, BsLinkedin, BsEnvelope, BsTelephone } from "react-icons/bs";

export default function Infos() {
  return (
    <div className="p-4 md:flex md:justify-center gap-48 md:content-center md:justify-items-center h-screen pt-20">
      <div className="space-y-8 md:max-w-30 md:self-center ">
        <a
          href="https://github.com/AdryanaP"
          className="flex gap-6 items-center"
          rel="noreferrer noopener"
          target="_blank"
        >
          <BsGithub className="w-24 h-24" />
          <p>/AdryanaP</p>
        </a>
        <a
          href="https://www.linkedin.com/in/adryanaportugal/"
          className="flex gap-6 items-center"
          rel="noreferrer noopener"
          target="_blank"
        >
          <BsLinkedin className="w-24 h-24" />
          <p>/adryanaportugal</p>
        </a>
        <a
          href="mailto:dryportuga@gmail.com"
          className="flex gap-6 items-center"
        >
          <BsEnvelope className="w-24 h-24" />
          <p>dryportuga@gmail.com</p>
        </a>
        <a
          href="tel:21971484578"
          className="flex gap-6 items-center"
        >
          <BsTelephone className="w-24 h-24" />
          <p>(21) 971484578</p>
        </a>
      </div>
    </div>
  );
}
