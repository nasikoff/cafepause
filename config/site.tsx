export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Кафе || Пауза",
  description: "Ваше любимое кафе с атмосферой и вкусной едой.",
  navItems: [
    {
      label: "Меню",
      href: "/",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4m4 4a3 4 0 1 0 6 0a3 4 0 1 0-6 0m3 4v9"/></svg>,
    },
    {
      label: "Корзина",
      href: "/cart",
      badge: 50,
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l-1 9m5-9l-4-7M2 11h20M3.5 11l1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4M4.5 15.5h15M5 11l4-7m0 7l1 9"/></svg>,
    },
    {
      label: "О нас",
      href: "/about",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>,
    },
  ],
};



// ДОБАВИТЬ МЕНЮ
export const menupause = [
  {
    title: "Омлет со шпинатом",
    categories: "Завтраки",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "15 мин",
    calories: "310 кал",
    img: "/img/1.png",
    price: "290",
  },
  {
    title: "Гречневая каша",
    categories: "Завтраки",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "20 мин",
    calories: "204 кал",
    img: "/img/2.png",
    price: "180",
  },
  {
    title: "Рисовая каша",
    categories: "Завтраки",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "20 мин",
    calories: "300 кал",
    img: "/img/8.png",
    price: "180",
  },
  {
    title: "Омлет с семгой",
    categories: "Завтраки",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "17 мин",
    calories: "356  кал",
    img: "/img/3.png",
    price: "290",
  },

  {
    title: "Сырники",
    categories: "Завтраки",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "17 мин",
    calories: "500 кал",
    img: "/img/7.png",
    price: "290",
  },

  {
    title: "Салат цезарь",
    categories: "Салаты",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "17 мин",
    calories: "600 кал",
    img: "/img/14.png",
    price: "290",
  },
  {
    title: "Салат с креветками",
    categories: "Салаты",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "17 мин",
    calories: "350 кал",
    img: "/img/4.png",
    price: "290",
  },
 
];

 