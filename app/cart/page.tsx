"use client";
import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { CartPlusIcon, DeleteIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';

interface MenuItem {
  title: string;
  img: string;
  svg?: string; 
  timer: string;
  calories: string;
  price: number | string;
  quantity: number; // Поле для количества
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
    setIsLoading(false);
  }, []);

  const updateQuantity = (index: number, delta: number) => {
    const updatedItems = [...cartItems];
    const currentQuantity = updatedItems[index].quantity;
    const newQuantity = currentQuantity + delta;

    if (newQuantity <= 0) {
        updatedItems.splice(index, 1); // Удаляем блюдо, если количество становится 0 или меньше
    } else if (newQuantity > 9) {
        updatedItems[index].quantity = 9; // Ограничиваем максимальное количество до 9
    } else {
        updatedItems[index].quantity = newQuantity; // Обновляем количество
    }

    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Сохраняем в локальном хранилище
};

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart'); // Удаляем данные из локального хранилища
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, cartItem) => {
      let price: number;
      if (typeof cartItem.price === 'number') {
        price = cartItem.price;
      } else if (typeof cartItem.price === 'string') {
        price = parseFloat(cartItem.price.replace(/[^\d.-]/g, ''));
      } else {
        price = 0;
      }
      return total + price * cartItem.quantity; // Умножаем цену на количество
    }, 0);
  };

  const totalCost = calculateTotalCost();
  const itemCount = cartItems.length;

  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        <p className="text-center">😊 Смотрим корзину</p>
      ) : cartItems.length > 0 ? (
        <>
        <Card className="bg-transparent !p-0">
          <CardBody className='!p-0'>
            <h4 className="font-bold text-lg pb-3">
              В корзине <br/> 
              {itemCount}{" "}
              {itemCount === 1 ? "блюдо" :
              itemCount >= 2 && itemCount <= 4 ? "блюда" : 
              "блюд"} на {totalCost.toFixed(0)}₽
            </h4>
          </CardBody>
        </Card>
          {cartItems.map((cartItem, index) => (
            <Card key={index}>
              <CardHeader className="justify-between gap-2">
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
                    <p className="text-md pt-2 font-bold text-default-500">₽{(parseFloat(String(cartItem.price)) * cartItem.quantity).toFixed(0)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button className='min-w-min' variant="flat" onClick={() => updateQuantity(index, -1)} >-</Button>
                  <span>{cartItem.quantity}</span>
                  <Button className='min-w-min' variant="flat" onClick={() => updateQuantity(index, 1)}>+</Button>
                </div>
              </CardHeader>
            </Card>
          ))}
          <div className='text-center'>
            <Button startContent={<DeleteIcon/>} className="w-max" color="danger" variant="light" onClick={clearCart}>Очистить корзину</Button>
          </div>

          <p className="flex justify-between font-bold" >
              <span className='font-bold'>Итого:</span> ₽{totalCost.toFixed(0)}
          </p>
       
        </>
      ) : (
        <p className='text-center grid justify-items-center h-full w-full left-0 absolute content-center top-0'>
          <CartPlusIcon className='mb-3'/>
          Корзина пуста! Добавьте блюда, чтобы увидеть их здесь.
          <Button className='mt-5' onClick={handleClick} color="success" variant="ghost">
            Перейти в меню
          </Button> 
        </p>
      )}
    </div>
  );
}
