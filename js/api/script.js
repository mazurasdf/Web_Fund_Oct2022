function fetchInfo(){
    var pokeInput = document.querySelector("#pokeInput");

    fetch("https://pokeapi.co/api/v2/pokemon/"+pokeInput.value.toLowerCase())
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(res => {
            console.log("we got the data!");
            console.log(res.sprites.front_default);
            var pokeImg = document.querySelector("#pokeImg");
            pokeImg.src = res.sprites.front_default;
            //do what you want with the data now!
        })
        .catch(err => {
            alert("that pokemon doesn't exist!");
            console.log(err);
        })
}