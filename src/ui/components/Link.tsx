import { CSS } from '@stitches/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

import { styled } from '../utils/theme';

interface LinkProps extends NextLinkProps {
  title?: string;
  href: string;
  inNewWindow?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  css?: CSS;
}

const BaseLink = styled('a', {
  textDecoration: 'none',
});

export function Link({
  href,
  inNewWindow,
  children,
  title,
  css,
  ...props
}: LinkProps) {
  const isExternal =
    href.indexOf('http') === 0 || href.indexOf('mailto:') === 0;

  return (
    <>
      {!isExternal ? (
        <NextLink href={href} passHref>
          <BaseLink css={css} {...props}>
            {children}
          </BaseLink>
        </NextLink>
      ) : (
        <BaseLink
          href={href}
          rel="noreferrer"
          css={css}
          target={inNewWindow ? '_blank' : undefined}
          {...props}>
          {children}
        </BaseLink>
      )}
    </>
  );
}
