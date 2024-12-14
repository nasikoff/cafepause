// components/Notify.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Alert } from '@nextui-org/react';

interface NotifyProps {
  message: string;
  visible: boolean;
  type: 'success' | 'warning';
   
}

export const Notify: React.FC<NotifyProps> = ({ message, visible, type }) => {
  if (!visible) return null;

  const color = type === 'success' ? 'success' : 'warning';  // Определяем цвет на основе типа уведомления
  
  const title = message;  // Описание будет равно переданному сообщению

  return (
    <div className="fixed bottom-2 left-0 sm:right-0 sm:w-[400px] w-full z-[5000000]  ">
      <motion.div 
        initial={{ opacity: 0, y:  100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y:  100 }}
        transition={{ duration: 0.3 }}
      >
        <Alert
          color={color}
          hideIconWrapper
          isVisible={visible}
          title={title}
          variant="solid"
        />
      </motion.div>
    </div>
  );
};
