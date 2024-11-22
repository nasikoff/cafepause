export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Кафе || Пауза",
  description: "Ваше любимое кафе с атмосферой и вкусной едой.",
  navItems: [
    {
      label: "Главная",
      href: "/",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4m4 4a3 4 0 1 0 6 0a3 4 0 1 0-6 0m3 4v9"/></svg>,
    },
    {
      label: "Корзина",
      href: "/cart",
      badge: 50,
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425z"/></svg>,
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
    title: "Английский завтрак",
    categories: "Завтраки",
    description: "Английский завтрак - это традиционный и плотный завтрак, который включает в себя яичницу, бекон, обжаренные помидоры, грибы, сосиски, фасоль в томатном соусе, гречку или тосты с маслом.",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "15 мин",
    calories: "345 кал",
    img: "/img/1.png",
    price: "549",
  },
  {
    title: "Овсянка с ягодами",
    categories: "Завтраки",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "20 мин",
    calories: "400 кал",
    img: "/img/2.png",
    price: "459",
  },
  {
    title: "Яичница с овощами",
    categories: "Обед",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "17 мин",
    calories: "600 кал",
    img: "/img/3.png",
    price: "690",
  },
 
];

 