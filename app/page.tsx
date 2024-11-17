import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles, tabs } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import Tabsmenu from "@/components/tabsmenu";

export default function Home() {
  return (
    <>
    <section className="flex flex-col gap-4 py-5 md:py-5">
      <div className="inline-block max-w-xl text-left">
        <span className={title()}>Добро пожаловать в&nbsp;</span>
        <br />
        <span className={title({ color: "green" })}>pa||se&nbsp;</span>

        <h2 className="py-4 text-sm lg:text-xl font-normal text-default-500 block max-w-full   text-left md:text-left">Отвлекись на небольшую паузу в нашем кафе</h2>
      </div>
    </section>
    
    <section className="flex flex-col gap-4 py-5 md:py-5">
       <Tabsmenu/> 
      </section>
      
      </>
  );
}
