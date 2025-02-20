import { cx } from 'class-variance-authority';
import Link from 'next/link';
import { ComponentProps } from 'react';

export function CmLink(props: ComponentProps<typeof Link>) {
  const { className: classNameProp, ...rest } = props;
  const className = cx(classNameProp, 'text-periwinkle-700', 'hover:underline');

  return <Link className={className} {...rest} />;
}
