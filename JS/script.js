const form = document.querySelector("form");

let dayInput = document.querySelector("input[name='day_input']");
let monthInput = document.querySelector("input[name='month_input']");
let yearInput = document.querySelector("input[name='year_input']");

let ageYears = document.querySelector("#year");
let ageMonths = document.querySelector("#month");
let ageDays = document.querySelector("#day");

const dataAtual = new Date();


function calculateAge() {

    let year = parseInt(yearInput.value);
    let month = parseInt(monthInput.value);
    let day = parseInt(dayInput.value);

    let yearError = document.getElementById("yearTitle");
    let errorMessageYear = document.querySelector(".errorMessage[for='year_input']");

    if (year > 2026) {

        yearError.classList.add("error");
        yearInput.classList.add("input_age_informationError");
        errorMessageYear.textContent = "must be in the past";

    } else if (year < 1900 || Number.isNaN(year)) {

        yearError.classList.add("error");
        yearInput.classList.add("input_age_informationError");
        errorMessageYear.textContent = "Must be a valid year";

    } else {

        yearError.classList.remove("error");
        yearInput.classList.remove("input_age_informationError");
        errorMessageYear.textContent = "";

        ageYears.textContent = dataAtual.getFullYear() - year;
    }

    let monthError = document.getElementById("monthTitle");
    let errorMessageMonth = document.querySelector(".errorMessage[for='month_input']");

    if (month > 12 || month < 1 || Number.isNaN(month)) {

        monthError.classList.add("error");
        monthInput.classList.add("input_age_informationError");
        errorMessageMonth.textContent = "Must be a valid month";

    } else {

        monthError.classList.remove("error");
        monthInput.classList.remove("input_age_informationError");
        errorMessageMonth.textContent = "";

        ageMonths.textContent = dataAtual.getMonth() - month;
    }

    let dayError = document.getElementById("dayTitle");
    let errorMessageDay = document.querySelector(".errorMessage[for='day_input']");

    if (day > 31 || day < 1 || Number.isNaN(day)) {

        dayError.classList.add("error");
        dayInput.classList.add("input_age_informationError");
        errorMessageDay.textContent = "Must be a valid day";

    } else {

        dayError.classList.remove("error");
        dayInput.classList.remove("input_age_informationError");
        errorMessageDay.textContent = "";

        ageDays.textContent = dataAtual.getDate() - day;
    }
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculateAge();
});