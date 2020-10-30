const input = document.getElementById('recherche')
const soRandomm = document.getElementById("random")
const recherche = input.value;
const divCenter = document.getElementById("buton");
const serie = document.getElementById("serie");
const mainDiv = document.getElementById("the-Changing-Div");
const card = document.getElementById("theCard");
//episodes
const episodesDIV = document.getElementById("episodesDiv");
const button = document.getElementById('span')
const buttonEpisode = document.getElementById('eps')
//citation
const repliques = document.getElementById("replique")
const citation = document.getElementById("citation");
const citationButton = document.getElementById('citationButton')
const repliquesSelect = document.getElementById('select');
//for photo
const photoPlace = document.getElementById("photoPlace");
let listAuthorQuotes = [];
let listOfCharacters = [];
console.log("listOfCharacters", listOfCharacters)

let listOfQuotes = []

// CHARACTERS
// CHARACTERS
// CHARACTERS
// CHARACTERS
// CHARACTERS
//Click to show the Personnages and hide other table
button.addEventListener("click", () => {
    if (serie.style.display = "none") {
        photoPlace.innerHTML = ""
        input.style.display = "block";
        repliques.style.display = "none";
        episodesDIV.style.display = "none";
        serie.style.display = "flex";
        citation.style.display = "none";
        soRandomm.style.display = "none";


    }
    
})

loudOut()
//Function to get the api of characters
function loudOut() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            show(JSON.parse(this.responseText))
            listOfCharacters = (JSON.parse(this.responseText))

        }
    };
    xhttp.open("GET", "https://www.breakingbadapi.com/api/characters", true);
    xhttp.send();
}

//To filter when me type on search input 
//it filters by the class "item"
input.addEventListener('keyup', () => {
    search();
});

function search() {
    var filter = input.value.toUpperCase();

    var searchDisplay;


    userClass = document.querySelectorAll(".item");
    for (i = 0; i < userClass.length; i++) {
        user = userClass[i];
        searchDisplay = user.innerText;

        if (searchDisplay.toUpperCase().indexOf(filter) > -1) {
            userClass[i].style.display = "";
        } else {
            userClass[i].style.display = "none";
        }
    }
}

//Allow us to use the Characters api
function show(users) {

    for (let x of users) {

        //get the character

        const season = document.createElement("div")
        season.setAttribute("class", "card")
        season.classList.add('item');
        const Name = document.createElement("div")
        Name.innerText = "Nom : " + x.name
        Name.setAttribute("name", x.name)
        Name.classList.add("class","1");
        Name.classList.add('pointer')

        Name.addEventListener("click", () => {
         hidePostList(Name)
        }
        )
        const pseudo = document.createElement("div")
        pseudo.innerText = "Pseudo : " + x.nickname;
        pseudo.setAttribute("name", x.name)
        pseudo.classList.add("class","1");
        pseudo.addEventListener("click", () => {

            hidePostList(pseudo)
        }
        )
        pseudo.classList.add('pointer')
        let newImage = document.createElement('img');
        newImage.setAttribute("name", x.name)

        img = x.img;
        newImage.src = img;
        newImage.addEventListener("click", () => {

            hidePostList(newImage)
        }
        )

        newImage.setAttribute("class", "card-img-top")
        newImage.classList.add('pointer');
        newImage.classList.add("class","1");
        season.appendChild(newImage);
        season.appendChild(Name);
        season.appendChild(pseudo);
        serie.appendChild(season);
        citation.style.display = "none";
        input.style.display = "block";

    }
}




//EPISODE
//EPISODE
//EPISODE
//EPISODE


