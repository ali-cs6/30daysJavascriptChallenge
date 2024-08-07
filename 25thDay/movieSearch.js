
// Activity 2: Fetching Movie Data
// Task 3: Use the fetch API to get movie data from a public movie API (e.g., OMDB API or The Movie Database API). Log the response data to the console.

let API_key = "71fc72ac"

const movie = async function (name) {
    let response = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=${API_key}`)
    let data = await response.json()
    let movieT = document.getElementsByClassName("movieTitle")
    let movieY = document.getElementsByClassName("movieRelease")
    let movieI = document.getElementById("poster")

    movieT[0].innerHTML = data.Title
    movieY[0].innerHTML = data.Year
    if (data.Poster == "N/A") {
        movieI.setAttribute('src', "./Images/movie.jpg")
    } else {
        movieI.setAttribute('src', data.Poster)
    }
    console.log('Data', data)
}




let submit = document.getElementById("mform")
submit.addEventListener("submit", async (eve) => {
    eve.preventDefault()

    let name = document.getElementById("search").value
    movie(name)

})

// Activity 4: Displaying Detailed Movie Information
// Task 7: Modify the search results to include a "More Info" button for each movie. When clicked, fetch and
// display additional details about the movie, such as the plot, director, and actors. 


let detailedInfo = document.getElementById("more")
detailedInfo.addEventListener("click", async (eve) => {
    eve.preventDefault()
    let modal = document.getElementById("modal")
    let detailedInfo = document.querySelector(".detailedInfo")
    if (modal.style.visibility == "hidden") {
        modal.style.visibility = "visible"
        detailedInfo.innerHTML = ''
        let name = document.getElementById("search").value
        let response = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=${API_key}`)
        let data = await response.json()
        if (data.Response === "True") {
            detailedInfo.innerHTML = '' 

            let plot = data.Plot
            let director = data.Director
            let actor = data.Actors
            let writer = data.Writer
            let genre = data.Genre

            let plotElement = document.createElement("p")
            plotElement.innerText = `Plot: ${plot}`
            detailedInfo.appendChild(plotElement)

            let directorElement = document.createElement("p")
            directorElement.innerText = `Director: ${director}`
            detailedInfo.appendChild(directorElement)

            let actorsElement = document.createElement("p")
            actorsElement.innerText = `Actors: ${actor}`
            detailedInfo.appendChild(actorsElement)

            let writerElement = document.createElement("p")
            writerElement.innerText = `Writer: ${writer}`
            detailedInfo.appendChild(writerElement)

            let genreElement = document.createElement("p")
            genreElement.innerText = `Genre: ${genre}`
            detailedInfo.appendChild(genreElement)

            let div = document.createElement("div")
            div.id="close"
            div.innerText="X"
            div.addEventListener("click", (eve) => {
                eve.preventDefault()
                modal.style.visibility = "hidden"
            })
            detailedInfo.appendChild(div)
            
        } else {
            detailedInfo.innerHTML = `<p>Movie not found.</p>`;
            let div = document.createElement("div")
            div.id="close"
            div.innerText="X"
            div.addEventListener("click", (eve) => {
                eve.preventDefault()
                modal.style.visibility = "hidden"
            })
            detailedInfo.appendChild(div)
        }
        setTimeout(() => {
            detailedInfo.classList.add("visible")
        }, 1000)

    } else {
        modal.style.visibility = "hidden"
        detailedInfo.classList.remove("visible")
    }


})
