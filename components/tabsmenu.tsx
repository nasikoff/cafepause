
'use client'
import { all } from "@/config/site";
import {Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Image} from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "all",
      label: "Все",
      content: <div className="gap-5 flex flex flex-wrap p-0 py-3">
      {all.map((item, index) => (
        <Card shadow="sm" key={index} isPressable  className="!p-0 w-full ssm:w-[180px] flex-row ssm:flex-col">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              isBlurred
              alt={item.title} 
              className="w-full object-cover h-[140px] w-full"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small text-left">
          <div className="flex flex-col pb-1">
          <h1 className="font-bold pb-1">{item.title}</h1>
          <h2 className="flex gap-1 pb-3 items-center font-extralight">{item.svg}{item.timer}</h2>
          <h2 className="font-bold text-base absolute bottom-3 ssm:bottom-auto ssm:relative ">₽{item.price}</h2>
          </div>
          </CardFooter>
        </Card>
      ))}
    </div> ,
    },
    {
      id: "breakfast",
      label: "Завтраки",
      content: "Excepteur222 sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: "cofe",
      label: "Кофе",
      content: "Ut222 enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: "cocktails",
        label: "Коктейли",
        content: "Ut111 enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
  
  ];

  return (
    <div className="flex w-full flex-col bg-transparent">
      <Tabs aria-label="Dynamic tabs" color="success" items={tabs} variant="bordered" >
        {(item) => (
          <Tab key={item.id} title={item.label} className="bg-transparent">
                {item.content}
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}