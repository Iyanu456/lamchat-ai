//import { useState } from "react";
//import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
//import Image from "next/image";
//import lamLogo from "../assets/icons/lamlogo.png";

export default function Chat({ className, profileClass, profileContent, id, content}) {
  return (
        <div className={className} key={id}>
          <div className={profileClass}>{profileContent}</div>
          <div className="content">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  // Check if it's an inline code block
                  if (inline) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                  // If not inline, highlight the code
                  const highlightedCode = hljs.highlightAuto(children[0]).value;

                  return (
                    <code
                      dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    ></code>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
  );
}
