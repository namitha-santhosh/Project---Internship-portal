//Contact.js

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit",function(event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
    showMessage("Sending your msg...Thank you:" + contact.fullName);
});

class Contact {

    constructor(form){
        this.fullName = form.elements["fullName"].value;
        this.email = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["msg"].value;
    }
    
    fullName = "";
    email = "";
    subject = "";
    body = "";

    send() {
        console.info(this.formatMessage());
        document.getElementById("form").innerHTML = "We're not sending emails yet....next update";
    }

    formatMessage() {
        return `To: ${this.fullName}
                Email: ${this.email}
                Subject: ${this.subject}
                Body: ${this.body}`;
    }
};