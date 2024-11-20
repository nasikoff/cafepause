'use client';
import { menupause } from "@/config/site";
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
import { useState } from "react";
import { Calories, SearchIcon, Timer } from "./icons";
import { Notify } from "@/components/notify";

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

// Интерфейс для уведомления
interface Notification {
  message: string;
  visible: boolean;
  type: 'success' | 'warning'; // Добавляем тип
}

export default function App() {
  const categories = ['Все', 'Завтраки', 'Обед'];
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [notification, setNotification] = useState<Notification>({ message: '', visible: false, type: 'success' });

  const filteredMenu = categories.map((category) => {
    // Фильтруем элементы для этой категории
    const items = (category === 'Все' ? menupause : menupause.filter(item => item.categories === category)).filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      id: category,
      label: category,
      content: (
        <div className="gap-5 flex flex-wrap p-0 py-3">
          {items.length === 0 ? (
            <p>😯 Блюда не найдены</p> // Сообщение о том, что нет блюд
          ) : (
            items.map((item, index) => (
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
            ))
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
    const storedItems = JSON.parse(localStorage.getItem('cart') || '[]');

    // Проверяем, есть ли уже такое блюдо в корзине
    const itemExists = storedItems.some((cartItem: MenuItem) => cartItem.title === item.title);

    if (itemExists) {
      // Если такое блюдо уже есть, показываем уведомление
      setNotification({ message: `${item.title} уже в корзине`, visible: true, type: 'warning' }); // Уведомление желтого цвета
    } else {
      const updatedItems = [...storedItems, item]; // Добавляем новый элемент
      localStorage.setItem('cart', JSON.stringify(updatedItems)); // Обновляем локальное хранилище
      // Показываем уведомление о добавлении
      setNotification({ message: `${item.title} добавлено в корзину`, visible: true, type: 'success' }); // Уведомление зеленого цвета
    }

    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
      setNotification(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  return (
    <>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[20rem] h-10 sticky top-[60px] z-50",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 backdrop-blur-lg bg-background/70 ",
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
        <Tabs aria-label="Dynamic tabs" color="success" items={filteredMenu} variant="bordered">
          {(item) => (
            <Tab key={item.id} title={item.label} className="bg-transparent">
              {item.content}
            </Tab>
          )}
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
                    <h2 className="font-bold text-2xl pb-5">₽{selectedItem.price}</h2>
                      <Button color="success" variant="ghost" onClick={() => addToCart(selectedItem)}>
                      В корзину
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
