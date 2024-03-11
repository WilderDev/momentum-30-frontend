'use client';

import { TEffect, TFill, TSize, TVariant } from '@/assets/typescript/ui';
// * Imports
import cn from '@/lib/common/classNames';
import Link from 'next/link';
import LoadingDots from '../ux/LoadingDots';

// * Props
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  size?: TSize;
  variant?: TVariant;
  fill?: TFill;
  effect?: TEffect | 'none';
  shadow?: TSize | 'none';
  rounded?: TSize | 'full';
  url?: string;
  className?: string;
}

// * Component
export default function Button({
  children,
  loading = false,
  size = 'md',
  variant = 'primary',
  fill = 'solid',
  effect = 'none',
  shadow = 'md',
  rounded = 'md',
  url,
  className,
  ...props
}: IProps) {
  // * Styles
  // Button Default Styles
  const defaultStyles =
    'inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out active:shadow-none';

  // Button Disabled Styles
  const disabledStyles = 'opacity-60 cursor-not-allowed';

  // Button Size Styles
  const sizes: { [key in TSize]: string } = {
    xs: 'px-1.5 md:px-2 py-1 text-xs md:text-sm',
    sm: 'px-2 md:px-3 py-2 text-xs md:text-sm',
    md: 'px-3 md:px-4 py-2 text-sm md:text-base',
    lg: 'px-4 md:px-6 py-3 text-base md:text-lg',
    xl: 'px-8 md:px-14 py-3.5 text-lg md:text-xl',
  };

  // Button Variant Styles
  const variants: { [key in TVariant]: string } = {
    primary: 'text-white',
    secondary: 'text-orange-50',
    light: 'text-slate-700 dark:text-navy-700',
    dark: 'text-slate-100 dark:text-navy-100',
  };

  // Button Fill Styles
  const fills: { [key in TFill]: { [key in TVariant]: string } } = {
    // Solid
    solid: {
      primary: 'bg-teal-600 hover:bg-teal-700 focus:ring-offset-teal-50',
      secondary:
        'bg-orange-600 hover:bg-orange-700 focus:ring-offset-orange-50',
      light: 'bg-slate-100 dark:bg-navy-100 focus:ring-offset-slate-50',
      dark: 'bg-slate-700 dark:bg-navy-700 focus:ring-offset-slate-900',
    },
    // Outline
    outline: {
      primary:
        'border border-teal-600 hocus:bg-teal-50 focus:ring-offset-teal-600 text-teal-600 hocus:text-teal-700 dark:hocus:text-teal-600 hocus:bg-opacity-10 dark:hocus:bg-opacity-10',
      secondary:
        'border border-orange-600 hocus:bg-orange-50 focus:ring-offset-orange-600 text-orange-600 hocus:text-orange-70',
      light:
        'border border-slate-100 dark:border-navy-400 hocus:bg-slate-50 focus:ring-offset-slate-300 text-slate-600 dark:text-navy-200 dark:hocus:text-navy-100 hocus:text-slate-700',
      dark: 'border border-slate-700 dark:border-navy-700 hocus:bg-slate-50 dark:hocus:bg-navy-800 focus:ring-offset-slate-700 text-slate-700 dark:text-navy-200 dark:hocus:text-navy-100 hocus:text-slate-800',
    },
    // Gradient
    gradient: {
      primary:
        'bg-gradient-to-bl from-teal-500 to-teal-600 via-emerald-600 focus:ring-offset-teal-600 hocus:brightness-110 active:brightness-90',
      secondary:
        'bg-gradient-to-bl from-orange-500 to-orange-600 via-sky-60 focus:ring-offset-orange-600 hocus:brightness-110 active:brightness-90',
      light:
        'bg-gradient-to-bl from-slate-100 to-slate-200 via-slate-300 dark:from-navy-100 dark:to-navy-200 dark:via-navy-300 focus:ring-offset-slate-300 hocus:brightness-110 active:brightness-90',
      dark: 'bg-gradient-to-bl from-slate-700 to-slate-800 via-slate-900 dark:from-navy-700 dark:to-navy-800 dark:via-navy-900 focus:ring-offset-slate-900 hocus:brightness-110 active:brightness-90',
    },
    // None
    none: {
      primary: 'text-teal-600 hocus:text-teal-700',
      secondary: 'text-orange-600 hocus:text-orange-700',
      light: 'text-slate-100 dark:text-navy-100 hocus:text-slate-200',
      dark: 'text-slate-500 dark:text-navy-300 hocus:text-slate-700 dark:hocus:text-navy-200',
    },
  };

  // Button Effect Styles
  const effects: { [key in TEffect | 'none']: string } = {
    none: '',
    scale: 'transform active:scale-95 hocus:scale-105',
  };

  // Button Shadow Styles
  const shadows: { [key in TSize | 'none']: string } = {
    none: '',
    xs: 'shadow-xs hocus:shadow-sm',
    sm: 'shadow-sm hocus:shadow-md',
    md: 'shadow-md hocus:shadow-lg',
    lg: 'shadow-lg hocus:shadow-xl',
    xl: 'shadow-xl hocus:shadow-2xl',
  };

  // Button Rounded Styles
  const roundeds: { [key in TSize | 'full']: string } = {
    xs: 'rounded-[1]',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  // * Render
  return url ? (
    <>
      {url.startsWith('http') ? (
        <a
          className={cn(
            defaultStyles,
            sizes[size],
            variants[variant],
            fills[fill][variant],
            effects[effect],
            shadows[shadow],
            roundeds[rounded],
            className,
          )}
          href={url}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <Link
          className={cn(
            defaultStyles,
            sizes[size],
            variants[variant],
            fills[fill][variant],
            effects[effect],
            shadows[shadow],
            roundeds[rounded],
            className,
          )}
          href={url}
        >
          {children}
        </Link>
      )}
    </>
  ) : (
    <button
      className={cn(
        defaultStyles,
        sizes[size],
        variants[variant],
        fills[fill][variant],
        effects[effect],
        shadows[shadow],
        roundeds[rounded],
        className,
        props.disabled && disabledStyles,
      )}
      {...props}
      onClick={(e) => {
        if (props.onClick) {
          props.onClick(e);
        }
        e.currentTarget.blur();
      }}
    >
      {loading ? <LoadingDots size={size} /> : children}
    </button>
  );
}
