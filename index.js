let numbers = prompt("Введіть довжини катетів трикутника через пробіл:");
let lengths = numbers.split(" ");

if (lengths.length !== 2) {
  alert("Будь ласка, введіть дві довжини катетів через пробіл.");
} else {
  let a = parseFloat(lengths[0]);
  let b = parseFloat(lengths[1]);

  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    alert("Ви ввели неправильні значення. Будь ласка, введіть додатні числа.");
  } else {
    let hypotenuse1 = Math.sqrt(a ** 2 + b ** 2);
    let hypotenuse2 = (a ** 2 + b ** 2) ** 0.5;

    alert("Довжина гіпотенузи (перший спосіб):" + hypotenuse1);
    alert("Довжина гіпотенузи (другий спосіб):" + hypotenuse2);
  }
}
