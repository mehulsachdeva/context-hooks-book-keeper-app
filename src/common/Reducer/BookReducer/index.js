import * as types from '../../Types';

export const initialState = {
    books: []
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_BOOK:
            return {
                ...state,
                books: [
                    ...state.books,
                    {
                        name: action.payload
                    }
                ]
            }
        case types.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book, index) => index !== action.payload)
            }
        default:
            return state;
    }
}