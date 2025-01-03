import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path fill="#17c964 " d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM7 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z"/>
  </svg>
);



export const Timer: React.FC<IconSvgProps> = ({
  size = 26,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 24 24  "
    width={size || width}
    {...props}
  >
    <path fill="#17c964" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75z"/>
  </svg>
);


export const DeleteIcon: React.FC<IconSvgProps> = ({
  size = 26,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path fill="currentColor" d="M7.616 20q-.691 0-1.153-.462T6 18.384V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zm2.192-3h1V8h-1zm3.384 0h1V8h-1z"/>
  </svg>
);




export const RestaurantIcon: React.FC<IconSvgProps> = ({
  size = 22,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 64 64"
    width={size || width}
    {...props}
  >
   <path fill="currentColor" d="M45.9 37.4h-5c-2 0-3.6 1.6-3.6 3.6v5c0 2 1.6 3.6 3.6 3.6h5c2 0 3.6-1.6 3.6-3.6v-5c0-2-1.6-3.6-3.6-3.6M45 45h-3.1v-3.1H45z"/><path fill="currentColor" d="M59.7 20.6v-1.2c0-.4-.1-.8-.3-1.1L51.8 4.9c-1.1-1.9-3.1-3.1-5.3-3.1h-29c-2.2 0-4.2 1.2-5.3 3.1L4.6 18.3v.1c0 .1-.1.2-.1.3c-.1.2-.2.5-.2.8v36.8c0 3.4 2.7 6.1 6.1 6.1h43.1c3.4 0 6.1-2.7 6.1-6.1zm-30.1 1c-.4 1.8-2.1 3.1-4 3.1s-3.5-1.3-4-3.1zM16.1 7.1c.3-.5.8-.8 1.4-.8h29c.6 0 1.1.3 1.4.8l5.6 10h-43zM55 21.6c-.4 1.8-2 3.1-4 3.1c-1.9 0-3.5-1.3-4-3.1zm-12.7 0c-.4 1.8-2 3.1-4 3.1s-3.5-1.3-4-3.1zm-25.4 0c-.4 1.8-2 3.1-4 3.1c-1.9 0-3.5-1.3-4-3.1zM19 57.8V42.3c0-.2.2-.4.4-.4h4.8c.2 0 .4.2.4.4v15.4H19zm34.6 0H29.2V42.3c0-2.7-2.2-4.9-4.9-4.9h-4.8c-2.7 0-4.9 2.2-4.9 4.9v15.4h-4.1c-.9 0-1.6-.7-1.6-1.6v-28c1.2.7 2.6 1 4.1 1c2.5 0 4.8-1.1 6.4-2.8c1.6 1.7 3.8 2.8 6.4 2.8c2.5 0 4.8-1.1 6.4-2.8c1.6 1.7 3.8 2.8 6.4 2.8c2.5 0 4.8-1.1 6.4-2.8c1.6 1.7 3.8 2.8 6.4 2.8c1.5 0 2.9-.4 4.1-1v28c-.3.9-1.1 1.7-1.9 1.7"/>
  </svg>
);


export const DeliverytIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
  <path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 14H10v-4c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h1c0 1.66 1.34 3 3 3s3-1.34 3-3h3.52c.61 0 1.18-.28 1.56-.75l3.48-4.35c.29-.36.44-.8.44-1.25zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"/><path fill="currentColor" d="M6 6h3c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m13 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"/>
  </svg>
);

export const OrderplustIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
<path fill="currentColor" d="m16.75 20.5l4-2.5l-4-2.5zM6 9h12V7H6zm12 14q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M3 22V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6.675q-.7-.35-1.463-.513T18 11H6v2h7.1q-.425.425-.787.925T11.675 15H6v2h5.075q-.05.25-.062.488T11 18q0 1.05.288 2.013t.862 1.837L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5z"/>
  </svg>
);

 
 

export const CartPlusIcon: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 21h-2.068c-2.75 0-4.126 0-5.08-.76c-1.301-1.046-1.39-3.167-1.651-4.652l-.593-3.375a1.93 1.93 0 0 0-1.09-1.4a.48.48 0 0 1-.27-.335c-.17-.807-.622-1.931.39-2.377C2.867 8 3.18 8 3.804 8H7.5m4 0h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335a2 2 0 0 0-.802.687m-5.68 6h7M18.5 21v-7m-12-3L10 3m5 0l2.5 5" color="currentColor"/>
  </svg>
);


 



 
export const LogoPause: React.FC<IconSvgProps> = ({
  size = 75,
  width,
  height = 35,
  ...props
}) => (
  <svg
    fill="none"
    height={height}
    viewBox="0 0 239 97"
    width={size || width}
    {...props}
  >
  <path stroke="null" fill="currentColor" fillRule="evenodd" id="path37" d="m200.755647,60.791652l0,-1.598959c0,-1.234447 1.010041,-2.244489 2.244489,-2.244489l6.912985,0c1.620797,0 2.947121,-1.326324 2.947121,-2.947294l0,-4.317353c0,-1.62097 -1.326324,-2.947294 -2.947121,-2.947294l-6.912985,0c-1.234447,0 -2.244489,-1.010041 -2.244489,-2.244489l0,-12.98905c0,-1.234447 1.010041,-2.244489 2.244489,-2.244489l11.510923,0c1.68323,0 3.060462,-1.377376 3.060462,-3.060692l0,-4.483503c0,-1.683258 -1.377232,-3.060635 -3.060462,-3.060635l-22.293803,0c-1.438945,0 -2.615972,1.177143 -2.615972,2.616001l0,49.755563c0,1.438858 1.177028,2.615972 2.615972,2.615972l23.243775,0c1.683402,0 3.060548,-1.377376 3.060548,-3.060692l0,-4.483417c0,-1.683316 -1.377146,-3.060692 -3.060548,-3.060692l-12.460895,0c-1.234447,0 -2.244489,-1.010041 -2.244489,-2.244489z"/>
   <path stroke="null" fill="currentColor" fillRule="evenodd" id="path39" d="m163.406066,74.7407c10.699156,0 17.024002,-6.335822 17.274049,-15.090062c0.005157,-0.179663 0.007721,-5.450674 0.007721,-5.632296c0,-17.517469 -21.837933,-12.977123 -21.837933,-21.618195c0,-2.513608 1.728174,-4.084649 4.634586,-4.084649c2.518794,0 4.076698,1.105059 4.636026,3.315263c0.054481,0.214898 0.185483,0.383757 0.321872,0.557917c0.649592,0.829745 1.659691,1.365276 2.788865,1.365276l5.187259,0c1.320994,0 2.47918,-0.733258 3.087746,-1.812704c0.271597,-0.482203 0.182342,-0.591078 0.10657,-1.131795c-1.154872,-8.238415 -7.006821,-13.055776 -16.049829,-13.055776c-10.133288,0 -16.02485,6.127061 -16.02485,14.532491c0,16.731949 21.523783,12.741452 21.523783,21.85375c0,0.299111 -0.021406,5.681044 -0.06419,5.963301c-0.351201,2.312482 -2.144285,3.997008 -5.434742,3.997008c-6.999272,0 -3.644856,-6.08347 -8.638134,-6.08347l-5.137475,0c-1.518289,0 -2.819317,0.977745 -3.304545,2.334752c0.946168,9.460157 7.302504,14.58919 16.923222,14.58919z"/>
   <path stroke="null" fill="currentColor" fillRule="evenodd" id="path41" d="m81.13093,71.295069c0.52392,1.103618 1.650789,1.871564 2.948014,1.871564l4.776392,0c1.793142,0 3.260551,-1.467323 3.260551,-3.260724l0,-0.545961l-11.527288,-48.030673c-0.606895,-1.428976 -2.026335,-2.437577 -3.669979,-2.437577l-5.836535,0c-1.787034,0 -3.308982,1.192211 -3.809941,2.820585l-11.447915,47.698804l0,0.454516c0,1.815902 1.485762,3.301347 3.301347,3.301347l4.835972,0c1.174665,0 2.211155,-0.621675 2.796759,-1.552401l6.615602,-36.594225c0.085481,-0.250508 0.323687,-0.431928 0.602343,-0.431928c0.278051,0 0.515998,0.180873 0.601738,0.430891l6.552939,36.275782z"/>
   <path stroke="null" fill="currentColor" fillRule="evenodd" id="path43" d="m33.7353,18.653406l-15.946514,0l0,51.291484c0,1.770583 1.448711,3.219352 3.219295,3.219352l4.715774,0c1.770583,0 3.219381,-1.448769 3.219381,-3.219352l0,-13.97855l4.792065,0c11.390005,0 18.145828,-6.912581 18.145828,-18.617227c0,-11.782895 -6.755823,-18.695707 -18.145828,-18.695707zm-0.157306,26.708334l-4.634759,0l0,-16.103503l4.634759,0c4.477453,0 6.834159,2.749336 6.834159,8.090876c0,5.26306 -2.356706,8.012627 -6.834159,8.012627z"/>
   <path stroke="null" fill="#17c964" fillRule="evenodd" id="path45" d="m124.162189,16.707251l6.419891,0l0,58.879875l-6.419891,0l0,-58.879875z"/>
   <path stroke="null" fill="#17c964" fillRule="evenodd" id="path47" d="m107.677637,16.707251l6.419805,0l0,58.879875l-6.419805,0l0,-58.879875z"/>
  </svg>
);


 
export const Calories: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
  <path fill="#ff4b4b" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"/>
  </svg>
);




 

 
 

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
 
