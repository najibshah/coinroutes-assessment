export function Image({ href, target, source, altText, style }) {
  return (
    <a href={href} target={target}>
      <img src={source} alt={altText} style={{ ...style }} />
    </a>
  );
}
