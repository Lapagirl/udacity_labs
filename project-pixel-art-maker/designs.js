//reset errors function
function resetErrors() {
    var heightField = $('#input_height');
    var widthField = $('#input_width');
    var widthHint = $('label[for="input_width"] .hint');
    var heightHint = $('label[for="input_height"] .hint');
    widthHint.css('color', 'gray');
    heightHint.css('color', 'gray');
    heightField.css('border-color', 'rgba(43, 70, 117, 0.4)');
    widthField.css('border-color', 'rgba(43, 70, 117, 0.4)');
}

//init popup function
function initPopup () {
    var heightField = $('#input_height');
    var widthField = $('#input_width');
    heightField.val(20);
    widthField.val(20);
    resetErrors();
}

//show popup function
function showPopup() {
    $('#popupCanvasProp').css('display', 'block');
    $('.popup-overlay').css('display', 'block');
    initPopup ();
}

//hide popup function
function hidePopup() {
    $('#popupCanvasProp').css('display', 'none');
    $('.popup-overlay').css('display', 'none');
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
$('#applyButton').click(function(event){
    var heightField = $('#input_height');
    var widthField = $('#input_width');
    var gridHeight = heightField.val();
    var gridWidth = widthField.val();
    var widthHint = $('label[for="input_width"] .hint');
    var heightHint = $('label[for="input_height"] .hint');
    var isCorrect = true;

    event.preventDefault();
    resetErrors();

    if (gridHeight <= 0 || gridHeight >30) {
        $(heightField).css('border-color', 'red');
        heightHint.css('color', 'red');
        isCorrect = false;
    }
    if(gridWidth <= 0 || gridWidth > 30) {
        $(widthField).css('border-color', 'red');
        widthHint.css('color', 'red');
        isCorrect = false;
    }
    if(isCorrect) {
        hidePopup();
        $('#canvasHeading').text("Design canvas");
        $('#pixel_canvas').children().remove();
        makeGrid();
        $('.control').removeClass('selected');
        $('.pencil').addClass('selected');
        painting();
    }
}
);

//painting function
function painting() {
    $('#pixel_canvas').on('click', 'td', function(event){
        var color = $('#colorPicker').val();
        var targetCell = $(event.target);
        targetCell.css('background-color', color);
    });
}

//erasing function
function erasing() {
    $('#pixel_canvas').on('click', 'td', function(event){
            var color = $('#colorPicker').val();
            var targetCell = $(event.target);
            targetCell.css('background-color', "#fff");
        }
    );
}

//choose control
$('.control').click(function () {
    $('.control').removeClass('selected');
    $(this).addClass('selected');

    if($('.eraser').hasClass('selected')) {
        erasing();
    }

    if($('.pencil').hasClass('selected')) {
        painting();
    }
});




