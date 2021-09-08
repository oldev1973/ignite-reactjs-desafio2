import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  let genreSelected = {
    id: selectedGenreId,
    handleClickButton: handleClickButton,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genreSelected={genreSelected} />
      <Content id={selectedGenreId} />
    </div>
  );
}
