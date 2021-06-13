// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};


//Year 1
const $container = $("#container")
const $h1 = $("<h1></h1")

$h1.text("Hogwarts")
$h1.appendTo($container)

//Year 2
const $h2 = $("<h2></h2")
const $h3 = $("<h3></h3")
const $wand = $("<h4></h4")
const $pet = $("<h4></h4")

$h2.text("Nicole Hamilton")
$h3.text("Slytherin")
$wand.text("5 1/2 Beech Wand with Phoenix Feather Core, Flexible")
$pet.addClass("cat")
$pet.text("Mau")

$h2.appendTo($container)
$h3.appendTo($container)
$wand.appendTo($container)
$pet.appendTo($container)

//year 3
let items = ["butter beer", "invisibility cloak", "magic map", "time turner", "leash", "Bertie Bott's Every Flavor Beans"]
const $trunk = $("<ul></ul>")
$trunk.attr("storage", "trunk")
$trunk.appendTo($container)
$.each(items, function(i){
    
    if(i == 1 ||i == 2 || i == 3){
        console.log(i)
        let li = $("<li></li")
            .addClass("secret")
            .text(items[i])
            .appendTo($trunk)
    } else if (i == 4) {
        let li= $("<li></li")
            .addClass("cat")
            .text(items[i])
            .appendTo($trunk)
    }else {
        console.log("hello")
        let li= $("<li></li")
            .text(items[i])
            .appendTo($trunk)
    }
})

//year 4
function makeTable($container, data){
    let $table = $("<table></table>").addClass('table')
    $.each(data, function(rowInd, i) {
        let $row = $("<tr/>")
        $.each(i, function(colInd, c) {
            $row.append($("<t" + (rowInd == 0 ? "h" : "d") + "/>").text(c))
        })
        $table.append($row)
    })
    $container.append($table)
    return 
}

let data = [
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], //days
            ["Arthimancy", "Muggle Studies", "Arthimancy", "Free", "Muggle Studies"],
            ["Care of Magical Creatures", "Free", "Care of Magical Creatures", "Free", "Free"],
            ["Herbology", "Potions", "Herbology", "Potions", "Free"],
            ["Lunch", "Lunch", "Lunch", "Lunch", "Lunch"],
            ["History of Magic", "Charms", "History of Magic", "Charms", "DADA"],
            ["Ancient Runes", "Divination", "Ancient Runes", "Free", "DADA"],
            ["Transfiguration", "Divination", "Transfiguration", "Free", "Free"],
            ["Past Curfew", "Past Curfew", "Past Curfew", "Astronomy", "Past Curfew"],]

let classSchedule = makeTable($container, data)

