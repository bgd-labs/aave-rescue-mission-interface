import React from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

interface CustomSkeletonProps extends SkeletonProps {
  variant?: 'default' | 'dark';
}

export function CustomSkeleton({
  variant = 'default',
  ...rest
}: CustomSkeletonProps) {
  return (
    <Skeleton
      baseColor={variant === 'dark' ? '#5C6279' : undefined}
      highlightColor={variant === 'dark' ? '#ABB1C5' : undefined}
      {...rest}
    />
  );
}
