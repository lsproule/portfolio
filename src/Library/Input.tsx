import {  Component, ComponentProps } from 'solid-js';
import { VariantProps, cva } from 'class-variance-authority';

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inputVariants = cva(
  "border w-full bg-white border-green-500 rounded-xl p-2 px-3 ml-2",
  {
    variants: {
      variant: {
        default: "border w-full bg-white border-green-500 rounded-xl p-2 px-3 ml-2"
      },
    },
  })
export type InputProps = VariantProps<typeof inputVariants> & ComponentProps<"input"> & {
  placeholder: string;
  disabled?: boolean;

};

const Input: Component<InputProps> = (props) => {
  return (
    <input {...props} placeholder={props.placeholder} disabled={props.disabled} class={cn(props.variant, props.class  )} />
  );
};

export { Input, inputVariants };

