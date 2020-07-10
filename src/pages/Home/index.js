import React from 'react';
import Header from '../../components/Header';
import BookContextProvider from '../../contexts/BookContext';
import BookList from '../../components/BookList';
import BookForm from '../../components/BookForm';

const Home = () => {
    return (
        <BookContextProvider>
            <div>
                <Header />
                <BookList />
                <BookForm />
            </div>
        </BookContextProvider>
    );
}

export default Home;