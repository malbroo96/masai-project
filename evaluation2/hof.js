const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, duration: 148 },
  { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, duration: 152 },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, duration: 169 },
  { title: "Tenet", year: 2020, genre: "Sci-Fi", rating: 7.4, duration: 150 },
  { title: "Dunkirk", year: 2017, genre: "War", rating: 7.9, duration: 106 },
  { title: "The Prestige", year: 2006, genre: "Drama", rating: 8.5, duration: 130 },
];

const sortedTitles =[...movies].sort((a,b)=>b.rating-a.rating).map(movies=>movies.title)
const sciFimovies = movies.filter(movie=>movie.genre==="Sci-Fi").map(movie=>movie.title)
const averageDuration = movies .reduce((acc,curr) =>acc +curr.duration,0)/movies.length
const highestRated= movies.reduce((acc,curr) => acc.rating > curr.rating ? acc : curr);


console.log("Sorted Titles:", sortedTitles);
console.log("Sci-Fi Movies:", sciFimovies); 
console.log("Average Duration:", averageDuration);
console.log("Highest Rated Movie:", highestRated.title, "with rating:", highestRated.rating);

