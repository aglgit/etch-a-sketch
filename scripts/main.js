$(document).ready(function() {
    var rows = 16;
    var columns = rows;
    var width = "620px"
    var height = width;
    createGrid(rows, columns, width, height);
});

function createGrid(rows, columns, width, height) {
    var $container = $('<div>', {id: "container"});
    var $row = $('<div>', {class: "row"});
    var $square = $('<div>', {class: "square"});
    $container.css("width", width);
    $container.css("height", height);
    $square.css("width", 100/rows + "%");
    $square.css("height", 100/columns + "%");
    $("body").append($container);

    for(var i=0; i<columns; i++) {
        $row.append($square.clone());
    }
    for(var j=0; j<rows; j++) {
        $container.append($row.clone());
    }

    $(".square").hover(
        function() {$(this).css("background-color", "yellow");},
        function() {$(this).css("background-color", "pink");}
    );

    $("#clear").click(function() {
        $(".square").css("background-color", "#FFFFFF");
    });

    $("#resize").click(function() {
        rows = prompt("Please enter grid size", "16");
        columns = rows;
        $("#container").empty();
        createGrid(rows, columns, width, height);
    });
}
