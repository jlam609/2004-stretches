class BookReview {
    constructor(title, author){
        this.title = title
        this.author = author
        this.notes = {}
        this.rating = 0
    }
    addNotes = (key, val) => {
        if (!this.notes[key]){
        this.notes[key] = val
        }
        else {this.notes[key] += ` ${val}`}
    }
    addRating = (rating) => {
        if (rating > 5 || rating < 0) throw 'rating must be between 0 and 5'
        this.rating = rating
    }
}
module.exports = { BookReview };
