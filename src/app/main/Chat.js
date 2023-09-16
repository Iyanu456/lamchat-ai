import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Import Prism.js styles for syntax highlighting (optional)
//import "prismjs/themes/prism.css";

//const MemoizedSyntaxHighlighter = React.memo(SyntaxHighlighter);

export default function Chat({ chatData }) {
  return (
    <>
      {chatData.map((message) => (
        <div
          className={message.role === "user" ? "user " : "ai "}
          key={message.id}
        >
          <div
            className={
              message.role === "user" ? "user-icon " : "ai-icon "
            }
          >
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
                      >{String(children).replace(/\n$/, "")}</SyntaxHighlighter>
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
