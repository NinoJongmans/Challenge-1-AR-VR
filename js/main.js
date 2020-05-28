var extraction = document.getElementById("extraction"); 
var playbtn = document.getElementById("bordbegin");
var stopbtn = document.getElementById("bordstop");




document.getElementById('bordbegin').addEventListener('click', function() {
    console.log('Film gestart');
    document.getElementById('extraction').play();
});


document.getElementById('bordstop').addEventListener('click', function() {
    console.log('Film gepauzeerd');
    document.getElementById('extraction').pause();
})