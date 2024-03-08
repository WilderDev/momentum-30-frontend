'use client';

// import { useUser } from '@/components/providers/UserProvider';
import IconLink from '@/components/ui/IconLink';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import Avatar from '@/components/images/Avatar';
// import { getUserStatusColor } from '@/lib/theme/enumColors';

export default function LeftSidebarUserLinks() {
  //   const { user } = useUser();

  return (
    <motion.ul
      className="my-3 flex flex-col sm:items-center space-y-3"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      {/* Settings */}
      <li>
        <IconLink slug="/account">
          <Cog6ToothIcon className="h-7 w-7" />
        </IconLink>
      </li>

      {/* Profile */}
      <li>
        <Link
          className="group relative rounded-full focus:outline-cyan-500"
          href="/profile"
          //   href={`/profile/${user?.id}`}
        >
          {/* Profile Image */}
          {/* <Avatar
            className="transition-transform duration-200 ease-in-out group-hover:scale-110"
            src={user?.avatarUrl! || '/static/icons/avatars/default.png'}
            alt={user?.firstName! || 'User'}
            size="lg"
            bubbleColor={
              getUserStatusColor(user?.status! || 'ONLINE').BG.DEFAULT
            }
            tooltip={false}
          /> */}
        </Link>
      </li>
    </motion.ul>
  );
}
