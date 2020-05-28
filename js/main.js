var extraction = document.getElementById("extraction"); 
var playbtn = document.getElementById("bordbegin");
var stopbtn = document.getElementById("bordstop");




document.getElementById('bordbegin').addEventListener('click', function() {
    console.log('Test of het werkt.');
    document.getElementById('extraction').play();
});


document.getElementById('bordstop').addEventListener('click', function() {
    console.log('Pauzeer de film.');
    document.getElementById('extraction').pause();
})