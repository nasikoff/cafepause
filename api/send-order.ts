import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

// Настройка Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER, // Используйте переменные окружения
    pass: process.env.MAIL_PASS, // Используйте переменные окружения
  },
});

// Обработка POST-запроса для отправки заказа
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, address, comment, pickupComment, paymentMethod } = req.body;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: 'wooddooff@mail.ru',
    subject: 'Новый заказ',
    text: `
      Имя: ${name}
      Телефон: ${phone}
      Адрес: ${address}
      Комментарий: ${comment}
      Способ самовывоза: ${pickupComment}
      Способ оплаты: ${paymentMethod}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return res.status(200).json({ message: 'Email sent: ' + info.response });
  } catch (error) {
    // Преобразование объекта ошибки в Error
    if (error instanceof Error) {
      console.error('Error sending email:', error.message); // Логируем сообщение об ошибке
      return res.status(500).json({ error: error.message }); // Отправляем сообщение об ошибке
    } else {
      console.error('Unexpected error:', error); // Обработка случаев, когда ошибка не является экземпляром Error
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
}
