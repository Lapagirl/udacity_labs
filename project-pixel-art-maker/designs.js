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

//close popup on apply button
$('#applyButton').click(function () {
    hidePopup();
    $('#canvasHeading').text("Design canvas");
});

//show popup on greed tool
$('.greed').click(function () {
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




