export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Кафе || Пауза",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Главная",
      href: "/",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"/></svg>,
    },
    {
      label: "Доставка",
      href: "/blog",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"/><path fill="currentColor" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"/></svg>,
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
  {
    title: "НАЗВАНИЯ БЛЮДА",
    categories: "Обед",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/></svg>,
    timer: "-- мин",
    calories: "--- кал",
    img: "/img/4.png",
    price: "0",
  },
];

 