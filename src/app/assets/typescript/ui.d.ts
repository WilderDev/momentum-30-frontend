export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TVariant = 'primary' | 'secondary' | 'dark' | 'light';
export type TFill = 'solid' | 'outline' | 'gradient' | 'none';
export type TEffect = 'scale';

type IStatus = 'BACKLOG' | 'IN_PROGRESS' | 'COMPLETE';

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

interface IDynamicStatus {
  BG: {
    DEFAULT: string;
    SUBDUED: string;
    STRONG: string;
    GRADIENT: string;
  };
  TEXT: {
    DEFAULT: string;
    SUBDUED: string;
    STRONG: string;
  };
  FULL: {
    DEFAULT: string;
    SUBDUED: string;
    STRONG: string;
    GRADIENT: string;
  };
}

export type TIcon = React.ElementType | any;

export interface ILink {
  id: number;
  name: string;
  slug: string;
  icon: any;
  external?: boolean;
}
