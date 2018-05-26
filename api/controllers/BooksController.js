const books = [
    {id: 1, name: 'Book 01', author: 'Author 01'},
    {id: 2, name: 'Book 02', author: 'Author 02'},
    {id: 3, name: 'Book 03', author: 'Author 03'},
    {id: 4, name: 'Book 04', author: 'Author 04'}
];

module.exports = {
    getAllBooks: (req, res, next) => {
        res.json({
            message:'All books',
            books
        });
    }
}