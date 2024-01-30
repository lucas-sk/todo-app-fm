interface SunProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const Sun = (props: SunProps) => (
  <svg
    width={26}
    height={26}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13 21a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1Zm-5.657-2.343a1 1 0 0 1 0 1.414l-2.121 2.121a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0Zm12.728 0 2.121 2.121a1 1 0 0 1-1.414 1.414l-2.121-2.12a1 1 0 0 1 1.414-1.415ZM13 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm12 4a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2h3ZM4 12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h3Zm18.192-8.192a1 1 0 0 1 0 1.414l-2.12 2.121a1 1 0 1 1-1.415-1.414l2.121-2.121a1 1 0 0 1 1.414 0Zm-16.97 0 2.121 2.12A1 1 0 0 1 5.93 7.344L3.808 5.222a1 1 0 0 1 1.414-1.414ZM13 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1Z'
        fill='#fff'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h26v26H0z' />
      </clipPath>
    </defs>
  </svg>
);

export default Sun;
