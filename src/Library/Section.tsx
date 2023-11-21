import { createSignal, JSX, Component } from 'solid-js';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { splitProps } from 'solid-js';

const inputVariants= cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "",

      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  })

export type InputProps = {
  placeholder: string;
  disabled?: boolean;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const Input: Component<InputProps> = (props) => {
  const [size, otherProps] = splitProps(props, ['placeholder', 'disabled']);

  return (
    <input class={cn(size, otherProps.class)} {...otherProps} />
  );
};

export { Input, inputVariants };

