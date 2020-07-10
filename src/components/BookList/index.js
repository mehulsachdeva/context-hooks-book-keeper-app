import React, { useContext, useEffect } from 'react';
import { BookContext } from '../../contexts/BookContext';
import * as types from '../../common/Types';

const BookList = () => {

    const { state, dispatch } = useContext(BookContext);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(state.books));
    }, [state]);

    const deleteBook = (index) => {
        dispatch({ type: types.DELETE_BOOK, payload: index });
    }

    return (
        <div>
            {
                state.books.length > 0 ?  
                    state.books.map((book, index) => {
                        return (
                            <div key = {index}>
                                <div>
                                    { book.name }
                                </div>
                                <button
                                    onClick = {() => deleteBook(index)}
                                >
                                    DELETE
                                </button>
                            </div>
                        );
                    }) :
                    <div>
                        No Book Found
                    </div>
            }
        </div>
    );
}

export default BookList;