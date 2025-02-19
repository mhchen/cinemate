import { cx } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <button
      className={cx(
        'bg-periwinkle-700 text-white py-2 px-3 rounded',
        className
      )}
      {...rest}
    />
  );
}
