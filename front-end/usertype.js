//usertype.js


alert("Welcome to Internship Portal");

const formInfo = document.getElementById("form");

let today=new Date();
let dayOfWeek = today.getDay();
if(dayOfWeek === 0 || dayOfWeek === 6){
    showMessage("There will be a delay in responding to your queries since it's a weekend. Thank you for your patience")
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "<p>";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit",function(event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
    showMessage("Sending your msg...Thank you:" + contact.fullName);
});

const button = document.getElementById('Review');

button.addEventListener('click', function() {
    const company = document.getElementById("review")
    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
})
