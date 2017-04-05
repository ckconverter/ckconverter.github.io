$(document).ready(function() {
    
    //Home
    $('.home').on('click', function() {
        $('.home').hide();
    });
    
    //Button changes color when hovered over
    $('li').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    });
    $('li').mouseleave(function() {
        $(this).fadeTo('fast', 0.75);
    });
    
    //Temperature
    $('.temperature1').hide();
    $('.temperature2').hide();
    $('#toTemp').on('click', function() {
        $('.temperature1').show();
    });
    
    //Fahrenheit
    $('#F1').on('click', function() {
        $('.temperature1').hide();
        alert('What would you like to convert to?');
        $('.temperature2').show();
        $('#F2').hide();
        $('#C2').on('click', function() {
            var n = prompt('Enter degrees in Fahrenheit');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < -459.67) {
                alert('The number you want to convert is below absolute zero, and therefore does not exist based on our current understanding of physics');
            } else if (n >= -459.67) {
                alert(String(Math.round((n - 32) / 1.8)) + ' degrees Celsius');
            } else {
                alert('Error');
            }
        });
        $('#K2').on('click', function() {
            var n = prompt('Enter degrees in Fahrenheit');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < -459.67) {
                alert('The number you want to convert is below absolute zero, and therefore does not exist based on our current understanding of physics');
            } else if (n >= -459.67) {
                alert(String(Math.round((n - 32) / 1.8 + 273.15)) + ' degrees Kelvin');
            } else {
                alert('Error');
            }
        });
    });
    
    //Celsius
    $('#C1').on('click', function() {
        $('.temperature1').hide();
        alert('What would you like to convert to?');
        $('.temperature2').show();
        $('#C2').hide();
        $('#F2').on('click', function() {
            var n = prompt('Enter degrees in Celsius');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < -273.15) {
                alert('The number you want to convert is below absolute zero, and therefore does not exist based on our current understanding of physics');
            } else if (n >= -273.15) {
                alert(String(Math.round(n * 1.8 + 32)) + ' degrees Fahrenheit');
            } else {
                alert('Error');
            }
        });
        $('#K2').on('click', function() {
            var n = prompt('Enter degrees in Celsius');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < -273.15) {
                alert('The number you want to convert is below absolute zero, and therefore does not exist based on our current understanding of physics');
            } else if (n >= -273.15) {
                alert(String(Math.round(n + 273.15)) + ' degrees Kelvin');
            } else {
                alert('Error');
            }
        });
    });
    
    //Kelvin
    $('#K1').on('click', function() {
        $('.temperature1').hide();
        alert('What would you like to convert to?');
        $('.temperature2').show();
        $('#K2').hide();
        $('#F2').on('click', function() {
            var n = prompt('Enter degrees in Kelvin');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is below absolute zero, and therefore does not exist based on our current understanding of physics');
            } else if (n >= 0) {
                alert(String(Math.round((n - 273.15) * 1.8 + 32)) + ' degrees Fahrenheit');
            } else {
                alert('Error');
            }
        });
        $('#C2').on('click', function() {
            var n = prompt('Enter degrees in Kelvin');
        if (isNaN(n)) {
            alert('Please use numbers');
        } else if (n < 0) {
            alert('The number you want to convert is below absolute zero, and therefore does not exist based on our current understanding of physics');
        } else if (n >= 0) {
            alert(String(Math.round(n - 273.15)) + ' degrees Celsius');
        } else {
            alert('Error');
        }
        });
    });
});
