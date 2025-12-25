const book = {
    title: "1984",
    author: "George Orwell",
    isAvaliable: true,
    checkOut: function(){
        this.isAvaliable = false;
    },
    checkIn: function(){
        this.isAvaliable = true;
    }
};
console.log(book.isAvaliable);
book.checkOut();
console.log(book.isAvaliable);
book.checkIn();
console.log(book.isAvaliable);