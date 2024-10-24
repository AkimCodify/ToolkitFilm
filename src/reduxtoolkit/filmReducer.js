import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    films: [
        {
            filmname: "Charlie and the Chocolate Factory",
            watched: false,
            id: 1
        }
    ]
}
export const AddFilms = createAction("ADD_FILM");
export const DeleteFilm = createAction("DELETE_FILM");

const filmReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase("ADD_FILM",(state, action) => {
        return {...state, films: [...state.films, action.payload]}
    })
    builder.addCase("DELETE_FILM",(state, action) => {
        return {...state, films: [...state.films.filter((el) => el.id !== action.payload)]}
    })
})

export default filmReducer
