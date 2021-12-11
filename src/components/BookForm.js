import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookForm(props) {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const submitBookInfo = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_BOOK',book:{title,author}});
        setTitle('')
        setAuthor('')
    }

    return (
        <form onSubmit={submitBookInfo}>
            <input type="text" placeholder="book title" value={title}
                onChange={(e) => setTitle(e.target.value)} required />

            <input type="text" placeholder="author" value={author}
                onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="add Book"></input>
        </form>
    );
}

export default BookForm;