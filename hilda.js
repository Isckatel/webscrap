console.log("Скрипты подключены!");

let titleSkills = document.querySelectorAll(".elementor-tab-title.elementor-tab-desktop-title");
titleSkills = Array.from(titleSkills);
//console.log(titleSkills);

let skills = document.querySelectorAll(".elementor-tab-content.elementor-clearfix");
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