//Click to show the Episodes and hide other table
buttonEpisode.addEventListener("click", () => {
    episodesDIV.style.display = "flex"
    photoPlace.style.display = "none"
    input.style.display = "block"
    repliques.style.display = "none"
    photoPlace.innerHTML = ""
    // serie.innerHTML="";
    serie.style.display = "none"
    // citation.innerHTML="";
    citation.style.display = "none"
    soRandomm.innerHTML = "";
}
);
episodeOut()
//Function to get the api of Episodes
function episodeOut() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            episodes(JSON.parse(this.responseText))
        }
    };
    xhttp.open("GET", "https://www.breakingbadapi.com/api/episodes", true);
    xhttp.send();


}
//Function to use the Api of Episode how we want,by creating div's and pution tha api info then append it 
function episodes(eps) {


    for (let y of eps) {
        const allEpisodes = document.createElement('div');
        allEpisodes.setAttribute("class", "allEpisodes")

        const titre = document.createElement('div');

        const titreH1 = document.createElement("h6");
        titre.setAttribute("class", "episodes")
        titreH1.innerText = y.title
        const titreEp = document.createElement('div');
        titreEp.innerText = "Episodes:" + y.episode
        const titreSeason = document.createElement('div');
        titreSeason.innerText = "Season:" + y.season


        const personnage = document.createElement('div');
        personnage.setAttribute("class", "episodes")
        const personnageH1 = document.createElement("h5");
        personnageH1.innerText = "PERSONNAGES"
        const allPersonnages = document.createElement('div');
        //it filter all perosnages and gives a value 
        for (let i = 0; i < y.characters.length; i++) {
            const karakter = document.createElement("h6");
            karakter.setAttribute("name", y.characters[i]);
            karakter.classList.add("class","2");

            karakter.innerText = y.characters[i]

            karakter.addEventListener("click", () => {

                hidePostList(karakter)

            })
            allPersonnages.appendChild(karakter)
         
            karakter.classList.add('pointer')
        }

        personnage.appendChild(personnageH1)
        titre.appendChild(titreH1)
        personnage.appendChild(allPersonnages)
        titre.appendChild(titreEp)
        titre.appendChild(titreSeason)
        allEpisodes.appendChild(titre)
        allEpisodes.appendChild(personnage)
        episodesDIV.appendChild(allEpisodes)
        allEpisodes.classList.add('item');
        mainDiv.appendChild(episodesDIV);
        episodesDIV.style.display = "none";

    }

}



//CITATION
//CITATION
//CITATION
//CITATION

//Click to show the citation and hide other 
citationButton.addEventListener("click", () => {

    photoPlace.innerHTML = ""

    input.style.display = "none"
    repliques.style.display = "block"
    serie.style.display = "none"
    // serie.innerHTML="";
    episodesDIV.style.display = "none"
    // episodesDIV.innerHTML="";
    citation.style.display = "flex"
    // citation.innerHTML="";
    // soRandomm.style.display="none"
    soRandomm.innerHTML = "";

    random()
}
);
//Click to select the citations and it will change it 
repliquesSelect.addEventListener("change", () => {
    citation.innerHTML = "";
    citationOut()
}
);
citationOut()
//To get the api of Quotes
function citationOut() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            allQuotes(JSON.parse(this.responseText))
        }
    };
    xhttp.open("GET", "https://www.breakingbadapi.com/api/quotes", true);
    xhttp.send();


}

//Function to use the api of quotes
function allQuotes(cit) {
    for (let z of cit) {


        const repliques = document.createElement('div');
        const repliquesOption = document.createElement('option');
        repliquesOption.value = z.author;

        repliquesOption.innerText = z.author;
        const valuesOp = repliquesSelect.value
        citation.appendChild(repliques)
        if (listAuthorQuotes.includes(repliquesOption.value) == false) {

            repliquesSelect.appendChild(repliquesOption);
            listAuthorQuotes.push(z.author)


        }
        //creates the quaotes de author
        if (z.author == valuesOp) {
            const allCitations = document.createElement('div');
            allCitations.setAttribute("class", "allCitation");
            const lesCitations = document.createElement('div');
            lesCitations.innerText = '"' + z.quote + '"' + "  " + z.author;
            lesCitations.setAttribute("name", z.author)
            lesCitations.classList.add('pointer');
            lesCitations.classList.add("class","3");
            lesCitations.addEventListener("click", () => {

                hidePostList(lesCitations)
            }
            )
            let lesCitationss = '"' + z.quote + '"' + z.author;
            lesCitations.setAttribute("id", z.quote_id)
            const allCitationEpisodes = document.createElement('div');
            allCitationEpisodes.innerText = z.series;
            allCitationEpisodes.setAttribute("class", "citations")
            allCitations.appendChild(lesCitations);
            allCitations.appendChild(allCitationEpisodes);
            citation.appendChild(allCitations);
            mainDiv.appendChild(citation)
            listOfQuotes.push(lesCitationss)
        }



    }

}
//FOR PHOTO
//FOR PHOTO
//FOR PHOTO
//FOR PHOTO
//FOR PHOTO

