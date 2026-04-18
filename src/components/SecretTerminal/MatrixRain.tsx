import type { CSSProperties } from 'react';

const MATRIX_GLYPHS = '01<>[]{}アイウエオカキクケコサシスセソナニヌネノ';

const MATRIX_COLUMNS = Array.from({ length: 46 }, (_, index) => {
  const length = 24 + (index % 8) * 3;
  const glyphs = Array.from({ length }, (__unused, glyphIndex) => {
    const glyphIndexInPool =
      (index * 7 + glyphIndex * 5 + (glyphIndex % 3)) % MATRIX_GLYPHS.length;

    return MATRIX_GLYPHS[glyphIndexInPool];
  }).join('\n');

  return {
    id: `matrix-column-${index}`,
    glyphs,
    style: {
      left: `${0.5 + index * 2.15}%`,
      animationDelay: `${-0.38 * (index % 11)}s`,
      animationDuration: `${6 + (index % 7) * 0.65}s`,
      fontSize: `${0.5 + (index % 6) * 0.04}rem`,
      opacity: 0.22 + (index % 6) * 0.07,
    } satisfies CSSProperties,
  };
});

const MatrixRain = () => {
  return (
    <div aria-hidden="true" className="secret-terminal__matrix-overlay">
      <div className="secret-terminal__matrix-vignette" />
      <div className="secret-terminal__matrix-scanlines" />
      {MATRIX_COLUMNS.map(column => (
        <div
          className="secret-terminal__matrix-stream"
          key={column.id}
          style={column.style}
        >
          {column.glyphs}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;
