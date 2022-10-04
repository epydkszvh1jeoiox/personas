function showContent(idName) {
    let thisPersona = document.getElementById(idName);

    let otherPersona = "";
    if (idName == "persona1") {
        otherPersona = document.getElementById("persona2");
    } else {
        otherPersona = document.getElementById("persona1");
    }

    thisPersona.style.display = "block";
    otherPersona.style.display = "none";
}