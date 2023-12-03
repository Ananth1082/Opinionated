const TrendingDB = (`{
  "movies": [
    {
        "id": 1,
        "title": "Beetlejuice",
        "year": "1988",
        "runtime": "92",
        "genres": [
            "Comedy",
            "Fantasy"
        ],
        "director": "Tim Burton",
        "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
        "plot": "A couple of recently deceased ghosts contract the services of a bio-exorcist in order to remove the obnoxious new owners of their house.",
        "posterUrl": "https://www.theoriginalunderground.com/cdn/shop/products/beetlejuice-film-poster-print-131020_1024x.jpg?v=1661264360"
    },
    {
        "id": 2,
        "title": "The Cotton Club",
        "year": "1984",
        "runtime": "127",
        "genres": [
            "Crime",
            "Drama",
            "Music"
        ],
        "director": "Francis Ford Coppola",
        "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
        "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    },
    {
        "id": 3,
        "title": "The Shawshank Redemption",
        "year": "1994",
        "runtime": "142",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Frank Darabont",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "posterUrl": "https://rukminim2.flixcart.com/image/850/1000/k77xx8w0/poster/y/5/k/medium-the-shawshank-redemption-movie-poster-for-room-with-gloss-original-imafphntvxvqsscb.jpeg?q=20"
    },
    {
        "id": 4,
        "title": "Crocodile Dundee",
        "year": "1986",
        "runtime": "97",
        "genres": [
            "Adventure",
            "Comedy"
        ],
        "director": "Peter Faiman",
        "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
        "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
        "id": 5,
        "title": "Valkyrie",
        "year": "2008",
        "runtime": "121",
        "genres": [
            "Drama",
            "History",
            "Thriller"
        ],
        "director": "Bryan Singer",
        "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
        "plot": "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
        "posterUrl": "https://m.media-amazon.com/images/I/71yX2aH6kVL._AC_UF1000,1000_QL80_.jpg"
    }
  ]
}`);

const TrendingDBObj = JSON.parse(TrendingDB);
export default TrendingDBObj.movies;

