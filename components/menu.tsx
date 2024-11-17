"use client"
import React from "react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Menu = () => {
  const pathUrl = usePathname();
    return (
      <div key={""} className="w-[90%] md:w-[400px] items-center justify-evenly flex justify-start p-2 outline-none bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none">
        <ul className="w-full flex gap-4 justify-start">
          {siteConfig.navItems.map((item) => (
              
              <motion.div  
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={() => console.log('hover started!')}
                className="w-full"
               
                >
              <NextLink
                 className={`w-full ${pathUrl === item.href ? "text-[#17c964]" : "opacity-70"}`}  href={item.href}           >
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