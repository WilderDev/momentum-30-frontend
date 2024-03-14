import DashMainCol from '../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../(layout)/DashPanel';
import DashSideCol from '../(layout)/DashSideCol';
import ChatContainer from './ChatContainer';

// * Page: ChatRoomPage
export default function ChatRoomPage() {
  // * Render
  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <ChatContainer />
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
