import DashMainCol from '../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../(layout)/DashPanel';
import DashSideCol from '../(layout)/DashSideCol';

// * Page: DashboardHomePage
export default function DashboardHomePage() {
  // * Render
  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Test" />
          TSK
        </DashPanel>
      </DashMainCol>

      <DashSideCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Test 2" />
          TSK
        </DashPanel>
      </DashSideCol>
    </>
  );
}
