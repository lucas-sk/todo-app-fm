import { SVGAttributes } from 'react'

interface CheckProps extends SVGAttributes<HTMLOrSVGElement> {}

export const Check = (props: CheckProps) => (
  <svg
    width={11}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M1 4.304 3.696 7l6-6" stroke="#fff" strokeWidth={2} />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h11v9H0z" />
      </clipPath>
    </defs>
  </svg>
)
