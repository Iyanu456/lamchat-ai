import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
//import 'highlight.js/styles/github.css';

// Custom memoization cache for highlighted code
const codeCache = {};

export default function Chat({ className, profileClass, profileContent, id, content }) {
  const [highlightedCode, setHighlightedCode] = useState(null);

  useEffect(() => {
    // Check if the code block content has already been memoized
    if (!codeCache[content]) {
      // Highlight the code and store it in the memoization cache
      const highlighted = hljs.highlightAuto(content).value;
      codeCache[content] = highlighted;
    }

    // Set the highlighted code from the memoization cache
    setHighlightedCode(codeCache[content]);
  }, [content]);

  return (
    <div className={className} key={id}>
      <div className={profileClass}>{profileContent}</div>
      <div className="content">
        <ReactMarkdown components={{
          code({ node, inline, className, children, ...props }) {
            if (inline) {
              return <code className={className} {...props}>{children}</code>;
            }
            // Render the stored highlighted code
            return (
              <pre>
                <code
                  className={className}
                  dangerouslySetInnerHTML={{
                    __html: highlightedCode,
                  }}
                />
              </pre>
            );
          },
        }}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
