import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { ComponentProps } from 'react'
import { Check } from '../Check'

export type CheckboxProps = ComponentProps<typeof CheckboxRadix.Root>

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxRadix.Root
      className='flex h-[18px] w-[18px] items-center justify-center rounded-full border border-solid border-zinc-700 hover:[border-image:linear-gradient(to_top-right,#f6b73c,#4d9fc)_30] data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-initial-500 data-[state=checked]:to-end-500 '
      {...props}
    >
      <CheckboxRadix.CheckboxIndicator asChild>
        <Check />
      </CheckboxRadix.CheckboxIndicator>
    </CheckboxRadix.Root>
  )
}
