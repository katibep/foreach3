const film=document.querySelector(".film")
// console.log(film)
async function allMovies(){
    try {
        const response=await fetch("https://desishubapi.vercel.app/api/movies")
        const movies=await response.json();
        console.log(movies)
        rendermovies(movies);
    } catch (error) {
        console.error("Error fetching movies:",error)
    }
}
function rendermovies(movies){
    film.innerHTML='';
    movies.forEach ((movie) => {
        console.log(movie)
    const moviesHTML=` <div class="film">
    <div class="part1">
        <div class="image">
            <a href=""><img src="${movie.thumbnail}"></a>
        </div>
        <p class="p">${movie.title}</p>
       <div class="stars">
       <a href=${movie.trailer}> watch movie</a>
      <div>
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
      </div>
       </div>
       <div class="button-container"> <button>Book Now</button></div>
    </div>
</div>`
    film.insertAdjacentHTML("beforeend",moviesHTML)
    });
}
allMovies()