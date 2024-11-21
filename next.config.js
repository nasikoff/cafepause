/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    // Опциональные настройки для кэширования
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/your-api-url\.com/, // URL вашего API
        handler: 'NetworkFirst', // или другой обработчик в зависимости от вашего случая
      },
      // Можно добавить дополнительные правила для кэширования
    ],
  });
  
  const nextConfig = {
    // Ваши другие настройки Next.js
  };
  
  module.exports = withPWA(nextConfig);