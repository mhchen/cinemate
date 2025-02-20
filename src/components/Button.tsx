import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  variant?: 'primary' | 'neutral';
  size?: 'md' | 'sm';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const {
    className: classNameProp,
    variant = 'primary',
    size = 'md',
    ...rest
  } = props;
  const className = cva(
    [classNameProp, 'rounded', 'transition-colors', 'disabled:opacity-30'],
    {
      variants: {
        variant: {
          primary: [
            'bg-periwinkle-700',
            'text-white',
            'enabled:hover:bg-periwinkle-600',
          ],
          neutral: ['enabled:hover:bg-gray-100'],
        },
        size: {
          md: ['py-2', 'px-3'],
          sm: ['py-1', 'px-1.5', 'text-sm'],
        },
      },
    }
  )({
    variant,
    size,
  });

  return <button className={className} {...rest} />;
}
