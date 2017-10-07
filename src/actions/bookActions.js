import Axios from 'axios';
import * as actionTypes from './actionTypes';
// API URL
const apiUrl = 'http://59cd51e2c80b4a001175c45f.mockapi.io/api/';

// Sync action
export const fetchBooksSuccess = (books) => {
    return {type: actionTypes.FETCH_BOOKS_SUCCESS, books}
};

// Async action

export const fetchBooks = () => {
    // Return a dispatcher function that dispatches an action at a later time
    return (dispatch) => {
        return Axios
            .get(apiUrl)
            .then(response => {
                // Dispatch another action to consume data
                dispatch(fetchBooksSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

// Sync action
export const fetchBookByIdSuccess = (book) => {
    return {type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS, book}
};

// Async action
export const fetchBookById = (bookId) => {
    return (dispatch) => {
        return Axios
            .get(apiUrl + '/' + bookId)
            .then(response => {
                // Handle data with sync action
                dispatch(fetchBookByIdSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createBookSuccess = (book) => {
    return{
        type: actionTypes.CREATE_BOOK_SUCCESS,
        book
    }
};

export const createBook = (book) => {
    return (dispatch) => {
        return Axios.post(apiUrl, book)
        .then(response =>{
            dispatch(createBookSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};