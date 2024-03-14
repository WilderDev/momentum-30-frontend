'use client';

import { useState } from 'react';
import ChatForm from './ChatForm';
import ChatMessages from './ChatMessages';

// * Page: ChatContainer
export default function ChatContainer() {
  // * State
  const [messages, setMessages] = useState<any[]>([
    { role: 'user', content: 'hey there!' },
    { role: 'bot', content: 'Hello! Howdy?' },
  ]); // Chat messages
  const [loading, setLoading] = useState(false); // Loading state

  // * Render
  return (
    <>
      <article className="max-h-[75vh] overflow-y-auto px-1 pb-4">
        {/* Chat Messages */}
        <ChatMessages messages={messages} loading={loading} />

        {/* Chat Form */}
        <ChatForm
          addMessages={(newMessages: any) =>
            setMessages([...messages, ...newMessages])
          }
          loading={loading}
          setLoading={setLoading}
        />
      </article>
    </>
  );
}
