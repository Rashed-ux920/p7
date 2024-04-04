const email = document.getElementById('email');
const form = document.getElementById('love');
const errorElement = document.getElementById('error');
const reemail = document.getElementById('text');
var newwindow = "success.html";




form.addEventListener('submit', (e) => {
    let masseges = [];
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



    if (email.value == null || email.value === '') {
        errorElement.style.marginLeft = '28em';
        errorElement.style.display = 'block';
        errorElement.style.color = 'hsl(4, 100%, 67%)';
        email.style.border = '1px solid hsl(4, 100%, 67%)';
        masseges.push('email is requaired');
        email.style.backgroundColor = 'hsl(4, 10%, 80%)';
    }
    if(!email.value.match(pattern) ){
        masseges.push("invalid email");
        errorElement.style.marginLeft = '28em';
        errorElement.style.display = 'block';
        errorElement.style.color = 'hsl(4, 100%, 67%)';
        email.style.border = '1px solid hsl(4, 100%, 67%)';
        email.style.backgroundColor = 'hsl(4, 20%, 80%)';
    }
    if (email.value.match(pattern)) {
        window.open(newwindow);
        e.defaultPrevented();
    }

    if ( masseges.length == 2) {
        masseges.pop();
    }
    if (masseges.length > 0) {
        e.preventDefault();
        errorElement. innerHTML = masseges.join(', ');
    }
    
})
 


