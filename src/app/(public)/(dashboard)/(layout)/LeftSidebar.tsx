import Logo from '@/components/brand/Logo';
import LeftSidebarNavLinks from './LeftSidebarNavLinks';
import LeftSidebarUserLinks from './LeftSidebarUserLinks';
import IconLink from '@/components/ui/IconLink';

export default function LeftSidebar() {
  return (
    <nav
      className="fixed left-0 top-0 z-40 hidden h-full w-20 sm:block shadow dark:shadow-orange-800"
      aria-label="Main Navigation"
    >
      <div className="flex h-full w-full flex-col items-center border-r border-slate-100 bg-white dark:border-orange-700 dark:bg-orange-800">
        {/* Logo */}
        <IconLink className="mt-4 hocus:animate-spin" slug="/">
          <Logo className="rounded-full" />
        </IconLink>

        {/* Main Links */}
        <LeftSidebarNavLinks />

        {/* Bottom Links */}
        <LeftSidebarUserLinks />
      </div>
    </nav>
  );
}
