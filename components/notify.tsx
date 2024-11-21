// components/Notify.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface NotifyProps {
  message: string;
  visible: boolean;
  type: 'success' | 'warning'; // Добавляем тип
}

const notificationStyles = {
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
};

export const Notify: React.FC<NotifyProps> = ({ message, visible, type }) => {
  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[5000000]">
      <motion.div 
        className={`${notificationStyles[type]} text-black p-4 rounded-lg shadow-lg text-center`}
        initial={{ opacity: 0, y: -100 }} // Начальное состояние (уменьшается по оси Y)
        animate={{ opacity: 1, y: 0 }} // Конечное состояние (позиция по оси Y равна 0)
        exit={{ opacity: 0, y: -100 }} // Состояние выхода (уменьшается по оси Y)
        transition={{ duration: 0.3 }} // Длительность анимации
      >
        {message}
      </motion.div>
    </div>
  );
};
