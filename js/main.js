var extraction = document.getElementById("extraction"); 
var playbtn = document.getElementById("bordbegin");
var stopbtn = document.getElementById("bordstop");
var plafondlamp = document.getElementById('plafondlamp');
var plafondlamp1 = document.getElementById('plafondlamp1');
var plafondlamp2 = document.getElementById('plafondlamp2');
var plafondlamp3 = document.getElementById('plafondlamp3');


document.getElementById('bordbegin').addEventListener('click', function() {
    console.log('Film gestart');
    document.getElementById('extraction').play();
    plafondlamp.components.material.material.opacity = 1;
    plafondlamp1.components.material.material.opacity = 1;
    plafondlamp2.components.material.material.opacity = 1;
    plafondlamp3.components.material.material.opacity = 1;
});


document.getElementById('bordstop').addEventListener('click', function() {
    console.log('Film gepauzeerd');
    document.getElementById('extraction').pause();
    plafondlamp.components.material.material.opacity = 0.1;
    plafondlamp1.components.material.material.opacity = 0.1;
    plafondlamp2.components.material.material.opacity = 0.1;
    plafondlamp3.components.material.material.opacity = 0.1;
})