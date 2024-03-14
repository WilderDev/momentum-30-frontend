'use client';

import ChatMessage from './ChatMessage';
import LoadingChatBubbles from './LoadingChatBubbles';

// * Props
interface IProps {
  messages: any[];
  loading: boolean;
}

// * Component
export default function ChatMessages({ messages, loading }: IProps) {
  // * Render
  return (
    <div className="flex flex-col space-y-6 overflow-y-auto mb-8 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
      {messages?.map(({ role, content }, idx) => (
        <ChatMessage
          isUser={role === 'user'}
          content={content}
          isMostRecent={idx === messages.length - 1}
          key={idx}
        />
      ))}

      {/* Loading Chat Bubbles */}
      {loading && <LoadingChatBubbles />}
    </div>
  );
}
