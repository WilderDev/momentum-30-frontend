import { PropsWithChildren } from 'react';
import DashContainer from './(layout)/DashContainer';
import LeftSidebar from './(layout)/LeftSidebar';
import LeftSidebarMobile from './(layout)/(mobile)/LeftSidebarMobile';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Left Sidebar Mobile */}
      <LeftSidebarMobile />

      {/* Main Content */}
      <DashContainer>{children}</DashContainer>
    </>
  );
}
