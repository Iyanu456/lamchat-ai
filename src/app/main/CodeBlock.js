import hljs from "highlight.js";
import React, { useEffect, useRef } from 'react';

export default function CodeBlock({ value }) {

    const codeRef = useRef(null)
    //const highlightedCode = hljs.highlightAuto(code).value;

    useEffect(() => {
        if (codeRef.current) {
          hljs.highlightAuto(codeRef.current); // Automatically detect and highlight the language
        }
      }, [value]);

    return (
      <pre>
        <code ref={codeRef}>{value}</code>
      </pre>
    );
  }
  
  