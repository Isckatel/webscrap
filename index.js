const url = 'https://moblegends.ru/boets/hilda';
const rp = require('request-promise');
const $ = require('cheerio');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

rp(url)
  .then(function(html){
    const dom = new JSDOM(html);
    console.log(dom.window.document.querySelectorAll("h2.elementor-heading-title.elementor-size-default").length);
  })
  .catch(function(err){
    console.log(err);
  });



// const rp = require('request-promise');
// const cheerio = require('cheerio');
// const url = 'https://moblegends.ru/boets/hilda';
// const fs = require('fs');
//
// rp(url)
//   .then(function(html){
//     //Получилось!
//     //console.log(html);
//   //  let test = cheerio('h2', html);
//     console.log(cheerio('h2', html).length);
//     if (test != "") {
//       fs.writeFile('test.txt', test, (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//       })
//     }
//   //  console.log(cheerio('.item', html).length);
//   //  console.log(cheerio('.item', html));
//   })
//   .catch(function(err){
//     console.log(err)//ошибка
//   });
