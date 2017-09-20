export const createBook = (book) => {
    return {
        // unique identifier
        type: 'CREATE_BOOK',
        // Payload
        book: book
    }
};