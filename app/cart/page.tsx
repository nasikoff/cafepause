"use client";
import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Checkbox, Form, Image, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';
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
  const [ cartItems, setCartItems ] = useState<MenuItem[]>([]); 
  const [ isLoading, setIsLoading ] = useState(true);
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ comment, setComment ] = useState('');
  const [ pickupComment, setPickupComment ] = useState('');
  const [ activeTab, setActiveTab ] = useState<string>('pickup');
  const [ paymentMethod, setPaymentMethod ] = useState<string>('');
  const [ isNameInvalid, setIsNameInvalid ] = useState(false);
  const [ isPhoneInvalid, setIsPhoneInvalid ] = useState(false);
  const [ isAddressInvalid, setIsAddressInvalid ] = useState(false);
  const [ isPaymentMethodInvalid, setIsPaymentMethodInvalid ] = useState(false);
  const [ isTermsAgreed, setIsTermsAgreed ] = useState(false); // New state for the checkbox
  const [ isTermsError, setIsTermsError ] = useState(false); // State for error message
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
    setIsTermsError(false); // Reset terms error on submit

    const isNameInvalid = /[^a-zA-Zа-яА-ЯёЁ\s]/.test(name) || name.trim() === '';
    const isPhoneInvalid = phone.trim() === '' || phone.length !== 10;
    const isAddressInvalid = activeTab === 'delivery' && address.trim() === '';
    const isPaymentMethodInvalid = activeTab === 'delivery' && paymentMethod.trim() === '';

    setIsNameInvalid(isNameInvalid);
    setIsPhoneInvalid(isPhoneInvalid);
    setIsAddressInvalid(isAddressInvalid);
    setIsPaymentMethodInvalid(isPaymentMethodInvalid);
    
    if (!isTermsAgreed) {
      setIsTermsError(true); // Show error message
      return;
    }
    // Проверяем, есть ли ошибки валидации
    if (isNameInvalid || isPhoneInvalid || (activeTab === 'delivery' && (isAddressInvalid || isPaymentMethodInvalid))) {
      return;
    }
  
    // Основная логика отправки заказа
    const items = cartItems.map(item => {
      const price = typeof item.price === 'string' ?
        parseFloat(item.price.replace(/[^\d.-]/g, '')) :
        item.price;
      const basePrice = isNaN(price) || price < 0 ? 0 : price;
  
      return {
        title: item.title,
        basePrice: basePrice,
        quantity: item.quantity,
      };
    });
  
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
          activeTab,
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
        <Form onSubmit={handleSubmit} className="flex items-stretch flex-col gap-4">
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
              onPress={() => {
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
              onPress={() => {
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
                  label="Имя"
                  placeholder="Введите ваше имя"
                  style={{ fontSize: '16px' }}
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value; // Сохраняем полное вводимое значение

                    // Установка ошибки, если введённое значение содержит символы или цифры
                    if (/[^a-zA-Zа-яА-ЯёЁ\s]/.test(value)) {
                      setIsNameInvalid(true);
                    } else {
                      setIsNameInvalid(false);
                    }

                    setName(value); // Устанавливаем значение имени
                  }}
                  isRequired
                  maxLength={15}
                  variant="bordered"
                  errorMessage={isNameInvalid ? "Имя не должно содержать цифры, пробелы и символы" : ""}
                  isInvalid={isNameInvalid}
                />
                <Input
                    label="Телефон"
                    placeholder="Введите номер телефона"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400">+7</span>
                        </div>
                    }
                    value={phone}
                    maxLength={10}
                    minLength={10}
                    style={{ fontSize: '16px' }}
                    onChange={(e) => {
                        const value = e.target.value.replace(/[^\d]/g, '');
                        setPhone(value);

                        // Если длина номера равна 10, устанавливаем isPhoneInvalid в false
                        if (value.length === 10) {
                            setIsPhoneInvalid(false);
                        } else {
                            setIsPhoneInvalid(value.length > 0 && value[0] === '7');
                        }
                    }}
                    variant="bordered"
                    type="tel"
                    isRequired
                    errorMessage={isPhoneInvalid ? "Введите корректный номер" : "Введите номер телефона"}
                    isInvalid={isPhoneInvalid}
                />
                <Textarea
                  label="Комментарий"
                  placeholder="Есть что-то особенное, что вы хотите добавить к вашему заказу? Напишите комментарий!"
                  style={{ fontSize: '16px' }}
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
                  label="Имя"
                  placeholder="Введите ваше имя"
                  style={{ fontSize: '16px' }}
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value; // Сохраняем полное вводимое значение

                    // Установка ошибки, если введённое значение содержит символы или цифры
                    if (/[^a-zA-Zа-яА-ЯёЁ\s]/.test(value)) {
                      setIsNameInvalid(true);
                    } else {
                      setIsNameInvalid(false);
                    }

                    setName(value); // Устанавливаем значение имени
                  }}
                  isRequired
                  maxLength={15}
                  variant="bordered"
                  errorMessage={isNameInvalid ? "Имя не должно содержать цифры, пробелы и символы" : ""}
                  isInvalid={isNameInvalid}
                />
               <Input
                    label="Телефон"
                    placeholder="Введите номер телефона"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400">+7</span>
                        </div>
                    }
                    value={phone}
                    maxLength={10}
                    style={{ fontSize: '16px' }}
                    onChange={(e) => {
                        const value = e.target.value.replace(/[^\d]/g, '');
                        setPhone(value);

                        // Если длина номера равна 10, устанавливаем isPhoneInvalid в false
                        if (value.length === 10) {
                            setIsPhoneInvalid(false);
                        } else {
                            setIsPhoneInvalid(value.length > 0 && value[0] === '7');
                        }
                    }}
                    variant="bordered"
                    type="tel"
                    isRequired
                    errorMessage={isPhoneInvalid ? "Введите корректный номер" : "Введите номер телефона"}
                    isInvalid={isPhoneInvalid}
                  />
                <Input
                  label="Адрес доставки"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400">Махачкала</span>
                    </div>
                  }
                  placeholder="Укажите улицу, дом, квартиру"
                  style={{ fontSize: '16px' }}
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
                  placeholder="Есть что-то особенное, что вы хотите добавить к вашему заказу? Напишите комментарий!"
                  style={{ fontSize: '16px' }}
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
              <Checkbox 
            isSelected={isTermsAgreed} 
            onChange={(e) => {
              setIsTermsAgreed(e.target.checked);
              if (e.target.checked) {
                setIsTermsError(false); // Hide error when checked
              }
            }} 
            color="success"
          >
            Я согласен(на) с условиями обработки персональных данных
          </Checkbox>
          {isTermsError && <p className="text-[#f31260]">Пожалуйста, согласитесь с условиями перед отправкой заказа.</p>}
          <div className='text-center sticky bottom-[90px]'>
            <Button startContent={<OrderplustIcon />} type="submit" variant='shadow' color="success" className="w-min font-normal rounded-full">Сделать заказ</Button>
          </div>
        </Form>
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
