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
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[5000000]">
      <motion.div 
        className={`${notificationStyles[type]} text-white p-4 rounded-lg shadow-lg text-center w-64`}
        initial={{ opacity: 0, scale: 0.5 }} // Начальное состояние
        animate={{ opacity: 1, scale: 1 }} // Конечное состояние
        exit={{ opacity: 0, scale: 0.5 }} // Состояние выхода
        transition={{ duration: 0.3 }} // Длительность анимации
      >
        {message}
      </motion.div>
    </div>
  );
};
