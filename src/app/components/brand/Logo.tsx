import Image from 'next/image';

import logoEmblem from '@/assets/icons/Momentum_Logo.png';
import cn from '@/lib/common/classNames';

// * Component: Logo
export default function LogoEmblem({ className }: { className?: string }) {
  // * Render
  return (
    <Image
      className={cn('h-10 w-auto', className)}
      src={logoEmblem}
      alt="Logo"
      width={40}
      height={40}
      priority
    />
  );
}
