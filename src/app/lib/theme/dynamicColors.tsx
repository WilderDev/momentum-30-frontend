import { IDynamicStatus, ITSKStatus } from '@/assets/typescript/ui';

export const tskStatusColors: {
  [key in ITSKStatus]: IDynamicStatus;
} = {
  BACKLOG: {
    BG: {
      DEFAULT: 'bg-blue-500',
      SUBDUED: 'bg-blue-50',
      STRONG: 'bg-blue-900',
      GRADIENT: 'bg-gradient-to-r from-blue-500 via-sky-600 to-blue-700',
    },
    TEXT: {
      DEFAULT: 'text-blue-500',
      SUBDUED: 'text-blue-400',
      STRONG: 'text-blue-600',
    },
    FULL: {
      DEFAULT: 'bg-blue-600 text-blue-50',
      SUBDUED: 'bg-blue-50 text-blue-700',
      STRONG: 'bg-blue-900 text-blue-50',
      GRADIENT:
        'bg-gradient-to-r from-blue-500 via-emerald-600 to-blue-700 text-blue-50',
    },
  },
  IN_PROGRESS: {
    BG: {
      DEFAULT: 'bg-yellow-500',
      SUBDUED: 'bg-yellow-50',
      STRONG: 'bg-yellow-900',
      GRADIENT:
        'bg-gradient-to-r from-yellow-500 via-emerald-600 to-yellow-700',
    },
    TEXT: {
      DEFAULT: 'text-yellow-500',
      SUBDUED: 'text-yellow-400',
      STRONG: 'text-yellow-600',
    },
    FULL: {
      DEFAULT: 'bg-yellow-600 text-yellow-50',
      SUBDUED: 'bg-yellow-50 text-yellow-700',
      STRONG: 'bg-yellow-900 text-yellow-50',
      GRADIENT:
        'bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-700 text-yellow-50',
    },
  },
  COMPLETE: {
    BG: {
      DEFAULT: 'bg-green-500',
      SUBDUED: 'bg-green-50',
      STRONG: 'bg-green-900',
      GRADIENT: 'bg-gradient-to-r from-green-500 via-emerald-600 to-green-700',
    },
    TEXT: {
      DEFAULT: 'text-green-500',
      SUBDUED: 'text-green-400',
      STRONG: 'text-green-600',
    },
    FULL: {
      DEFAULT: 'bg-green-600 text-green-50',
      SUBDUED: 'bg-green-50 text-green-700',
      STRONG: 'bg-green-900 text-green-50',
      GRADIENT:
        'bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-green-50',
    },
  },
};
