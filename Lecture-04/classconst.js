class Song {
    constructor(title,artist){
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song('Best Parts','Daniel Caesar')
console.log(mySong);
console.log(typeof mySong);