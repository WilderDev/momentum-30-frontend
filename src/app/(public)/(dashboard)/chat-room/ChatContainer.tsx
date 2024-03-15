'use client';

import { useEffect, useState } from 'react';
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

  // Get Chat History
  const getLastMessage = async () => {
    // 1. Set Initial States
    setLoading(true); // Set loading state to true

    console.log('getLastMessage');

    // 2. Send Request to OpenAI
    try {
      // Hit API Endpoint to get chat history
      const res = await fetch('http://localhost:5000' + '/api/v1/chat', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle response
      if (!res.ok) return; // If response is not ok, show error toast

      const data = (await res.json()) as any; // Parse response body

      console.log('data:', data);

      // Handle response body
      if (!data) return; // If no response body, or no choices, or no first choice, show error toast

      // 3. Set Chat History
      setMessages(data);
    } catch (e) {
      return; // Display error toast
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  useEffect(() => {
    getLastMessage();
  }, []);

  // * Render
  return (
    <>
      <article className="max-h-[75vh] overflow-y-auto px-1 pb-4">
        {/* Chat Messages */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ChatMessages messages={messages} loading={loading} />
        )}

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
