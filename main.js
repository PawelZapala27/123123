const przycisk = document.querySelectorAll("button");
const display = document.getElementById("display");
let num = [0,0];
let Pom = 0
let znak = '';
display.value = "";
for (let i = 0; i < 19; i++) {
  przycisk[i].addEventListener("click", function () {
      switch (i) {
            case 0:
              display.value = "";
              num[0] = 0;
              num[1] = 0;
              znak = "";
              Pom = 0;
              break;
          case 1:
              num[Pom] -= num[Pom] * 2
              break;
          case 2:
              num[Pom] = num[Pom] / 100;
              display.value += przycisk[i].value;
              Pom=1;
              break;
          case 3:
              znak = "/";
              display.value += przycisk[i].value;
              Pom = 1;
              break;
          case 4:
              display.value += przycisk[i].value;
              num[Pom] += przycisk[i].value;
              break;
            case 5:
                display.value += przycisk[i].value;
                num[Pom] += przycisk[i].value;
              break;
            case 6:
                display.value += przycisk[i].value;
                num[Pom] += przycisk[i].value;
              break;
              case 7:
              znak = "*";
              display.value += przycisk[i].value;
                Pom = 1;
                break;
            case 8:
                display.value += przycisk[i].value;
                num[Pom] += przycisk[i].value;
                break;
              case 9:
                  display.value += przycisk[i].value;
                  num[Pom] += przycisk[i].value;
                break;
              case 10:
                  display.value += przycisk[i].value;
                  num[Pom] += przycisk[i].value;
              break;
              case 11:
              znak = "-";
              display.value += przycisk[i].value;
                Pom = 1;
                break;
            case 12:
                display.value += przycisk[i].value;
                num[Pom] += przycisk[i].value;
                break;
              case 13:
                  display.value += przycisk[i].value;
                  num[Pom] += przycisk[i].value;
                break;
              case 14:
                  display.value += przycisk[i].value;
                  num[Pom] += przycisk[i].value;
              break;
              case 15:
                znak = "+";
                display.value += przycisk[i].value;
                  Pom = 1;
                  break;
              case 16:
                  display.value += przycisk[i].value;
                  num[Pom] += przycisk[i].value;
                  break;
                case 17:
                    display.value += przycisk[i].value;
                    num[Pom] += przycisk[i].value;
                  break;
            case 18:
              switch (znak) {
                  case "/":
                      display.value = (num[0] * 1) / (num[1] * 1);
                      num[0] = (num[0] * 1) / (num[1] * 1);
                      break;
                    case "*":
                      display.value = (num[0] * 1) * (num[1] * 1);
                      num[0] = (num[0] * 1) * (num[1] * 1);
                      break;
                    case "+":
                      display.value = (num[0] * 1) + (num[1] * 1);
                      num[0] = (num[0] * 1) + (num[1] * 1);
                      break;
                    case "-":
                      display.value = (num[0] * 1) - (num[1] * 1);
                      num[0] = (num[0] * 1) - (num[1] * 1);
                      break;
              }
              num[1] = 0;
              znak = "";
              Pom = 0;
              console.log(num[0], num[1], znak);
              break;
          
      }
  })
};
