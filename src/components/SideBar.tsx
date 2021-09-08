import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreSelected {
  genreSelected: {
    id: number;
    handleClickButton: (id: number) => void;
  };
}

export function SideBar(props: GenreSelected) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.genreSelected.handleClickButton(genre.id)}
            selected={props.genreSelected.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
