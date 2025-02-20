import { IconChevronDown } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import { SelectHTMLAttributes } from 'react';

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  const { className, ...rest } = props;
  return (
    <div className="relative">
      <select
        {...rest}
        className={cx(
          className,
          'cursor-pointer',
          'bg-none',
          'border',
          'rounded',
          'py-2',
          'px-4',
          'border-gray-300'
        )}
      />
      <IconChevronDown
        size={18}
        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
  );
}
