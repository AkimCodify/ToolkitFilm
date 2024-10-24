import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteFilm } from '../reduxtoolkit/filmReducer';

const FilmItem = ({film}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(DeleteFilm(film.id))
    }
    return (
        <li>
            <span>{film.filmname}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default FilmItem;