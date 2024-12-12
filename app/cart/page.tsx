"use client";
import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Image, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';
import { CartPlusIcon, DeleteIcon, DeliverytIcon, OrderplustIcon, RestaurantIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';

interface MenuItem {
  title: string;
  img: string;
  svg?: string;
  timer: string;
  calories: string;
  price: number | string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [pickupComment, setPickupComment] = useState('');
  const [activeTab, setActiveTab] = useState<string>('pickup');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isPaymentMethodInvalid, setIsPaymentMethodInvalid] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    const storedTab = localStorage.getItem('activeTab');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
    if (storedTab) {
      setActiveTab(storedTab);
    }
    setIsLoading(false);
  }, []);

  const updateQuantity = (index: number, delta: number) => {
    const updatedItems = [...cartItems];
    const currentQuantity = updatedItems[index].quantity;
    const newQuantity = currentQuantity + delta;

    if (newQuantity <= 0) {
      updatedItems.splice(index, 1);
    } else if (newQuantity > 9) {
      updatedItems[index].quantity = 9;
    } else {
      updatedItems[index].quantity = newQuantity;
    }

    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
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
      return total + price * cartItem.quantity;
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsNameInvalid(false);
    setIsPhoneInvalid(false);
    setIsAddressInvalid(false);
    setIsPaymentMethodInvalid(false);

    const isNameEmpty = name.trim() === '';
    const isPhoneEmpty = phone.trim() === '';
    const isAddressEmpty = activeTab === 'delivery' && address.trim() === '';
    const isPaymentMethodEmpty = activeTab === 'delivery' && paymentMethod.trim() === '';

    setIsNameInvalid(isNameEmpty);
    setIsPhoneInvalid(isPhoneEmpty);
    setIsAddressInvalid(isAddressEmpty);
    setIsPaymentMethodInvalid(isPaymentMethodEmpty);

    if (isNameEmpty || isPhoneEmpty || (activeTab === 'delivery' && (isAddressEmpty || isPaymentMethodEmpty))) {
      return;
    }

    const items = cartItems.map(item => {
      // Получаем цену, приводим к числу
      const price = typeof item.price === 'string' ? 
          parseFloat(item.price.replace(/[^\d.-]/g, '')) : 
          item.price;

      // Проверяем на NaN и отрицательные значения
      const basePrice = isNaN(price) || price < 0 ? 0 : price;

      return {
          title: item.title,
          basePrice: basePrice,  // Здесь передаем basePrice
          quantity: item.quantity, // Количество
      };
  });
    
    // Логируем перед отправкой
    console.log('Отправляемые элементы:', items);

    const pickupMethod = activeTab === 'pickup' ? pickupComment : '';
    
    try {
      const response = await fetch('https://cafepause.vercel.app/api/send-order', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name,
              phone,
              address,
              comment,
              pickupComment: pickupMethod,
              paymentMethod,
              items,
              activeTab
          }),
      });

      if (response.ok) {
          clearCart();
          alert('Ваш заказ успешно отправлен!');
      } else {
          alert('Ошибка при отправке заказа. Попробуйте еще раз.');
      }
  } catch (error) {
      alert('При отправке заказа произошла ошибка. Проверьте подключение к интернету и попробуйте еще раз.');
  }
  };

  const totalCost = calculateTotalCost();
  const itemCount = cartItems.length;

  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        <p className="text-center">😊 Смотрим корзину</p>
      ) : cartItems.length > 0 ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Card className="bg-transparent !p-0">
            <CardBody className='!p-0'>
              <h4 className="font-bold text-lg pb-3">
                В корзине <br />
                {itemCount}{" "}
                {itemCount === 1 ? "блюдо" :
                itemCount >= 2 && itemCount <= 4 ? "блюда" :
                "блюд"} на ₽{totalCost.toFixed(0)}
              </h4>
            </CardBody>
          </Card>
          {cartItems.map((cartItem, index) => (
            <Card key={index} className='mx-1'>
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
                    {/* Обратите внимание на изменение ниже */}
                    <p className="text-md pt-2 font-bold text-default-500">
                      ₽{((typeof cartItem.price === 'string' ? parseFloat(cartItem.price.replace(/[^\d.-]/g, '')) : cartItem.price) * cartItem.quantity).toFixed(0)} 
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button className='min-w-min' variant="flat" onClick={() => updateQuantity(index, -1)}>–</Button>
                  <span>{cartItem.quantity}</span>
                  <Button className='min-w-min' variant="flat" onClick={() => updateQuantity(index, 1)}>+</Button>
                </div>
              </CardHeader>
            </Card>
            ))}
          <div className='text-center'>
            <Button startContent={<DeleteIcon />} className="w-max" color="danger" variant="light" onClick={clearCart}>Очистить корзину</Button>
          </div>
          <p className="flex justify-between font-bold mx-1">
            <span className='font-bold'>Итого:</span> ₽{totalCost.toFixed(0)}
          </p>

          <p className='font-bold mx-1 pt-3'>Выберите способ получения</p>
          <div className="flex gap-2">
            <Button 
              onClick={() => {
                setActiveTab('pickup');
                localStorage.setItem('activeTab', 'pickup');
                setPaymentMethod('');
              }} 
              startContent={<RestaurantIcon />}
              color={activeTab === 'pickup' ? 'success' : 'default'}
              variant={activeTab === 'pickup' ? 'solid' : 'light'}
              className='rounded-full'
            >
              Самовывоз
            </Button>
            <Button 
              onClick={() => {
                setActiveTab('delivery');
                localStorage.setItem('activeTab', 'delivery');
              }} 
              startContent={<DeliverytIcon />}
              color={activeTab === 'delivery' ? 'success' : 'default'}
              variant={activeTab === 'delivery' ? 'solid' : 'light'}
              className='rounded-full'
            >
              Доставка
            </Button>
          </div>

          {activeTab === 'pickup' ? (
            <Card className='py-0'>
              <CardBody className='gap-2'>
                <Input
                  label="Ваше имя"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setIsNameInvalid(false);
                  }}
                  isRequired
                  variant="bordered"
                  errorMessage={isNameInvalid ? "Введите ваше имя" : ""}
                  isInvalid={isNameInvalid}
                />
                <Input
                  label="Номер телефона"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setIsPhoneInvalid(false);
                  }}
                  variant="bordered"
                  type="tel"
                  isRequired
                  errorMessage={isPhoneInvalid ? "Введите номер телефона" : ""}
                  isInvalid={isPhoneInvalid}
                />
                <Textarea
                  label="Комментарий"
                  value={pickupComment}
                  onChange={(e) => setPickupComment(e.target.value)}
                  variant="bordered"
                  rows={3}
                />
              </CardBody>
            </Card>
          ) : (
            <Card className='py-0'>
              <CardBody className='gap-2'>
                <Input
                  label="Ваше имя"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setIsNameInvalid(false);
                  }}
                  isRequired
                  variant="bordered"
                  errorMessage={isNameInvalid ? "Введите ваше имя" : ""}
                  isInvalid={isNameInvalid}
                />
                <Input
                  label="Номер телефона"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setIsPhoneInvalid(false);
                  }}
                  variant="bordered"
                  type="tel"
                  isRequired
                  errorMessage={isPhoneInvalid ? "Введите номер телефона" : ""}
                  isInvalid={isPhoneInvalid}
                />
                <Input
                  label="Адрес доставки"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setIsAddressInvalid(false);
                  }}
                  variant="bordered"
                  type="text"
                  isRequired
                  errorMessage={isAddressInvalid ? "Введите адрес доставки" : ""}
                  isInvalid={isAddressInvalid}
                />
                <Textarea
                  label="Комментарий"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  variant="bordered"
                  rows={3}
                />
              </CardBody>
            </Card>
          )}
          
          {activeTab === 'delivery' && (
            <>
              <p className='font-bold mx-1 pt-3'>Выберите способ оплаты</p>
              <RadioGroup 
                value={paymentMethod}
                color="success" 
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setIsPaymentMethodInvalid(false);
                }}
              >
                <Radio value="Онлайн-оплата" isInvalid={isPaymentMethodInvalid && paymentMethod === ''}>
                  Онлайн-оплата
                </Radio>
                <Radio value="Наличными курьеру" isInvalid={isPaymentMethodInvalid && paymentMethod === ''}>
                  Наличными курьеру
                </Radio>
                <Radio value="Переводом на карту" isInvalid={isPaymentMethodInvalid && paymentMethod === ''}>
                  Переводом на карту
                </Radio>
              </RadioGroup>
              {isPaymentMethodInvalid && (
                <p className="text-[#f31260]">Пожалуйста, выберите способ оплаты.</p>
              )}
            </>
          )}
          <div className='text-center sticky bottom-[90px]'>
            <Button startContent={<OrderplustIcon />} type="submit" variant='shadow' color="success" className="w-min font-normal rounded-full">Сделать заказ</Button>
          </div>
        </form>
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
