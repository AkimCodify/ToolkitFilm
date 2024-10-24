import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddFilms } from '../reduxtoolkit/filmReducer';

const AddFilm = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const handleAdd = () => {
        const newFilmObj = {
            filmname: value,
            watched: false,
            id: Date.now()
        }
        dispatch(AddFilms(newFilmObj))
        setValue('')
    }
    return (
        <div>
            <h1>Добавить новый фильм</h1>
            <input type="text" placeholder='Имя фильма' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleAdd}>Добавить</button>
        </div>
    );
};

export default AddFilm;