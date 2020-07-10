import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../../contexts/BookContext';
import * as types from '../../common/Types';

const BookForm = () => {

    const { state, dispatch } = useContext(BookContext);
    const [ bookTitle, setBookTitle ] = useState('');

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(state.books));
        setBookTitle('');
    }, [state]);

    const insertBook = () => {
        dispatch({ type: types.ADD_BOOK, payload: bookTitle });
    }

    return (
        <form>
            <input 
                type = "text"
                placeholder = "Book Name"
                value = { bookTitle }
                onChange = {(e) => setBookTitle(e.target.value)}
            />
            <input 
                type = "button"
                value = "INSERT"
                onClick = { insertBook }
            />
        </form>
    );
}

export default BookForm;