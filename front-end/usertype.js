//usertype.js


alert("Welcome to Internship Portal")

const formInfo = getElementById("formInfo")

let today=new Date();
let dayOfWeek = today.getDay(8/26/23);
if(dayOfWeek === 0 || dayOfWeek === 6){
    showMessage("There will be a delay in responding to your queries since it's a weekend. Thank you for your patience")
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "<p>";
}
