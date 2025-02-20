import { cva, cx } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { CmLinkProps } from './CmLink';
import Link from 'next/link';

export type ButtonProps = {
  variant?: 'primary' | 'neutral';
} & (ButtonHTMLAttributes<HTMLButtonElement> | CmLinkProps);

export function CmButton(props: ButtonProps) {
  const { className: classNameProp, variant = 'primary', ...rest } = props;
  const className = cva(
    [classNameProp, 'rounded', 'transition-colors', 'disabled:opacity-30'],
    {
      variants: {
        variant: {
          primary: ['bg-periwinkle-700', 'text-white'],
          neutral: ['enabled:hover:bg-gray-100'],
        },
        isLink: {
          true: ['inline-block'],
        },
      },
      compoundVariants: [
        {
          isLink: true,
          variant: 'neutral',
          className: 'hover:bg-gray-100',
        },
        {
          isLink: false,
          variant: 'neutral',
          className: 'enabled:hover:bg-gray-100',
        },
        {
          isLink: true,
          variant: 'primary',
          className: 'hover:bg-periwinkle-600',
        },
        {
          isLink: false,
          variant: 'primary',
          className: 'enabled:hover:bg-periwinkle-600',
        },
      ],
    }
  )({
    variant,
    isLink: 'href' in rest,
  });

  if ('href' in rest) {
    return <Link className={className} {...rest} />;
  }
  return <button className={className} {...rest} />;
}
