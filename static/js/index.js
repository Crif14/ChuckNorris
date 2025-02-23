let buttons = document.querySelectorAll(".dropdown-item");
let categoria = "";
let button = document.querySelector("#caricaJoke");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let el = event.currentTarget;
        categoria = el.textContent.trim();
        document.querySelector("#battutaDropdown").textContent = "Categoria: " + categoria;
        button.classList.remove("buttonError")
    });
}

button.addEventListener('click', function () {
    if (categoria === "") {
        button.classList.add("buttonError");
        return;
    }
    fetch("https://api.chucknorris.io/jokes/random?category=" + categoria.toLowerCase())
        .then(response => response.json())
        .then(data => {
            document.querySelector("#battuta").innerHTML = data.value;
            document.querySelector("#imgChuck").src = "static/image/chuck_parla.png";
            document.querySelector("#imgNuvola").classList.remove("hide");
        })
        .catch(error => {
            console.log(error);
        });
});
