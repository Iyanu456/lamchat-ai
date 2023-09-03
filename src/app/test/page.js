'use client';
 
import { useCompletion } from 'ai/react';
import './test.css';
 
export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/completion',
  });
 
  return (
    <div className="ai-container">
      <form onSubmit={handleSubmit}>
      <output>Completion result: {completion}</output>
          <input
            className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 text-black"
            value={input}
            onChange={handleInputChange}
          />
        
        <button type="button" onClick={stop}>
          Stop
        </button>
        <button disabled={isLoading} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}