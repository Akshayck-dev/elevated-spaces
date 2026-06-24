export function splitChars(text: string) {
  return text.split("").map((c, i) => (
    <span key={i} className="split-char" style={{ display: c === " " ? "inline" : "inline-block" }}>
      {c === " " ? "\u00A0" : c}
    </span>
  ));
}
