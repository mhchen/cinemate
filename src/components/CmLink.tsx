import { cx } from 'class-variance-authority';
import Link from 'next/link';
import { ComponentProps } from 'react';

export type CmLinkProps = ComponentProps<typeof Link>;

export function CmLink(props: CmLinkProps) {
  const { className: classNameProp, ...rest } = props;
  const className = cx(classNameProp, 'text-periwinkle-700', 'hover:underline');

  return <Link className={className} {...rest} />;
}
