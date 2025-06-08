type HighlighterProps = {
  text: string;
  query: string;
};

export const Highlighter = ({ text, query }: HighlighterProps) => {
  if (!query) return <>{text}</>;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase().startsWith(query.toLowerCase()) ? (
          <mark key={i} style={{ backgroundColor: '#fff176', fontWeight: 'bold' }}>
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};
