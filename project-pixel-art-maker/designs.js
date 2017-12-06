//create grid function
function makeGrid() {
    var gridHeight = $('#input_height').val();
    var gridWidth = $('#input_width').val();
    var canvas = $('#pixel_canvas');

    //create rows
    for (var i=0; i < gridHeight; i++) {
        $(canvas).append('<tr></tr>');
    }

    //create columns
    for (var j=0; j < gridWidth; j++) {
        $(canvas).children().append('<td></td>');
    }
}


//listener on submit button
$('input[type="submit"]').click(function(event){
    event.preventDefault();
    $('#pixel_canvas').children().remove();
    makeGrid();
}
);


//painting
$('#pixel_canvas').click('td', function(event){
    var color = $('#colorPicker').val();
    var targetCell = $(event.target);
    targetCell.css('background-color', color);
}
);



