import ReactMarkdown from "react-markdown";

export default function MatchResultsAI({ data }) {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <h3 className="text-lg text-signal mt-4 mb-2" {...props} />,
        h2: (props) => <h3 className="text-lg text-signal mt-4 mb-2" {...props} />,
        h3: (props) => <h3 className="text-lg text-signal mt-4 mb-2" {...props} />,
        strong: (props) => <strong className="text-text font-semibold" {...props} />,
        p: (props) => <p className="text-sm text-text-muted leading-relaxed mb-2" {...props} />,
        ul: (props) => <ul className="list-disc list-inside space-y-1 mb-3" {...props} />,
        ol: (props) => <ol className="list-decimal list-inside space-y-1 mb-3" {...props} />,
        li: (props) => <li className="text-sm text-text-muted" {...props} />,
        hr: () => <hr className="border-line my-4" />,
      }}
    >
      {data.analysis}
    </ReactMarkdown>
  );
}