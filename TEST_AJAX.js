// Cack NOris Jokes

// ++++++++++++++++++++++++
// content:
// 10: defining main variable and structre
// 20: Main
// 30: Primery Functions
// 40: Suport Functions
// 50: Side functions
// 60: Validation Functions
// +++++++++++++++++++++

// **********
// Level 10: defining main variable and structre
// **********

// **********
// Level 20: Main
// **********
// create_kategory_div_list();
// **********
// Level 30: Primery Functions
// **********
create_kategory_div_list();

function create_kategory_div_list() {
  let arr_categories = get_categories_jokes();
  console.log("respond from main function:");
  console.log(arr_categories);
}
// **********
// Level 40: Suport Functions
// **********
async function get_categories_jokes() {
  let response = await fetch("https://api.chucknorris.io/jokes/categories");
  let data = await response.text();

  let data_parse = JSON.parse(data);
  console.log("respond from sub function:");
  console.log(data_parse);
  return data_parse;
}

async function get_raondom_joke_of_category(category) {
  let response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  let data = await response.text();
  data_parse = JSON.parse(data);
  console.log("Random");
  console.log(data_parse);
  console.log(data_parse.value);
  return data_parse.value;
}
// get_categories_jokes();
// get_raondom_joke_of_category("animal");
// **********
// Level 50: Side functions
// **********
// **********
// Level 60: Validation Functions
// **********
// create_kategory_div_list2();

function create_kategory_div_list2() {
  console.log("SS1");
  const $div_catgories = document.getElementById("div_catgories");
  const $select_catgories = document.createElement("select");
  let arr_categories = get_categories_jokes();
  console.log(arr_categories);
  let arr_categories2 = JSON.parse(arr_categories);
  console.log(arr_categories2);
  console.log("SS");
  // arr_categories.forEach((v) => {
  //   let $single_category = document.createElement("option");
  //   $single_category.innerHTML = v;
  //   $single_category.id = v;
  //   $select_catgories.append($single_category);
  // });

  // $select_catgories.size = arr_categories.length;
  // $div_catgories.append($select_catgories);
}
// **********
// Level 40: Suport Functions
// **********
async function get_categories_jokes2() {
  let response = await fetch("https://api.chucknorris.io/jokes/categories");
  let data = await response.text();
  console.log(data);
  let data_parse = JSON.parse(data);

  return data;
}
