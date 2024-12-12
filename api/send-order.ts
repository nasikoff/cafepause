import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Настройка CORS
const allowedOrigins = ['https://cafepause.ru', 'https://cafepause.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  }
}));

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Order API!');
});

// Настройка Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

// Обработка POST-запроса для отправки заказа
app.post('/api/send-order', (req: Request, res: Response) => {
    const { name, phone, address, comment, pickupComment, paymentMethod, items, activeTab } = req.body;

    // Определяем типы для items
    interface MenuItem {
        title: string;
        basePrice: number; // Используем basePrice вместо price
        quantity: number;
        totalItemPrice: number; // Итоговая стоимость для каждого элемента
    }
    

    const logoUrl = 'https://cafepause.vercel.app/img/logo.png'; 
    const orderId = Math.floor(1 + Math.random() * 9000);
    const orderDate = new Date().toLocaleString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

 // Типизация items как массив MenuItem
 const itemsWithDetails = (items as MenuItem[]).map((item) => {
    const totalItemPrice = item.basePrice * item.quantity;
    return {
        title: item.title,
        basePrice: item.basePrice, // Здесь basePrice
        quantity: item.quantity,
        totalItemPrice: totalItemPrice,
    };
});

 
  const totalItemCount = itemsWithDetails.reduce((total: number, item) => total + item.quantity, 0);
  const totalCost = itemsWithDetails.reduce((total: number, item) => total + item.totalItemPrice, 0);

const mailOptions = {
    from: process.env.MAIL_USER,
    to: 'wooddooff@mail.ru',
    subject: 'Новый заказ',
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f7f7f7; color: #333;">
        <img src="${logoUrl}" alt="Логотип кафе Пауза" style="display: block; margin: 0 auto; max-width: 100%; height: auto;"/>
        <h3>Заказ №${orderId} от ${orderDate}</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Адрес:</strong> ${activeTab === 'delivery' ? address : 'Кафе Пауза (ул. Каммаева, 47)'}</p>
        <p><strong>Комментарий:</strong> ${activeTab === 'pickup' ? (pickupComment || '(Покупатель не оставил комментарий)') : (comment || 'Покупатель не оставил комментарий')}</p>
        <p><strong>Способ получения:</strong> ${activeTab === 'pickup' ? 'Самовывоз' : 'Доставка'}</p>
        <p><strong>Способ оплаты:</strong> ${paymentMethod || 'В кафе'}</p>
        <h3 style="color: #444; border-bottom: 1px solid #eee; padding-bottom: 5px;margin-bottom:0;">Заказанные блюда:</h3>
            <ul style="list-style-type: none; padding: 0;">
            ${itemsWithDetails.map(item => `
                <li>
                    <strong>${item.title}</strong> - ₽${item.basePrice ? item.basePrice.toFixed(0) : '0'} за шт. 
                    x ${item.quantity} = ₽${item.totalItemPrice ? item.totalItemPrice.toFixed(0) : '0'} (Общая стоимость)
                </li>`).join('')}
        </ul>
        <h1 style="margin-bottom:0;">Всего наименований: ${totalItemCount}</h1>
        <h1>Итого: ₽${totalCost.toFixed(0)}</h1>
    </div>
    `,
};


    // Отправка почты
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Ошибка при отправке email:', error);
            return res.status(500).json({ error: error.message });
        }
        console.log('Email отправлен: ' + info.response);
        res.status(200).json({ message: 'Email отправлен: ' + info.response });
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
