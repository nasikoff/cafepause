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
        // Разрешаем запросы, если origin - это одно из разрешенных значений, или это локальный запрос
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
  const { name, phone, address, comment, pickupComment, paymentMethod, items } = req.body;

  const mailOptions = {
      from: process.env.MAIL_USER,
      to: 'wooddooff@mail.ru',
      subject: 'Новый заказ',
      html: `
          <h2>Новый заказ</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Адрес:</strong> ${address}</p>
          <p><strong>Комментарий:</strong> ${comment}</p>
          <p><strong>Способ получения:</strong> ${pickupComment || 'Доставка'}</p>
          <p><strong>Способ оплаты:</strong> ${paymentMethod}</p>
          <h3>Заказанные блюда:</h3>
          <ul>
              ${items}
          </ul>
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ error: error.message });
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent: ' + info.response });
  });
});


// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
