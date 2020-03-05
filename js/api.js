export class API {
    constructor(artist,song){
        this.artist=artist
        this.song=song
    }
    async queryToAPI(){
        const connection= await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`)
        const lyric= await connection.json()
        return lyric
    }
}