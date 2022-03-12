// Cack NOris Jokes

// ++++++++++++++++++++++++
// content:
// 10: defining main variable and structre
// 20: Main
// 30: Primery Functions
// 30: evenet functions
// 40: Suport Functions
// 50: Side functions
// 60: Validation Functions
// +++++++++++++++++++++
//
// **********
// Level 10: defining main variable and structre
// **********
const $div_catgories = document.getElementById("div_catgories");
const $select_catgories = document.createElement("select");
const $text_search = document.getElementById("text_search");
const $button_get_random_joke = document.getElementById(
  "button_get_random_joke"
);
const $ul_results = document.getElementById("ul_results");

let pressed_category = "";
// let arr_categories = [];
// **********
// Level 20: Main
// **********
get_categories_jokes();
$select_catgories.addEventListener("click", jokes_from_kategory);

$button_get_random_joke.addEventListener("click", get_raondom_joke_of_category);

$text_search.addEventListener("input", search_from_input);

let $li_search_result = document.createElement("li");
$li_search_result.innerHTML = `Please choose a category to get random jokes`;
$ul_results.append($li_search_result);

// **********
// Level 30: Primery Functions
// **********
function create_kategory_div_list(arr_categories) {
  arr_categories.forEach((v) => {
    let $single_category = document.createElement("option");
    $single_category.innerHTML = v;
    $single_category.id = v;
    $select_catgories.append($single_category);
  });

  $select_catgories.size = arr_categories.length;
  $div_catgories.append($select_catgories);

  $select_catgories.selectedIndex = 0;
  pressed_category = $select_catgories.firstChild.innerHTML;
}
// **********
// Level 30: evenet functions
// **********
function search_from_input() {
  clear_elements_from_div("ul_results");
  let search_vaule = $text_search.value;
  if (search_vaule.length >= 3) {
    // debugger;
    console.log("searching");

    search_for_jokes(search_vaule);
  } else {
    console.log("to short to search for");
  }
}

function jokes_from_kategory(ev) {
  pressed_category = ev.target.innerHTML;

  clear_elements_from_div("ul_results");

  get_raondom_joke_of_category(false);
  get_raondom_joke_of_category(false);
  get_raondom_joke_of_category(false);
}
function button_random_joke_pressed() {
  get_categories_jokes();
}
// **********
// Level 40: Suport Functions
// **********

async function search_for_jokes(text_to_search) {
  let response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${text_to_search}`
  );
  let data = await response.text();
  let data_parse = JSON.parse(data);
  data_parse_results = data_parse.result;
  console.log("length");
  console.log(data_parse_results.length);
  if (data_parse_results.length == 0) {
    let $li_search_result = document.createElement("li");
    $li_search_result.innerHTML = "No results was found";
    console.log("No results was found");
    $ul_results.append($li_search_result);
  } else {
    data_parse_results.forEach((v) => {
      if (v.categories[0] == pressed_category) {
        let $li_search_result = document.createElement("li");
        $li_search_result.innerHTML = `<b>category:${v.categories} </b> <br> ${v.value}`;
        $ul_results.append($li_search_result);
      } else {
        console.log("Joke not from category");
      }
    });
    if ($ul_results.firstChild == undefined) {
      let $li_search_result = document.createElement("li");
      $li_search_result.innerHTML = `No results was found from the ${pressed_category} category`;
      console.log(`No results was found from the ${pressed_category} category`);
      $ul_results.append($li_search_result);
    }
  }
}

async function get_categories_jokes() {
  let response = await fetch("https://api.chucknorris.io/jokes/categories");
  let data = await response.text();
  let data_parse = JSON.parse(data);
  console.log(data_parse);
  // console.log([data_parse]);
  create_kategory_div_list(data_parse);
  // return [data_parse];
}

async function get_raondom_joke_of_category(flag_claen_results = true) {
  // TODO: fix eror wehn pressing the fisrt time
  if (pressed_category[0] === "<") {
    pressed_category = $select_catgories[0].value;
  }
  let response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${pressed_category}`
  );
  let data = await response.text();
  data_parse = JSON.parse(data);
  // console.log(data_parse);
  if (flag_claen_results) {
    clear_elements_from_div("ul_results");
  }
  let $result_random_joke = document.createElement("li");

  $result_random_joke.innerHTML = `<b>category:${pressed_category} </b> <br> ${data_parse.value}`;
  $ul_results.append($result_random_joke);
  // console.log(data_parse.value);
  // console.log("AAA");
  // return data_parse.value;
}

// **********
// Level 50: Side functions
// **********
function clear_elements_from_div(id_to_clear) {
  id_to_clear = document.getElementById(id_to_clear);
  while (id_to_clear.firstChild) {
    id_to_clear.removeChild(id_to_clear.firstChild);
  }
}

// **********
// Level 60: Validation Functions
// **********
// create_kategory_div_list2();

// function create_kategory_div_list2() {
//   console.log("SS1");
//   const $div_catgories = document.getElementById("div_catgories");
//   const $select_catgories = document.createElement("select");
//   let arr_categories = get_categories_jokes();
//   console.log(arr_categories);
//   let arr_categories2 = JSON.parse(arr_categories);
//   console.log(arr_categories2);
//   console.log("SS");
//   // arr_categories.forEach((v) => {
//   //   let $single_category = document.createElement("option");
//   //   $single_category.innerHTML = v;
//   //   $single_category.id = v;
//   //   $select_catgories.append($single_category);
//   // });

//   // $select_catgories.size = arr_categories.length;
//   // $div_catgories.append($select_catgories);
// }
// // **********
// // Level 40: Suport Functions
// // **********
// async function get_categories_jokes2() {
//   let response = await fetch("https://api.chucknorris.io/jokes/categories");
//   let data = await response.text();
//   console.log(data);
//   let data_parse = JSON.parse(data);

//   return data;
// }
