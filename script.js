document.getElementById("contact-btn").addEventListener('click', function() {
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'}); 
});
document.getElementById("home-btn").addEventListener('click', function() {
    document.getElementById("home").scrollIntoView({behavior: 'smooth'}); 
});
document.getElementById("projects-btn").addEventListener('click', function() {
    document.getElementById("projects").scrollIntoView({behavior: 'smooth'}); 
});
document.getElementById("about-btn").addEventListener('click', function() {
    document.getElementById("about").scrollIntoView({behavior: 'smooth'}); 
});



function submitMe(){
    alert("Your form has been submitted");
    console.log("Form was submitted");
}