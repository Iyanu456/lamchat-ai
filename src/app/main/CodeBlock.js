import hljs from "highlight.js";
import kotlin from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('kotlin', kotlin);

export default function CodeBlock({ value }) {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    const highlightedCode = hljs.highlightAuto(value).value;
  
    return (
      <pre>
        <code>value</code>
      </pre>
    );
  }
  