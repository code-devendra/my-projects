function calculate(a) {
    const cel_value = document.querySelector("#cel");
    const fah_value = document.querySelector("#fah");

    if (a === 'c') {
        const fah_temp = parseFloat(fah_value.value);
        cel_value.value = (((fah_temp - 32) * 5) / 9).toFixed(4);
    } else {
        const cel_temp = parseFloat(cel_value.value);
        fah_value.value = ((cel_temp * (9 / 5)) + 32).toFixed(4);
    }

}