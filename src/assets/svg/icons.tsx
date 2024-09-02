export const Cube = () =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      fill="none"
      viewBox="0 0 13 14"
    >
      <path
        stroke="#BABABA"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.694 4.125L6.5 7m0 0L1.306 4.125M6.5 7v5.783M12 9.471V4.529c0-.208 0-.313-.03-.406a.608.608 0 00-.132-.221c-.066-.072-.158-.123-.34-.224L6.974 1.175c-.173-.096-.26-.144-.352-.163a.613.613 0 00-.246 0c-.092.02-.179.067-.352.163L1.503 3.678c-.183.101-.275.152-.341.224a.608.608 0 00-.131.221C1 4.216 1 4.321 1 4.53v4.942c0 .208 0 .313.03.406a.61.61 0 00.132.221c.066.072.158.123.34.224l4.523 2.503c.173.096.26.144.352.163a.611.611 0 00.246 0c.092-.02.179-.067.352-.163l4.522-2.503c.183-.101.275-.152.341-.224a.608.608 0 00.131-.221C12 9.784 12 9.679 12 9.47z"
      ></path>
    </svg>
  );
}

export function Signature( { size = 363 }  ) {
  const aspectRatio = 363 / 104;
  const width = size;
  const height = size / aspectRatio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 363 104"
    >
      <path
        stroke="#BEBEBE"
        strokeWidth="3"
        d="M1.5 64.5C26.355 45.61 38.854 33.64 104.838 1.564c.408-.198.87.191.705.613C82.771 60.235 29.013 114.39 31 98c0-11 185.5-130.5 124-83.5-30.269 21.833-90.872 72.425-89.053 62.244a.53.53 0 01.232-.347c7.541-4.333 23.987-12.289 31.197-10.43a.45.45 0 01.214.124c5.653 5.775 11.808 23.483 12.793 30.768.059.434.609.62.911.305 8.231-8.592 25.339-24.253 34.742-25.132a.445.445 0 01.491.437c.107 4.89-4.397 18.179-5.699 21.696-.137.37.18.777.566.703 9-1.731 25.964-16.12 34.085-24.2.422-.42 1.191.286.92.815-28.653 55.827 41.414-9.636 56.237-34.145.314-.52.081-.398-.186.148-45.185 92.367 103.454 32.713 119.305 12.045a.467.467 0 00.047-.077c9.436-18.999-188.326-2.685-228.812 22.812-.481.302-.161.893.373.698 88.581-32.381 266.164-126.72 82.158 28.493-.447.376-.222 1.208.302.95C253.166 79.108 422.848-26.276 337 42.5c-53.5 40-55.3 83.6 3.5 34"
        className="animated-path"
      ></path>
      <path
        fill="#BEBEBE"
        d="M3 64.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM342 76.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      ></path>
      <style>
        {`
          .animated-path {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: draw 1s linear forwards;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </svg>
  );
}

export function Gmail({ size = 34 }) {
  const aspectRatio = 34 / 34;
  const width = size;
  const height = size / aspectRatio;

  return (
    <a href="mailto:kintarokawai@gmail.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 34 34"
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <rect width="34" height="34" fill="#fff" rx="5"></rect>
        <g clipPath="url(#clip0_103_498)">
          <path
            fill="#4285F4"
            d="M6.636 26.005h3.818v-9.273L5 12.64v11.727c0 .906.734 1.637 1.636 1.637z"
          ></path>
          <path
            fill="#34A853"
            d="M23.546 26.005h3.818c.905 0 1.636-.734 1.636-1.637V12.641l-5.454 4.09"
          ></path>
          <path
            fill="#FBBC04"
            d="M23.546 9.641v7.09L29 12.642v-2.182c0-2.023-2.31-3.177-3.927-1.963"
          ></path>
          <path
            fill="#EA4335"
            d="M10.454 16.732V9.64L17 14.55l6.546-4.91v7.092L17 21.64"
          ></path>
          <path
            fill="#C5221F"
            d="M5 10.46v2.181l5.454 4.09v-7.09L8.928 8.496C7.307 7.282 5 8.436 5 10.459"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_103_498">
            <path fill="#fff" d="M0 0H24V24H0z" transform="translate(5 5)"></path>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

export function X({ size = 32 }) {
  const aspectRatio = 32 / 32;
  const width = size;
  const height = size / aspectRatio;
  
  return (
    <a href="https://x.com/0x_kin" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 32 32"
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <path
        fill="#000"
        d="M0 5a5 5 0 015-5h22a5 5 0 015 5v22a5 5 0 01-5 5H5a5 5 0 01-5-5V5z"
      ></path>
      <path
        fill="#fff"
        d="M17.522 14.775L23.48 8h-1.412l-5.172 5.883L12.765 8H8l6.247 8.895L8 24h1.412l5.461-6.212L19.236 24H24l-6.478-9.225zm-1.933 2.199l-.633-.886L9.92 9.04h2.168l4.064 5.688.633.886 5.283 7.393H19.9l-4.311-6.033z"
      ></path>
      </svg>
    </a>
  );
}

export function Github({ size = 32 }) {
  const aspectRatio = 32 / 32;
  const width = size;
  const height = size / aspectRatio;
  
  return (
    <a href="https://github.com/kk4w4i" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 32 32"
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <path
        fill="#231E1B"
        d="M27 0H5a5 5 0 00-5 5v22a5 5 0 005 5h22a5 5 0 005-5V5a5 5 0 00-5-5z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M15.976 8.192A7.977 7.977 0 008 16.168c0 3.523 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.049-.489.049-.489.782.049 1.223.832 1.223.832.734 1.223 1.86.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.294-1.566.832-2.153-.05-.146-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.028 2.201-.832 2.201-.832.44 1.077.147 1.909.098 2.104.49.538.832 1.272.832 2.153 0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0024 16.168c-.049-4.404-3.62-7.976-8.024-7.976z"
        clipRule="evenodd"
      ></path>
      </svg>
    </a>
  );
}

export function Linkedin({ size = 32 }) {
  const aspectRatio = 32 / 32;
  const width = size;
  const height = size / aspectRatio;
  
  return (
    <a href="https://www.linkedin.com/in/kintarokawai" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 32 32"
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <path
          fill="#2867B2"
          d="M27 0H5a5 5 0 00-5 5v22a5 5 0 005 5h22a5 5 0 005-5V5a5 5 0 00-5-5z"
        ></path>
        <path
          fill="#fff"
          d="M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z"
        ></path>
      </svg>
    </a>
  );
}
