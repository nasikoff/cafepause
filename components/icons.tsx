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
    viewBox="0 0 18 15"
    width={size || width}
    {...props}
  >
    <path fill="none" stroke="#17c964" d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"/>
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
  <path fill="#F31260" fillRule="evenodd" d="M10.507 1.508a.75.75 0 0 1 .734-.239c3.608.829 5.433 4.783 5.003 8.321c-.166 1.376-.578 2.454-1.185 3.312l-.011.016q.206-.102.384-.218c.592-.385 1.026-.892 1.592-1.552l.211-.246a.75.75 0 0 1 1.238.151A7.25 7.25 0 1 1 8.025 8.26l.067-.068a1 1 0 0 1 .114-.094c.865-.583 1.487-1.06 1.906-1.62c.395-.529.638-1.175.638-2.154a5.7 5.7 0 0 0-.378-2.055a.75.75 0 0 1 .135-.76m1.664 1.743q.079.526.079 1.072c0 1.268-.328 2.237-.937 3.052c-.571.766-1.363 1.353-2.208 1.925l-.073.073a1 1 0 0 1-.128.103a5.75 5.75 0 1 0 8.648 3.346c-.38.411-.8.809-1.303 1.136c-.924.599-2.08.941-3.749.941a.75.75 0 0 1-.362-1.407c.679-.374 1.254-.831 1.697-1.456c.44-.624.779-1.457.92-2.626c.307-2.531-.74-5.029-2.584-6.16" clipRule="evenodd"/>
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
 
