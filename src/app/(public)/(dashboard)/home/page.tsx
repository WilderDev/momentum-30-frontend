import DashMainCol from '../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../(layout)/DashPanel';
import DashSideCol from '../(layout)/DashSideCol';
import TodaysWorkoutHome from './TodaysWorkoutHome';

// * Page: DashboardHomePage
export default function DashboardHomePage() {
  // * Render
  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Today's Workout" />

          <TodaysWorkoutHome />
        </DashPanel>
      </DashMainCol>

      <DashSideCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Chat" />
          Chats
        </DashPanel>
      </DashSideCol>
    </>
  );
}
