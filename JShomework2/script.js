const form = document.getElementById("myForm");

/*Получаем все элементы формы*/
const formElements = form.elements;

/*Вывод значений в консоль в реальном времени*/
for (let element of formElements) {
  element.addEventListener("input", function () {
    console.log(`${element.name}:`, element.value);
  });

  element.addEventListener("change", function () {
    console.log(`${element.name}:`, element.value);
  });
}

/*Отправка формы*/
form.addEventListener("submit", function (event) {
  event.preventDefault(); /*отменяем перезагрузку страницы*/

  const formData = {};

  for (let element of formElements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }

  console.log("Вся форма объектом:", formData);
});
