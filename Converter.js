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
    $('button').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    });
    $('button').mouseleave(function() {
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
	$('#In2').on('click', function() {
            var n = prompt('Enter length in Meters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / .3048) * 12) + ' Inches');
            } else {
                alert('Error');
            }
        });
	$('#Yd2').on('click', function() {
            var n = prompt('Enter length in Meters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / .3048) / 3) + ' Yards');
            } else {
                alert('Error');
            }
        });
	$('#Mi2').on('click', function() {
            var n = prompt('Enter length in Meters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / .3048) / 5280) + ' Miles');
            } else {
                alert('Error');
            }
        });
    });
	
    //Centimeters
    $('#Cm1').on('click', function() {
        $('.distance1').hide();
        $('.distance2').show();
        $('#Cm2').hide();
        $('#M2').on('click', function() {
            var n = prompt('Enter length in Centimeters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 100) + ' Centimeters');
            } else {
                alert('Error');
            }
        });
        $('#Km2').on('click', function() {
            var n = prompt('Enter length in Centimeters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 100000) + ' Kilometers');
            } else {
                alert('Error');
            }
        });
        $('#Ft2').on('click', function() {
            var n = prompt('Enter length in Centimeters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / .3048) / 100) + ' Feet');
            } else {
                alert('Error');
            }
        });
	$('#In2').on('click', function() {
            var n = prompt('Enter length in Centimeters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(((n / .3048) * 12) / 100) + ' Inches');
            } else {
                alert('Error');
            }
        });
	$('#Yd2').on('click', function() {
            var n = prompt('Enter length in Centimeters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(((n / .3048) / 3) / 100) + ' Yards');
            } else {
                alert('Error');
            }
        });
	$('#Mi2').on('click', function() {
            var n = prompt('Enter length in Centimeters');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(((n / .3048) / 5280) / 100) + ' Miles');
            } else {
                alert('Error');
            }
        });
    });
    
    //Kilometers
    $('#Km1').on('click', function() {
        $('.distance1').hide();
        $('.distance2').show();
        $('#Km2').hide();
        $('#Cm2').on('click', function() {
            var n = prompt('Enter length in Kilometers');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 100000) + ' Centimeters');
            } else {
                alert('Error');
            }
        });
        $('#M2').on('click', function() {
            var n = prompt('Enter length in Kilometers');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 1000) + ' Meters');
            } else {
                alert('Error');
            }
        });
        $('#Ft2').on('click', function() {
            var n = prompt('Enter length in Kilometers');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / .3048) * 1000) + ' Feet');
            } else {
                alert('Error');
            }
        });
	$('#In2').on('click', function() {
            var n = prompt('Enter length in Kilometers');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / .3048) * 12000) + ' Inches');
            } else {
                alert('Error');
            }
        });
	$('#Yd2').on('click', function() {
            var n = prompt('Enter length in Kilometers');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(((n / .3048) / 3) * 1000) + ' Yards');
            } else {
                alert('Error');
            }
        });
	$('#Mi2').on('click', function() {
            var n = prompt('Enter length in Kilometers');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(((n / .3048) / 5280) * 1000) + ' Miles');
            } else {
                alert('Error');
            }
        });
    });
    
    //Feet
    $('#Ft1').on('click', function() {
        $('.distance1').hide();
        $('.distance2').show();
        $('#Ft2').hide();
        $('#Cm2').on('click', function() {
            var n = prompt('Enter length in Feet');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 30.48) + ' Centimeters');
            } else {
                alert('Error');
            }
        });
        $('#Km2').on('click', function() {
            var n = prompt('Enter length in Feet');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * .0003048) + ' Kilometers');
            } else {
                alert('Error');
            }
        });
        $('#M2').on('click', function() {
            var n = prompt('Enter length in Feet');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * .3048) + ' Meters');
            } else {
                alert('Error');
            }
        });
	$('#In2').on('click', function() {
            var n = prompt('Enter length in Feet');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 12) + ' Inches');
            } else {
                alert('Error');
            }
        });
	$('#Yd2').on('click', function() {
            var n = prompt('Enter length in Feet');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 3) + ' Yards');
            } else {
                alert('Error');
            }
        });
	$('#Mi2').on('click', function() {
            var n = prompt('Enter length in Feet');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 5280) + ' Miles');
            } else {
                alert('Error');
            }
        });
    });
    
    //Inches
    $('#In1').on('click', function() {
        $('.distance1').hide();
        $('.distance2').show();
        $('#In2').hide();
        $('#Cm2').on('click', function() {
            var n = prompt('Enter length in Inches');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n * 30.48) / 12) + ' Centimeters');
            } else {
                alert('Error');
            }
        });
        $('#Km2').on('click', function() {
            var n = prompt('Enter length in Inches');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n * .0003048) / 12) + ' Kilometers');
            } else {
                alert('Error');
            }
        });
        $('#M2').on('click', function() {
            var n = prompt('Enter length in Inches');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n * .3048) / 12) + ' Meters');
            } else {
                alert('Error');
            }
        });
	$('#Ft2').on('click', function() {
            var n = prompt('Enter length in Inches');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 12) + ' Feet');
            } else {
                alert('Error');
            }
        });
	$('#Yd2').on('click', function() {
            var n = prompt('Enter length in Inches');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 36) + ' Yards');
            } else {
                alert('Error');
            }
        });
	$('#Mi2').on('click', function() {
            var n = prompt('Enter length in Inches');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / 5280) / 12) + ' Miles');
            } else {
                alert('Error');
            }
        });
    });
    
    //Feet
    $('#Yd1').on('click', function() {
        $('.distance1').hide();
        $('.distance2').show();
        $('#Yd2').hide();
        $('#Cm2').on('click', function() {
            var n = prompt('Enter length in Yards');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 30.48 * 3) + ' Centimeters');
            } else {
                alert('Error');
            }
        });
        $('#Km2').on('click', function() {
            var n = prompt('Enter length in Yards');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * .0003048 * 3) + ' Kilometers');
            } else {
                alert('Error');
            }
        });
        $('#M2').on('click', function() {
            var n = prompt('Enter length in Yards');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * .3048 * 3) + ' Meters');
            } else {
                alert('Error');
            }
        });
	$('#In2').on('click', function() {
            var n = prompt('Enter length in Yards');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 36) + ' Inches');
            } else {
                alert('Error');
            }
        });
	$('#Ft2').on('click', function() {
            var n = prompt('Enter length in Yards');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 3) + ' Feet');
            } else {
                alert('Error');
            }
        });
	$('#Mi2').on('click', function() {
            var n = prompt('Enter length in Yards');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / 5280) * 3) + ' Miles');
            } else {
                alert('Error');
            }
        });
    });
    
    //Miles
    $('#Mi1').on('click', function() {
        $('.distance1').hide();
        $('.distance2').show();
        $('#Mi2').hide();
        $('#Cm2').on('click', function() {
            var n = prompt('Enter length in Miles');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 30.48 * 5280) + ' Centimeters');
            } else {
                alert('Error');
            }
        });
        $('#Km2').on('click', function() {
            var n = prompt('Enter length in Miles');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * .0003048 * 5280) + ' Kilometers');
            } else {
                alert('Error');
            }
        });
        $('#M2').on('click', function() {
            var n = prompt('Enter length in Miles');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * .3048 * 5280) + ' Meters');
            } else {
                alert('Error');
            }
        });
	$('#In2').on('click', function() {
            var n = prompt('Enter length in Miles');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 12 * 5280) + ' Inches');
            } else {
                alert('Error');
            }
        });
	$('#Yd2').on('click', function() {
            var n = prompt('Enter length in Miles');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String((n / 3) * 5280) + ' Yards');
            } else {
                alert('Error');
            }
        });
	$('#Ft2').on('click', function() {
            var n = prompt('Enter length in Miles');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative length, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 5280) + ' Feet');
            } else {
                alert('Error');
            }
        });
    });
    
    //Pressure
    $('.pressure').hide();
    $('#toPressure').on('click', function() {
        $('.pressure1').show();
    });
    
    //Atmospheres
    $('#atm1').on('click', function() {
        $('.pressure1').hide();
        $('.pressure2').show();
        $('#atm2').hide();
        $('#Pa2').on('click', function() {
            var n = prompt('Enter pressure in atmoshperes');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 101325) + ' Pascals');
            } else {
                alert('Error');
            }
        });
        $('#kPa2').on('click', function() {
            var n = prompt('Enter pressure in atmoshperes');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 101.325) + ' Kilopascals');
            } else {
                alert('Error');
            }
        });
	$('#torr2').on('click', function() {
            var n = prompt('Enter pressure in atmoshperes');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 760) + ' Torr/mmHg');
            } else {
                alert('Error');
            }
        });
	$('#PSI2').on('click', function() {
            var n = prompt('Enter pressure in atmoshperes');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 14.7) + ' PSI');
            } else {
                alert('Error');
            }
        });
    });
	
    //Pascals
    $('#Pa1').on('click', function() {
        $('.pressure1').hide();
        $('.pressure2').show();
        $('#Pa2').hide();
        $('#atm2').on('click', function() {
            var n = prompt('Enter pressure in Pascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 101325) + ' atmospheres');
            } else {
                alert('Error');
            }
        });
        $('#kPa2').on('click', function() {
            var n = prompt('Enter pressure in Pascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 1000) + ' Kilopascals');
            } else {
                alert('Error');
            }
        });
	$('#torr2').on('click', function() {
            var n = prompt('Enter pressure in Pascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 760 / 101325) + ' Torr/mmHg');
            } else {
                alert('Error');
            }
        });
	$('#PSI2').on('click', function() {
            var n = prompt('Enter pressure in Pascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 14.7 / 101325) + ' PSI');
            } else {
                alert('Error');
            }
        });
    });
	
    //Kilopascals
    $('#kPa1').on('click', function() {
        $('.pressure1').hide();
        $('.pressure2').show();
        $('#kPa2').hide();
        $('#Pa2').on('click', function() {
            var n = prompt('Enter pressure in Kilopascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 1000) + ' Pascals');
            } else {
                alert('Error');
            }
        });
        $('#atm2').on('click', function() {
            var n = prompt('Enter pressure in Kilopascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 101.325) + ' Atmospheres');
            } else {
                alert('Error');
            }
        });
	$('#torr2').on('click', function() {
            var n = prompt('Enter pressure in Kilopascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 760 / 101.325) + ' Torr/mmHg');
            } else {
                alert('Error');
            }
        });
	$('#PSI2').on('click', function() {
            var n = prompt('Enter pressure in Kilopascals');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 14.7 / 101.325) + ' PSI');
            } else {
                alert('Error');
            }
        });
    });
	
    //Torr
    $('#torr1').on('click', function() {
        $('.pressure1').hide();
        $('.pressure2').show();
        $('#torr2').hide();
        $('#Pa2').on('click', function() {
            var n = prompt('Enter pressure in Torr/mmHg');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 101325 / 760) + ' Pascals');
            } else {
                alert('Error');
            }
        });
        $('#kPa2').on('click', function() {
            var n = prompt('Enter pressure in Torr/mmHg');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 101.325 / 760) + ' Kilopascals');
            } else {
                alert('Error');
            }
        });
	$('#atm2').on('click', function() {
            var n = prompt('Enter pressure in Torr/mmHg');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 760) + ' atmospheres');
            } else {
                alert('Error');
            }
        });
	$('#PSI2').on('click', function() {
            var n = prompt('Enter pressure in Torr/mmHg');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 14.7 / 760) + ' PSI');
            } else {
                alert('Error');
            }
        });
    });
	
   //PSI
    $('#PSI1').on('click', function() {
        $('.pressure1').hide();
        $('.pressure2').show();
        $('#PSI2').hide();
        $('#Pa2').on('click', function() {
            var n = prompt('Enter pressure in PSI');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 101325 / 14.7) + ' Pascals');
            } else {
                alert('Error');
            }
        });
        $('#kPa2').on('click', function() {
            var n = prompt('Enter pressure in PSI');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 101.325 / 14.7) + ' Kilopascals');
            } else {
                alert('Error');
            }
        });
	$('#torr2').on('click', function() {
            var n = prompt('Enter pressure in PSI');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n * 760 / 14.7) + ' Torr/mmHg');
            } else {
                alert('Error');
            }
        });
	$('#atm2').on('click', function() {
            var n = prompt('Enter pressure in PSI');
            if (isNaN(n)) {
                alert('Please use numbers');
            } else if (n < 0) {
                alert('The number you want to convert is a negative pressure, which isn\'t possible. Please try again.');
            } else if (n >= 0) {
                alert(String(n / 14.7) + ' atmospheres');
            } else {
                alert('Error');
            }
        });
    });
});
