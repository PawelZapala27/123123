const waga = document.getElementById("waga");
const wzrost = document.getElementById("wzrost");
const bttn = document.getElementById(`bttn`);
const wynik = document.getElementById("op");
const bmi = document.getElementById("bmi");

bttn.addEventListener("click", function () {
  const wagaVal = parseInt(waga.value);
  const wzrostVal = parseInt(wzrost.value) / 100;
  const bmiVal = wagaVal / (wzrostVal * wzrostVal);

  bmi.innerHTML = `Twoje BMI = ${bmiVal}`;

  if (bmiVal <= 18.5) {
    wynik.innerHTML = "Niedowaga";
  } else if (bmiVal <= 24.9) {
    wynik.innerHTML = `<span style="color: green;">Norma<span/>`;
  } else if (bmiVal <= 29.9) {
    wynik.innerHTML = "Nadwaga";
  } else if (bmiVal <= 34.9) {
    wynik.innerHTML = "Otyłość 1st.";
  } else if (bmiVal <= 39.9) {
    wynik.innerHTML = "Otyłość 2st.";
  } else if (bmiVal >= 40) {
    wynik.innerHTML = "Otyłość 3st.";
  } else {
    wynik.innerHTML = "Cos sie zepsulo";
  }
});
