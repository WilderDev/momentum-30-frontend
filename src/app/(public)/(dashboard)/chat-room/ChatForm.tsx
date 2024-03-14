'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { toast } from 'sonner';
import baseUrl from '@/lib/common/baseUrl';
import Form from '@/components/form/Form';
import Button from '@/components/ui/Button';
import Input from '@/components/form/Input';

// * Props
interface IProps {
  addMessages: (newMessages: any[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// * Component
export default function ChatForm({ addMessages, loading, setLoading }: IProps) {
  // * State
  const [userMessage, setUserMessage] = useState(''); // User message Input Query

  // * Handlers
  // Send Message
  const sendMessage = async () => {
    // 1. Set Initial States
    setLoading(true); // Set loading state to true

    // 2. Add Message to Chat and Clear Input
    addMessages([userMessage]); // This get's removed when we get a response from OpenAI
    setUserMessage(''); // Reset user message input

    // 7. Send Request to OpenAI
    try {
      // Hit API Endpoint to create chat completion request
      const res = await fetch(baseUrl + `/api/v1/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      // Handle response
      if (!res.ok) return showError(); // If response is not ok, show error toast

      const data = (await res.json()) as any; // Parse response body

      // Handle response body
      if (!data) return showError(); // If no response body, or no choices, or no first choice, show error toast

      // 8. Add Response Message to Chat
      addMessages([userMessage, data]);
    } catch (e) {
      showError(); // Display error toast
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  // Show Error
  const showError = () => {
    toast.error('Oh no! Something went wrong');
  };

  // * Render
  return (
    <Form onSubmit={sendMessage}>
      {/* Input */}
      <Input
        value={userMessage}
        setValue={setUserMessage}
        icon={PaperAirplaneIcon}
        label="Your Message"
        placeholder=""
        labelHidden={true}
        autoFocus={true}
        required={true}
        cols={3}
      />

      {/* Submit */}
      <Button
        type="submit"
        loading={loading}
        disabled={loading || !userMessage}
      >
        Send Message
      </Button>
    </Form>
  );
}
