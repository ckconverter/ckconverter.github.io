$(document).ready(function() {
    
    //Generic
    $('#back').hide();
    $('#fromHeading').hide();
    $('#toHeading').hide();
    $('.home').on('click', function() {
        $('.home').hide();
        $('#back').show();
        $('#fromHeading').show();
    });
    $('#back').on('click', function() {
        $('.temperature').hide();
        $('.distance').hide();
        $('.home').show();
        $('#back').hide();
        $('#fromHeading').hide();
        $('#toHeading').hide();
    });
    $('.primary').on('click', function() {
        $('#fromHeading').hide();
        $('#toHeading').show();
    });
    
    //Button changes color when hovered over
    $('li').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    });
    $('li').mouseleave(function() {
        $(this).fadeTo('fast', 0.75);
    });
    
    //Temperature
    $('.temperature').hide();
    $('#toTemp').on('click', function() {
        $('.temperature1').show();
    });
    
    //Fahrenheit
    $('#F1').on('click', function() {
        $('.temperature1').hide();
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
	
	//Distance
	$('.distance').hide();
	$('#toDistance').on('click', function() {
		$('.distance1').show();
	});
	
	//Meters
	$('#M1').on('click', function() {
		$('.distance1').hide();
		$('.distance2').show();
		$('#M2').hide();
		$('#Cm2').on('click', function() {
            var n = prompt('Enter length in Meters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 100) + ' Centimeters');
            } else {
                alert('Error');
            }
        });
		$('#Km2').on('click', function() {
            var n = prompt('Enter length in Meters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 1000) + ' Kilometers');
            } else {
                alert('Error');
            }
        });
		$('#Ft2').on('click', function() {
            var n = prompt('Enter length in Meters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / .3048) + ' Feet');
            } else {
                alert('Error');
            }
        });
	});
});
