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
    var isBlack = true;
    var hover = true;
    var noGradient = true;

    $container.css("width", width);
    $container.css("height", height);
    $square.css("width", 100/rows + "%");
    $square.css("height", 100/columns + "%");
    $("#page").append($container);

    for(var i=0; i<columns; i++) {
        $row.append($square.clone());
    }
    for(var j=0; j<rows; j++) {
        $container.append($row.clone());
    }

    squareHover("yellow", "black");

    $("#clear").click(function() {
        $(".square").css("background-color", "#FFFFFF");
    });

    $("#resize").click(function() {
        rows = prompt("Please enter grid size", "16");
        columns = rows;
        $("#container").remove();
        createGrid(rows, columns, width, height);
    });

    $("#random").click(function() {
        if (isBlack) {
            $(".square").hover(
                function() {$(this).css("background-color", "yellow");},
                function() {$(this).css("background-color", setRandomColor(this));}
            );
            isBlack = false;
        } else {
            squareHover("yellow", "black");
            isBlack = true;
        }
    });
}

function squareHover(colorIn, colorOut) {
    $(".square").hover(
        function() {$(this).css("background-color", colorIn);},
        function() {$(this).css("background-color", colorOut);}
    );
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(element) {
  $(element).css("background-color", getRandomColor());
}
