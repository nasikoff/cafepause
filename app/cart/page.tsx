"use client";
import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { CartPlusIcon, DeleteIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';

interface MenuItem {
  title: string;
  img: string;
  svg?: string; // Убедитесь, что это строка, например, для иконки
  timer: string;
  calories: string;
  price: number | string; // price может быть числом или строкой
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const router = useRouter();

  const handleClick = () => {
    router.push('/'); // Переход на главную страницу
  };

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

  // Функция для подсчета общей стоимости
  const calculateTotalCost = () => {
    return cartItems.reduce((total, cartItem) => {
      // Преобразуем цену к числу, если цена приходит как строка
      let price: number;
      if (typeof cartItem.price === 'number') {
        price = cartItem.price;
      } else if (typeof cartItem.price === 'string') {
        price = parseFloat(cartItem.price.replace(/[^\d.-]/g, '')); // Убираем все, кроме чисел и знаков
      } else {
        price = 0; // На всякий случай, если цена не определена
      }
      return total + price;
    }, 0);
  };

  const totalCost = calculateTotalCost(); // Считаем общую стоимость
  const itemCount = cartItems.length; // Считаем количество наименований

  return (
    <div className="flex flex-col gap-3">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((cartItem, index) => (
            <Card key={index}>
              <CardHeader className="justify-between gap-8">
                <div className="flex gap-2">
                  <Image
                    height={60}
                    width={60}
                    radius="sm"
                    alt={cartItem.title}
                    className="object-contain h-[200px]"
                    src={cartItem.img}
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600 text-left">{cartItem.title}</h4>
                    <p className="text-md pt-2 font-bold text-default-500">₽{cartItem.price}</p>
                  </div>
                </div>
                <Button
                  isIconOnly 
                  color="danger"
                  variant="light"
                  onClick={() => removeItem(index)}
                >
                  <DeleteIcon />
                </Button>
              </CardHeader>
            </Card>
          ))}
          <Card className="mt-4 bg-transparent">
            <CardBody>
              <h4 className="font-bold">Количество наименований: {itemCount}</h4>
              <h4 className="font-bold">Общая стоимость: ₽{totalCost.toFixed(2)}</h4>
            </CardBody>
          </Card>
        </>
      ) : (
        <p className='text-center grid justify-items-center'>
          <CartPlusIcon className='mb-3'/>
          Корзина пуста! Добавьте блюда, чтобы увидеть их здесь.
          <Button className='mt-5' onClick={handleClick} color="success" variant="ghost">
            На главную
          </Button> 
        </p>
      )}
    </div>
  );
}
