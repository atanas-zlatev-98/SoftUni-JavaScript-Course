function songs(arr){

    let numberOfSongs = Number(arr.shift());
    let listType = arr.pop();

    let songs = [];

    class Song {
        constructor(typeList,name,time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for(let i = 0;i< numberOfSongs;i++){
        let tokens = arr[i].split('_');

        let [type,songName,duration] = tokens;
       
        let newSong = new Song(type,songName,duration);

        songs.push(newSong);
    }

    for(let song of songs){
        if(song.typeList == listType){
            console.log(song.name);
        }
        if(listType == 'all'){
            console.log(song.name);
        }
    }
}

//songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);
songs([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater']);
