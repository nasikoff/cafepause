"use client"
import React from "react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Menu = () => {
  const pathUrl = usePathname();
    return (
      <div className="w-full backdrop-blur-lg bg-background/70 ssm:w-[400px] items-center justify-evenly flex justify-start mx-4 py-2 outline-none  outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-full transition-transform-background motion-reduce:transition-none ">
        <ul className="w-full flex gap-4 justify-start">
          {siteConfig.navItems.map((item, index) => (
              
              <motion.div  
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            
                className="w-full"
                key={index}
                >
              <NextLink
                 className={`w-full ${pathUrl === item.href ? "text-sm md:text-base font-normal" : "text-default-500  md:text-base  text-sm font-normal"}`}  href={item.href}           >
                <li className="text-center">
                <div>{item.svg}{item.label}</div>            
            </li>
            </NextLink>
            </motion.div>
          ))}
    </ul>
    </div>
    );
  };