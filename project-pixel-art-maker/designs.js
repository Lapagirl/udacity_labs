//show popup function
function showPopup() {
    $('#popupCanvasProp').css('display', 'block');
}

//hide popup function
function hidePopup() {
    $('#popupCanvasProp').css('display', 'none');
}

//show popup after page was loaded
$(document).ready(function() {
    showPopup();
});

//popup close button
$('#closePopup').click(function () {
    hidePopup();
});

//listener on greed tool
$('.grid').click(function () {
    showPopup();
});

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
    var heightField = $('#input_height');
    var widthField = $('#input_width');
    var gridHeight = heightField.val();
    var gridWidth = widthField.val();

    event.preventDefault();
    heightField.css('border-color', 'rgba(43, 70, 117, 0.4)');
    widthField.css('border-color', 'rgba(43, 70, 117, 0.4)');

    if (gridHeight > 0 && gridHeight <=100 && gridWidth > 0 && gridWidth <=100) {
        hidePopup();
        $('#canvasHeading').text("Design canvas");
        $('#pixel_canvas').children().remove();
        makeGrid();
    }
    if (gridHeight <= 0 || gridHeight > 100) {
        $(heightField).css('border-color', 'red');
    }
    if(gridWidth <= 0 || gridWidth > 100) {
        $(widthField).css('border-color', 'red');
    }
}
);


//painting
$('#pixel_canvas').click('td', function(event){
    var color = $('#colorPicker').val();
    var targetCell = $(event.target);
    targetCell.css('background-color', color);
}
);




