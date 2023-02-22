# Searchbar needs to fetch and give json back in the console

Solution:
// State variables
const [searchTerm, setSearchTerm] = useState("");
const [movies, setMovies] = useState("");

// Functions
// Search for a movie
const search = (event) => {
setSearchTerm(event.target.value);
fetch(`${omdbApi}${searchTerm}`)
.then((response) => response.json())
.then((json) => setMovies(json))
.catch((error) => {
console.error(error);
});
console.log(movies);
return movies;
};

==done==

# I want to display the search results object key-value pairs in the MovieCard

Solution:
<MovieResultContext.Consumer>
{(movies) => (

<h3 className="mt-6 text-gray-900 text-sm font-medium">
Title {JSON.stringify(movies)}
</h3>
)}
</MovieResultContext.Consumer>

==done==

# I want to render multiple movie cards with poster, title, and year.

== done ==

# Button Styling

# Linkjes in moviecard linken naar detail pagina

# Detail pagina fixen
