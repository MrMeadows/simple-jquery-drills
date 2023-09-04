$(document).ready(function () {
    let form = '<form></form>';
    let inputText = '<input type="text" name="inputText">';
    let inputSubmit = '<input type="submit" id="btnSubmit" value="Submit">';
    let inputLabel = '<label for="inputText">Enter Value</label>';
    let size = String(Math.floor(Math.random * 10)) + 'px';
    let list = '<ul></ul>';

    $('body').append(form);
    $('form').append(inputLabel, inputText, inputSubmit);
    $('body').append('<div></div>');
    $('body').append(list);

    function randomBgColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    function submitText() {

        /*

        let divText = '<h2>' + ($('input:text').val()) + '</h2>';
        $('div').append(divText);
        $('h2').on('mouseenter', function () {
        
        $(this).css('background-color', randomBgColor);
        $(this).css({
            'border-width': size,
            'border-color': 'black',
            'border-style': 'solid'
        });
        $(this).css('border-radius', '10px');
        });

        */

        let listItem = '<li>' + ($('input:text').val()) + '</li>';

        $('ul').append(listItem);
        $('li').on('click', function () {
            $(this).css('background-color', randomBgColor);
        });

        $('li').on('dblclick', function() {
            $(this).remove();
        });

        return false;
    };

    $('#btnSubmit').attr('disabled', true);

    $('input:text').on('keydown', function () {
        $('#btnSubmit').attr('disabled', false);
    });

    $('#btnSubmit').on('click', submitText);
});