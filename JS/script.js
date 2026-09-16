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
    console.log(year)


    const ageInMonths = (dataAtual.getMonth() + 1) - (month)
    const ageInDays = (dataAtual.getDate()) - (day)

    /* ======LÓGICA DO ANO====== */
    let yearError = document.getElementById("yearTitle");
    let errorMessageYear = document.querySelector(".errorMessage[for='year_input']");
    if(Number.isNaN(year)){
        yearError.classList.add("error");
        yearInput.classList.add("input_age_informationError");
        errorMessageYear.textContent = "This field is required";
        console.log("ano vazio");
    } else if (year > 2026) {

        yearError.classList.add("error");
        yearInput.classList.add("input_age_informationError");
        errorMessageYear.textContent = "must be in the past";

    } else if (year < 1900) {

        yearError.classList.add("error");
        yearInput.classList.add("input_age_informationError");
        errorMessageYear.textContent = "Must be a valid year";

    } else if (ageInMonths < 0 || ageInDays < 0) {

        yearError.classList.remove("error");
        yearInput.classList.remove("input_age_informationError");
        errorMessageYear.textContent = "";

        ageYears.textContent = dataAtual.getFullYear() - year - 1;
    } else {
        yearError.classList.remove("error");
        yearInput.classList.remove("input_age_informationError");
        errorMessageYear.textContent = "";

        ageYears.textContent = dataAtual.getFullYear() - year;
    }

    /* ======LÓGICA DO MÊS====== */
    let monthError = document.getElementById("monthTitle");
    let errorMessageMonth = document.querySelector(".errorMessage[for='month_input']");
 
    if( Number.isNaN(month)){
        monthError.classList.add("error");
        monthInput.classList.add("input_age_informationError");
        errorMessageMonth.textContent = "This field is required";
    } else if (month > 12 || month < 1) {

        monthError.classList.add("error");
        monthInput.classList.add("input_age_informationError");
        errorMessageMonth.textContent = "Must be a valid month";
    } else {
        if (ageInMonths < 0) {
            monthError.classList.remove("error");
            monthInput.classList.remove("input_age_informationError");
            errorMessageMonth.textContent = "";
            ageMonths.textContent = ageInMonths + 12;
        } else {
            monthError.classList.remove("error");
            monthInput.classList.remove("input_age_informationError");
            errorMessageMonth.textContent = "";

            ageMonths.textContent = ageInMonths;
        }
    }

    /* ======LÓGICA DO DIA====== */
    let dayError = document.getElementById("dayTitle");
    let errorMessageDay = document.querySelector(".errorMessage[for='day_input']");
    if( Number.isNaN(day)){
        dayError.classList.add("error");
        dayInput.classList.add("input_age_informationError");
        errorMessageDay.textContent = "This field is required";
    }
    else if(day.textContent == ""){
        dayError.classList.add("error");
        dayInput.classList.add("input_age_informationError");
        errorMessageDay.textContent = "This field is required";
    } else if (day > 31 || day < 1) {

        dayError.classList.add("error");
        dayInput.classList.add("input_age_informationError");
        errorMessageDay.textContent = "Must be a valid day";

    } else {


        console.log(ageInDays);
        if (ageInDays < 0) {
            dayError.classList.remove("error");
            dayInput.classList.remove("input_age_informationError");
            errorMessageDay.textContent = "";
            ageDays.textContent = ageInDays + 31;

        } else {
            dayError.classList.remove("error");
            dayInput.classList.remove("input_age_informationError");
            errorMessageDay.textContent = "";
            ageDays.textContent = ageInDays;
        }



    }
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculateAge();
});

// Testando antes de aplicar na lógica do formulário //
/* 
const idade = null;

const diaNilton = 30;
const mesNilton = 10;
const anoNilton = 2003;

const anoAtual = console.log(dataAtual.getFullYear());
console.log(dataAtual.getMonth() + 1);
console.log(dataAtual.getDate());
const idadeEmAno = dataAtual.getFullYear() - anoNilton;
const idadeEmMes = dataAtual.getMonth() - mesNilton;
const idadeEmDia = dataAtual.getDate() - diaNilton;

console.log("O Nilton tem " + idadeEmAno + " anos, " + idadeEmMes + " meses e " + idadeEmDia + " dias.");

*/
