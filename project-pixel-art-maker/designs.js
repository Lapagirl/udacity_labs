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
    $('.popup-overlay').css('display', 'block');
    resetErrors();
}

//show popup function
function showPopup() {
    var popup = $('#popupCanvasProp');
    var popupContent = $('.popup-content');
    var closePopupButton = $('#closePopup');
    var overlay = $('.popup-overlay');
    initPopup ();
    popup.addClass('popup-animation');
    popupContent.css('display', 'block');
    popupContent.addClass('show-content-animation');
    closePopupButton.css('display', 'block');
    closePopupButton.addClass('show-content-animation');
    overlay.css('display', 'block');
}

//hide popup function
function hidePopup() {
    var popup = $('#popupCanvasProp');
    var popupContent = $('.popup-content');
    var closePopupButton = $('#closePopup');
    var overlay = $('.popup-overlay');
    popup.removeClass('popup-animation');
    popupContent.css('display', 'none');
    closePopupButton.css('display', 'none');
    overlay.css('display', 'none');
}

//pulse icon function
function pulseIcon () {
    var gridIcon = $('.grid');
    if(!($('#pixel_canvas').parent().find('td').length > 0)) {
        gridIcon.addClass('pulse-animation border-error');
    } else {
        gridIcon.removeClass('pulse-animation border-error');
    }
}

//show popup after page was loaded
$(document).ready(function() {
    showPopup();
});

//popup close button
$('#closePopup').click(function () {
    hidePopup();
    pulseIcon();
});

//listener on popup-overlay
$('.popup-overlay').click(function () {
    hidePopup();
    pulseIcon();
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
    var gridIcon = $('.grid');
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
        gridIcon.removeClass('pulse-animation');
   /*     gridIcon.css('border-color', 'transparent');*/
        gridIcon.addClass('border-transparent');
    }
}
);

//painting function
function painting() {
    $('#pixel_canvas').click('td', function(event){
        var color = $('#colorPicker').val();
        var targetCell = $(event.target);
        targetCell.css('background-color', color);
    });
}

//erasing function
function erasing() {
    $('#pixel_canvas').click('td', function(event){
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


$('#colorPicker').change(function () {
    $('.color-icon').css('background-color', $(this).val());

});

