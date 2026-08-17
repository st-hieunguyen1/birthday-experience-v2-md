import { useMemo, useState } from 'react';
import people from '../data/people.json';

export default function PeopleAroundYou({ chapter, viewedPeople, onViewedPeopleChange, onBack, onComplete }) {
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  const selectedPerson = useMemo(
    () => people.find((person) => person.id === selectedPersonId) ?? null,
    [selectedPersonId]
  );

  const viewedCount = viewedPeople.length;
  const totalCount = people.length;
  const isComplete = viewedCount === totalCount;

  const openPerson = (personId) => {
    setSelectedPersonId(personId);
    if (!viewedPeople.includes(personId)) {
      onViewedPeopleChange([...viewedPeople, personId]);
    }
  };

  return (
    <section className="chapter-shell people">
      <p className="chapter-shell__kicker">{chapter.kicker}</p>
      <h1 className="chapter-shell__title">{chapter.title}</h1>
      <p className="chapter-shell__line">{chapter.lines[0]}</p>

      <p className="people__progress">
        {String(viewedCount).padStart(2, '0')} / {String(totalCount).padStart(2, '0')}
      </p>

      <div className="people__constellation" role="list" aria-label="People around you">
        {people.map((person) => {
          const isViewed = viewedPeople.includes(person.id);

          return (
            <button
              key={person.id}
              type="button"
              role="listitem"
              className={`node ${isViewed ? 'node--viewed' : ''}`}
              onClick={() => openPerson(person.id)}
            >
              <span className="node__name">{person.name}</span>
              <span className="node__relation">{person.relationship}</span>
            </button>
          );
        })}
      </div>

      {selectedPerson ? (
        <article className="memory-window" aria-live="polite">
          <p className="memory-window__name">{selectedPerson.name}</p>
          <p className="memory-window__role">{selectedPerson.relationship}</p>
          <p className="memory-window__message">“{selectedPerson.message}”</p>
          <p className="memory-window__wish">{selectedPerson.finalWish}</p>
          <button type="button" className="button button--ghost" onClick={() => setSelectedPersonId(null)}>
            Đóng
          </button>
        </article>
      ) : null}

      <div className="chapter-shell__actions">
        <button type="button" onClick={onBack} className="button button--ghost">
          Quay lại
        </button>

        <button type="button" onClick={onComplete} className="button button--primary" disabled={!isComplete}>
          {isComplete ? "Everyone's here" : 'Mở hết mọi người để tiếp tục'}
        </button>
      </div>
    </section>
  );
}
