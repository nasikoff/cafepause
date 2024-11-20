"use client";
import { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

interface MenuItem {
  title: string;
  img: string;
  svg?: string; // Убедитесь, что это строка, например, для иконки
  timer: string;
  calories: string;
  price: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const removeItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index); // Удаляем элемент по индексу
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Обновляем локальное хранилище
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>

      {cartItems.length > 0 ? (
        cartItems.map((cartItem, index) => (
          <Card shadow="sm" key={index} className="!p-0 w-full ssm:w-[300px] mb-4">
            <CardBody className="overflow-visible p-0">
              <Image
                width="100%"
                alt={cartItem.title}
                className="object-contain h-[200px]"
                src={cartItem.img}
              />
            </CardBody>
            <CardFooter className="text-small text-left p-3">
              <div className="flex flex-col">
                <h1 className="font-bold">{cartItem.title}</h1>
                <h2 className="flex gap-1 font-extralight">
                  {typeof cartItem.svg === 'string' ? cartItem.svg : ''} {cartItem.timer} | {cartItem.calories}
                </h2>
                <h2 className="font-bold">₽{cartItem.price}</h2>
                <button 
                  className="mt-2 bg-red-500 text-white p-2 rounded"
                  onClick={() => removeItem(index)}
                >
                  Удалить
                </button>
              </div>
            </CardFooter>
          </Card>
        ))
      ) : (
        <p>Корзина пуста! Добавьте товары, чтобы увидеть их здесь.</p>
      )}
    </div>
  );
}
