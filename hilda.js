console.log("Скрипты подключены!");

let titleSkills = document.querySelectorAll(".elementor-tab-title.elementor-tab-desktop-title");
titleSkills = Array.from(titleSkills);
//console.log(titleSkills);

let skills = document.querySelectorAll(".elementor-tab-content.elementor-clearfix");
//Чистим HTML от лишних блоков и атрибутов
for (let input of skills) {

  let p = input.querySelectorAll('p');
  p.forEach((item, i) => {
    item.removeAttribute("class");
    item.removeAttribute("style");
  });

  let figure = input.querySelectorAll('figure');
  figure.forEach((item, i) => {
    item.removeAttribute("class");
  });

  n = input.querySelectorAll('div');
  if (n.length>0) input.querySelector('div').remove();

}

skills = Array.from(skills);
//console.log(skills);

let hilda = {};

hilda.titleSkills = [];
titleSkills.forEach((item, i) => {
  hilda.titleSkills[i] = item.innerText.replace(/[\n\r]+/g, ''); //Убираем символ возврата коретки
});

hilda.skills = [];
skills.forEach((item, i) => {
  hilda.skills[i] = item.innerHTML;
});
console.log(hilda);

let hero1 = JSON.stringify(hilda);
//console.log(hero1);
