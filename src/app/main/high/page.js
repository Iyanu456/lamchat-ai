import hljs from "highlight.js";

export default function CodeBlock() {


   const highlightedCode = hljs.highlightAuto("def(name)").value;
  
    return (
      <pre>
        <code className="python"
        dangerouslySetInnerHTML={{__html: highlightedCode}}></code>
      </pre>
    );
  }
  