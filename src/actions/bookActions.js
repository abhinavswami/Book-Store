import Axios from 'axios';
// API URL
const apiUrl = 'http://59cd51e2c80b4a001175c45f.mockapi.io/api/';

// Sync action
export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books
    }
};

// Async action

export const fetchBooks = () => {
    // Return a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        return Axios.get(apiUrl)
        .then(response => {
            // Dispatch another action 
            // to consume data
            dispatch(fetchBooksSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const createBook = (book) => {
    console.log('Inside createBook action');
    return {
        // unique identifier
        type: 'CREATE_BOOK',
        // Payload
        book
    };
};