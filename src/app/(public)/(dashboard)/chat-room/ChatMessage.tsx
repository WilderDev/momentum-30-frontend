'use client';

import cn from '@/lib/common/classNames';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import defaultPic from '@/assets/icons/Momentum_Logo.png';

// * Props
interface IProps {
  isUser: boolean;
  isMostRecent: boolean;
  content: string;
}

export default function ChatMessage({ isUser, content, isMostRecent }: IProps) {
  const user = {
    pic: defaultPic.src,
    username: 'Tommy',
  };

  // * Refs
  const messageRef = useRef<HTMLDivElement>(null); // Ref to scroll to bottom of chat on overflow

  // * Effects
  // Scroll to bottom of chat on overflow
  useEffect(() => {
    messageRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, []);

  // * Render
  return (
    <div
      className={cn(
        'flex items-center', // Base
        isUser ? 'ml-auto' : 'self-start', // Role based alignment
      )}
      ref={isMostRecent ? messageRef : null}
    >
      {/* Image */}
      <Image
        className={cn(
          'h-0 w-0 rounded-full object-cover object-center shadow-sm dark:shadow-lg sm:h-8 sm:w-8 md:h-12 md:w-12', // Base
          isUser ? 'order-last' : 'order-first', // Role based order
          isUser ? 'ml-3 sm:ml-5 md:ml-8' : 'mr-3 sm:mr-5 md:mr-8', // Role based margin
        )}
        src={isUser ? user?.pic! : defaultPic.src}
        alt={isUser ? user?.username || 'Me' : 'Friend'}
        width={48}
        height={48}
      />

      {/* Message */}
      <p
        className={cn(
          'border-0.5 relative rounded-lg px-3 py-2 text-sm font-medium text-white shadow-md dark:shadow-xl sm:px-4 sm:py-3 sm:text-base md:text-lg', // Base
          'after:absolute after:top-1/2 after:h-0 after:w-0 after:border-t-[16px] after:content-[""]', // Triangle Base
          isUser
            ? 'border-blue-600 bg-gradient-to-l from-blue-600 to-sky-500' // User Message Colors
            : 'border-green-600 bg-gradient-to-r from-green-600 to-emerald-500', // AI Message Colors
          isUser
            ? 'after:-right-4 after:border-r-[16px] after:border-r-transparent after:border-t-blue-600' // User Triangle Styles
            : 'after:-left-4 after:border-l-[16px] after:border-l-transparent after:border-t-green-600', // AI Triangle Styles
        )}
      >
        {content}
      </p>
    </div>
  );
}
