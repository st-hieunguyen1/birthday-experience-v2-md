import { useMemo, useState } from 'react';
import ChapterShell from './components/ChapterShell.jsx';
import PeopleAroundYou from './components/PeopleAroundYou.jsx';
import FinalScene from './components/FinalScene.jsx';
import chapters from './data/chapters.json';

const CHAPTER_ORDER = [
  'beginning',
  'character',
  'little-things',
  'stories',
  'people-around-you',
  'everyone-is-here'
];

export default function App() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [viewedPeople, setViewedPeople] = useState([]);

  const chapterKey = CHAPTER_ORDER[chapterIndex];
  const chapterData = chapters[chapterKey];

  const chapterLabel = useMemo(() => {
    return `${String(chapterIndex + 1).padStart(2, '0')} / ${CHAPTER_ORDER.length}`;
  }, [chapterIndex]);

  const handleNext = () => {
    setChapterIndex((prev) => Math.min(prev + 1, CHAPTER_ORDER.length - 1));
  };

  const handleBack = () => {
    setChapterIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="app-root">
      <header className="top-bar">
        <p className="top-bar__label">Birthday Experience — N</p>
        <p className="top-bar__progress">{chapterLabel}</p>
      </header>

      {chapterKey !== 'people-around-you' && chapterKey !== 'everyone-is-here' ? (
        <ChapterShell chapter={chapterData} onNext={handleNext} onBack={handleBack} canBack={chapterIndex > 0} />
      ) : null}

      {chapterKey === 'people-around-you' ? (
        <PeopleAroundYou
          chapter={chapterData}
          viewedPeople={viewedPeople}
          onViewedPeopleChange={setViewedPeople}
          onBack={handleBack}
          onComplete={handleNext}
        />
      ) : null}

      {chapterKey === 'everyone-is-here' ? (
        <FinalScene chapter={chapterData} viewedCount={viewedPeople.length} onBack={handleBack} />
      ) : null}
    </main>
  );
}
