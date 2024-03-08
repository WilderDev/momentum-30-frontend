import Image from 'next/image';

import logoEmblem from '@/assets/icons/Momentum_Logo.png';

// * Component: Logo
export default function LogoEmblem() {
  // * Render
  return (
    <Image
      className="h-10 w-auto"
      src={logoEmblem}
      alt="Logo"
      width={40}
      height={40}
      priority
    />
  );
}
