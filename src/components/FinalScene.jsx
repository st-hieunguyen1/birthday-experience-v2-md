import people from '../data/people.json';

export default function FinalScene({ chapter, viewedCount, onBack }) {
  return (
    <section className="chapter-shell finale">
      <p className="chapter-shell__kicker">{chapter.kicker}</p>
      <h1 className="chapter-shell__title">{chapter.title}</h1>
      <p className="chapter-shell__line">{chapter.lines[0]}</p>

      <div className="finale__center">N</div>

      <div className="finale__wishes" aria-label="Final wishes stream">
        {[...people, ...people].map((person, index) => (
          <p key={`${person.id}-${index}`} className="finale__wish">
            {person.finalWish}
          </p>
        ))}
      </div>

      <p className="finale__footer">
        Happy Birthday, N. • {viewedCount}/{people.length} people opened
      </p>

      <div className="chapter-shell__actions">
        <button type="button" onClick={onBack} className="button button--ghost">
          Quay lại phần trước
        </button>
      </div>
    </section>
  );
}
