import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Chat({ chatData }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatData]);

  return (
    <>
      {chatData.map((message, index) => (
        <div
          className={message.role === "user" ? "user " : "ai "}
          key={message.id}
          ref={index === chatData.length - 1 ? bottomRef : null}
        >
          <div className={message.role === "user" ? "user-icon " : "ai-icon "}>
            {message.role === "user" ? "u" : "ai"}
          </div>
          {message.role === "user" ? (
            <div className="content">{message.content}</div>
          ) : (
            <div className="content">
              <ReactMarkdown
                components={{
                  code({ node, inline, children, ...props }) {
                    if (inline) {
                      return <code {...props}>{children}</code>;
                    }
                    return (
                      <SyntaxHighlighter
                        style={materialDark}
                        className="code-curve"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    );
                  },
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
