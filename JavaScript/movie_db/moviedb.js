movies = [
    film = {
        title: "Call me By Your Name",
        rating: 5.0,
        hasWatched: 1
    },
    film = {
        title: "Star Wars: The Last Jedi",
        rating: 4.0,
        hasWatched: 1
    },
    film = {
        title: "Three Billboards Outside Ebbing, Missouri",
        rating: 4.5,
        hasWatched: 1
    },
    film = {
        title: "I, Tonya",
        rating: 3.5,
        hasWatched: 0
    }
];

function Summary() {
    movies.forEach(film => {
        var text = "You have ";
        if(film.hasWatched === 0){
            text += "not ";
        }
        text += "watched " + "\"" + film.title + "\" - " + film.rating + " stars";
        console.log(text);
    });
}