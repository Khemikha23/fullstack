class Media {
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: 'Queen',
    name: 'Bohimian',
    publishDate: 2001
});

console.log(mySong.name);
console.log(mySong);