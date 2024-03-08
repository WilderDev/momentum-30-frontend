import { ILink } from '@/assets/typescript/ui';

import {
  HomeIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';

export const sidebarLinks: ILink[] = [
  {
    id: 1,
    name: 'Dashboard',
    slug: '/home',
    icon: HomeIcon,
  },
  {
    id: 2,
    name: 'Chat Room',
    slug: '/chat-room',
    icon: ChatBubbleOvalLeftIcon,
  },
  {
    id: 3,
    name: 'Progress',
    slug: '/progress',
    icon: ChartBarIcon,
  },
  {
    id: 4,
    name: 'Exercise Tutorials',
    slug: '/exercise-tutorials',
    icon: VideoCameraIcon,
  },
];
