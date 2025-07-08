"use client";

import React from "react";
import { LuPhoneOutgoing } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LiaLinkedin } from "react-icons/lia";
import { Coffee } from "lucide-react";

const medium = [
  {
    icon: MdEmail,
    title: "Email Me",
    description: "Oluwatomiwajinadu@gmail.com",
    link: "mailto:Oluwatomiwajinadu@gmail.com",
    category: "Gmail",
  },
  {
    icon: LuPhoneOutgoing,
    title: "Call Me",
    description: "+1-470-357-3129",
    link: "tel:+14703573129",
    category: "US",
  },
  {
    icon: LiaLinkedin,
    title: "Connect with Me",
    description: "Tomiwa Jinadu",
    link: "https://www.linkedin.com/in/oluwatomiwa-jinadu/",
    category: "Linkdin",
  },
];

const ContactPage = () => {
  return (
    <div className="md:flex flex-col">
      <div className="pl-6 md:pl-90 flex flex-wrap mt-10 justify-between">
        <HoverEffect items={medium} />
      </div>
      <div className="flex flex-wrap md:text-xl justify-center items-center">
        I&#39;m always up for a chat or coffee
        <Coffee className="text-purple-500 hover:scale-110" />! Feel free to
        reach out.
      </div>
    </div>
  );
};

export default ContactPage;
