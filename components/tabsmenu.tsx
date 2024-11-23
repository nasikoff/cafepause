"use client";
import { menupause } from "@/config/site"; // Импорт меню
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Image,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  Input,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Calories, SearchIcon, Timer } from "./icons";
import { Notify } from "@/components/notify";
import { ScrollShadow } from "@nextui-org/react";

interface MenuItem {
  calories: string;
  title: string;
  img: string;
  price: number;
  categories: string;
  svg?: React.ReactNode;
  timer?: string;
  description?: string;
}

interface Notification {
  message: string;
  visible: boolean;
  type: 'success' | 'warning';
}

export default function App() {
  const categories = ['Все', 'Завтраки', 'Салаты', 'Кофе' , 'Холодные напитки'];
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [notification, setNotification] = useState<Notification>({ message: '', visible: false, type: 'success' });

  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
          setCartItems(JSON.parse(storedCart));
      }
  }, []);

  const filteredMenu = categories.map((category) => {
    const items = (category === 'Все' ? menupause : menupause.filter(item => item.categories === category)).filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

    return {
      id: category,
      label: category,
      content: (
        <div className="gap-5 flex flex-wrap p-0 py-0">
          {items.length === 0 ? (
            <p>😯 Такого у нас нет в меню</p>
          ) : (
            items.map((item, index) => {
              return (
                <Card
                  shadow="sm"
                  key={index}
                  isPressable
                  className="!p-0 w-full ssm:w-[180px] flex-row ssm:flex-col"
                  onPress={() => handleCardPress(item as unknown as MenuItem)}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      width="100%"
                      alt={item.title}
                      className="w-full object-contain h-[140px] w-full p-2"
                      src={item.img}
                    />
                  </CardBody>
                  <CardFooter className="text-small text-left">
                    <div className="flex flex-col pb-1">
                      <h1 className="font-bold pb-1">{item.title}</h1>
                      <h2 className="flex gap-1 pb-3 items-center font-extralight">
                        {item.svg}{item.timer} | {item.calories}
                      </h2>
                      <h2 className="font-bold text-base absolute bottom-3 ssm:bottom-auto ssm:relative ">₽{item.price}</h2>                  
                    </div>
                  </CardFooter>
                </Card>
              );
            })
          )}
        </div>
      )
    };
  });

  const handleCardPress = (item: MenuItem) => {
    setSelectedItem(item);
    onOpen();
  };

  const addToCart = (item: MenuItem) => {
    const newItem = { ...item, quantity: 1 }; // Устанавливаем количество в 1 при добавлении
    const updatedItems = [...cartItems, newItem];
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    setNotification({ message: `${item.title} добавлено в корзину`, visible: true, type: 'success' });
    setTimeout(() => {
        setNotification(prev => ({ ...prev, visible: false }));
    }, 3000);
};
 
  const handleButtonClick = (item: MenuItem) => {
    if (cartItems.some(cartItem => cartItem.title === item.title)) {
      // Если блюдо уже в корзине, показываем уведомление
      setNotification({ message: `${item.title} уже в корзине`, visible: true, type: 'warning' });
    } else {
      addToCart(item);
    }
    setTimeout(() => {
      setNotification(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  return (
    <>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[20rem] h-10 sticky top-[60px] z-50  rounded-full",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 backdrop-blur-lg bg-background/70  rounded-full",
        }}
        style={{ fontSize: '16px' }}
        placeholder="Поиск блюд"
        size="md"
        variant="bordered"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        startContent={<SearchIcon size={18} />}
        type="search" />
      
      <Notify message={notification.message} visible={notification.visible} type={notification.type} />

      <div className="flex w-full flex-col bg-transparent p-0">
     
      <Tabs className="py-1" radius="full" aria-label="Dynamic tabs" color="success" variant="light">
          
         {filteredMenu.map((item) => (
           <Tab key={item.id} 
                title={item.label} 
                className="bg-transparent ">
             {item.content}
             
           </Tab>
         ))}  
        </Tabs>
     

        <Modal size={"xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <ModalBody className="px-4">
                {selectedItem && (
                  <div>
                    <Image
                      width="100%"
                      height="250px"
                      alt={selectedItem.title}
                      src={selectedItem.img}
                      className="px-8 mt-6 object-contain" />
                    <div className="flex flex-row pb-5">
                      <div className="basis-full font-bold text-base ssm:text-lg">{selectedItem.title}</div>
                    </div>
                    <div className="flex flex-row pb-5 ">
                      <div className="basis-1/2 justify-center flex">
                        <p className="flex items-center gap-1 text-2xl font-bold"><Timer height={28} />{selectedItem.timer}</p>
                      </div>
                      <div className="basis-1/2 justify-center flex">
                        <p className="flex items-center gap-1 text-2xl font-bold"><Calories height={28} />{selectedItem.calories}</p>
                      </div>
                    </div>
                    <p className="pb-5 opacity-80 h-[80px] overflow-auto mb-5">{selectedItem.description || 'Описание отсутствует'}</p>
                    <div className="flex flex-row justify-between">
                      <h2 className="font-bold text-2xl pb-7">₽{selectedItem.price}</h2>
                      <Button 
                        color="success" 
                        variant={cartItems.some(cartItem => cartItem.title === selectedItem.title) ? "solid" : "ghost"} 
                        onClick={() => handleButtonClick(selectedItem)} // Обработчик клика для кнопки
                      >
                        {cartItems.some(cartItem => cartItem.title === selectedItem.title) ? "В корзине" : "В корзину"}
                      </Button>
                    </div>
                  </div>
                )}
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
