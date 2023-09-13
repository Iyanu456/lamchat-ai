import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import he from "he"; // Import the HTML entity decoding library

export default function Chat({ className, profileClass, profileContent, id, content }) {
  const [highlightedContent, setHighlightedContent] = useState("");

  useEffect(() => {
    // Function to highlight code blocks
    const highlightCode = (code) => {
      const decodedCode = he.decode(code); // Decode HTML entities
      const highlightedCode = hljs.highlightAuto(decodedCode).value;
      return highlightedCode;
    };

    // Regular expression to match code blocks enclosed in triple backticks
    const codeBlockRegex = /```([\s\S]*?)```/g;

    // Process and highlight code blocks
    const highlightedContent = content.replace(codeBlockRegex, (match, code) => {
      return "```" + highlightCode(code) + "```";
    });

    setHighlightedContent(highlightedContent);
  }, [content]);

  return (
    <div className={className} key={id}>
      <div className={profileClass}>{profileContent}</div>
      <div className="content">
        <ReactMarkdown>{highlightedContent}</ReactMarkdown>
      </div>
    </div>
  );
}
