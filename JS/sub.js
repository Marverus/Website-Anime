function validateForm() {
    let fat = false;

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let country = document.getElementById('country').value;
    let agree = document.getElementById('agree');

    if (!name || !email || !phone){
        alert("All fields must be filled")
    } else if(country == '0'){
        alert("Choose the country")
    } else if(!agree.checked){
        alert("The agreements of terms not accepted")
    } else if (!checkName(name)){
        alert("Name must be between 5 to 30 characters")
    } else if (!checkEmail(email)){
        alert("Email must be filled with @gmail.com")
    } else if (!checkPhone(phone)){
        alert("Must input the number")
    }
}

function checkName(name) {
    if (name.length < 5 || name.length > 30) {
        return false;
    }
    return true;
}

function checkEmail(email) {
    if (email.endWith('@gmail.com')) {
        return false;
    }
    return true;
}

function checkPhone(phone) {
    if (phone.value < 0 || phone.value > 99) {
        return false;
    }
    return true;
}