function photoOut() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            photo(JSON.parse(this.responseText))
        }
    };
    xhttp.open("GET", "https://www.breakingbadapi.com/api/characters", true);
    xhttp.send();
}
function hidePostList(e) {
    var t = e.getAttribute("name")
    for (let x of listOfCharacters) {
        if (x.name.includes(t) == true || x.nickname.includes(t) == true) {
            //So if the have the same names displays only one
            if (t.match(x.name) || t.match(x.nickname)) {
                console.log("hidePostList -> e", e)
                photoPlace.style.display = "block"
                photoPlace.classList.add("ps")

                input.style.display = "none"
                let imgs = document.createElement("img");
                photoPlace.appendChild(imgs);
                imgs.setAttribute("src", x.img);
                imgs.setAttribute("class", "imgPhoto");
                photoPlace.appendChild(imgs);
                let names = document.createElement("div");
                names.innerHTML = "Nom: " + x.name;

                photoPlace.appendChild(names);
                let nicknames = document.createElement("div");
                nicknames.innerHTML = "Pseudo: " + x.nickname;

                photoPlace.appendChild(nicknames);
                let birth = document.createElement("div");
                birth.innerHTML = "Date de Naissance: " + x.birthday;

                photoPlace.appendChild(birth);
                let works = document.createElement("div");
                works.innerHTML = "Travail: " + x.occupation;

                photoPlace.appendChild(works);
                let btn = document.createElement("button");
                btn.setAttribute("class", "buttonPhoto");
                btn.innerText = "Return"
                photoPlace.appendChild(btn)
                serie.style.display = "none"
                episodesDIV.style.display = "none"
                citation.style.display = "none"
                repliques.style.display = "none"

                btn.onclick = function () {
                photoPlace.innerHTML = ""
                if (e.classList.contains("1")) {
                    input.style.display = "block";
                        serie.style.display="flex"
                }else if (e.classList.contains("2")) {
                    input.style.display = "block";
                    episodesDIV.style.display="flex"
                }else{
                    citation.style.display="flex";
                    repliques.style.display = "block"
                    }
                }
            }
        }
    }
}
//A RANDOM QUOTE
//A RANDOM QUOTE
//A RANDOM QUOTE
//A RANDOM QUOTE
//A RANDOM QUOTE
function random() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            randomQuote(JSON.parse(this.responseText))
        }
    };
    xhttp.open("GET", "https://www.breakingbadapi.com/api/quote/random", true);
    xhttp.send();


}

function randomQuote(x) {
    for (let l of x) {
        let rQuote = document.createElement("div");
        let citDuJour = document.createElement("div")
        let rAuthor = document.createElement("div")
        console.log('James')
        rAuthor.setAttribute("name", l.author);
        rAuthor.innerHTML = l.author
        rAuthor.addEventListener("click", () => {
            hidePostList(rAuthor)

        })
        citDuJour.innerHTML = "CITATION DU JOUR"

        rQuote.innerHTML = '"' + l.quote + '"'
        rAuthor.setAttribute("id", "author")
        rAuthor.classList.add("class","3");
        soRandomm.style.display = "block"
        soRandomm.appendChild(citDuJour)
        soRandomm.appendChild(rQuote)
        rAuthor.classList.add('pointer');
        soRandomm.appendChild(rAuthor)
    }

}


