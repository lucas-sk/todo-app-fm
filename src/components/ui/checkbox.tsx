import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Check } from '../Check'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (

    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 border border-zinc-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-initial-500 data-[state=checked]:to-end-500',
        className,
      )}
      {...props}
    >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className="data-[state=checked]:text-white-500" />
    </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>

))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
