function myFunction() {
    let y = document.querySelector('.cloud .infrastructure .inputsection')
    var x = document.querySelector(".companyproducts .productfeatures");
    if (x.style.display === "none", y.style.display === 'block') {
        x.style.display = "block";
        y.style.display = "none"
    } else {
        x.style.display = "none";
        y.style.display = "flex"
    }
}

function showsignupbtns() {

    var x = document.querySelector(".companyproducts .signinupbtns");
    if (x.style.display === "none") {
        x.style.display = "flex";

    } else {
        x.style.display = "none";

    }
}