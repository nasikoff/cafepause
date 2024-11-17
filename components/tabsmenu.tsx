
'use client'
import { all } from "@/config/site";
import {Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Image} from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "all",
      label: "Все",
      content: <div className="gap-2 flex flex flex-wrap p-0 justify-between">
      {all.map((item, index) => (
        <Card shadow="sm" key={index} isPressable className="!p-0 w-[155px]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[145px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div> ,
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
    {
      id: "breakfast",
      label: "Завтраки",
      content: "Excepteur222 sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}