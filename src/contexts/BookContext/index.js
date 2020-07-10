import React, { createContext, useReducer } from 'react';
import { Reducer, initialState } from '../../common/Reducer/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    
    const localStoredBooks = localStorage.getItem("books");

    const [state, dispatch] = useReducer(Reducer, initialState, () => {
        return {
            ...initialState,
            books: localStoredBooks ? JSON.parse(localStoredBooks) : []
        }
    });

    return (
        <BookContext.Provider value = {{ state, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider