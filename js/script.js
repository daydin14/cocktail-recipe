const url ="www.thecocktaildb.com/api/json/v1/1/random.php";

const $form = $("form");
const $drinkName = $("#drink");
const $instructions = $("#instructions");
const $image = $("#image");

$form.on("submit", getData);

function getData(event) {
    event.preventDefault();

    $.ajax(url).then(function(data) {
        $drinkName.text(data.strDrink);
        $instructions.text(data.strInstructions);
        $image.attr("src", data.strDrinkThumb);
        console.log(data);
    })
}