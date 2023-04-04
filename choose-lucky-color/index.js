let color = document.getElementById("colorSelect");
let body = document.body;

function applyColor() {
    const choosedColor = color.value;
    switch (choosedColor) {
        case "livingCoral":
            body.style.backgroundColor = "#FF6F61";
            break;
        case "greenery":
            body.style.backgroundColor = "#88B04B";
            break;
        case "roseQuartz":
            body.style.backgroundColor = "#F7CAC9";
            break;
        case "serenity":
            body.style.backgroundColor = "#92A8D1";
            break;
        case "marsala":
            body.style.backgroundColor = "#955251";
            break;
        case "emerald":
            body.style.backgroundColor = "#009B77";
            break;
        case "tango":
            body.style.backgroundColor = "#DD4124";
            break;
        case "honeysucle":
            body.style.backgroundColor = "#D65076";
            break;
        case "mimosa":
            body.style.backgroundColor = "#EFC050";
            break;
        case "tigerlily":
            body.style.backgroundColor = "#E15D44";
            break;

        default:
            body.style.backgroundColor = "white";
            break;
    }
}