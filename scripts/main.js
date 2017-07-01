$(document).ready(function() {
    var rows = 16;
    var columns = 16;
    var $container = $('<div>', {id: "container"});
    var $row = $('<div>', {class: "row"});
    var $square = $('<div>', {class: "square"});
    $("body").append($container);

    for(var i=0; i<columns; i++) {
        $row.append($square.clone());
    }
    for(var j=0; j<rows; j++) {
        $container.append($row.clone());
    }
});
