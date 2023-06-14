import React from "react";
import { Footer as Foot } from "flowbite-react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <Foot container className="static bottom-0">
      <div className="w-full">
        {/* <Foot.Divider /> */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div>
            <Foot.Brand
              alt="The Pond"
              href="http://localhost:3000/"
              name="THE POND"
              src="https://w7.pngwing.com/pngs/88/543/png-transparent-rubber-duck-encapsulated-postscript-logo-duck-animals-pet-vertebrate.png"
            />
          </div>
          <div>
            <Foot.LinkGroup>
              <Foot.Link href="http://localhost:3000/about">About</Foot.Link>
              <Foot.Link href="">Privacy Policy</Foot.Link>
              <Foot.Link href="#">Licensing</Foot.Link>
              <Foot.Link href="https://www.linkedin.com/in/lane-vance-profile/">Contact</Foot.Link>
            </Foot.LinkGroup>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Foot.Icon
              href="https://github.com/RichardTater?tab=repositories"
              icon={AiFillGithub}
            />
            <Foot.Icon href="#" icon={AiOutlineInstagram} />
            <Foot.Icon href="#" icon={AiFillFacebook} />
            <Foot.Icon href="#" icon={FaPinterest} />
          </div>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;
