// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);

function addItemCard(item) {
  const itemHTML =
    '<div class="card" style="width: 20rem;">\n' +
    '    <img src="' +
    item.img +
    '" width="300" height="250"  alt="product image">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">' +
    item.name +
    "</h5>\n" +
    '        <p class="card-text">' +
    item.description +
    "</p>\n" +
    '        <a href="#" class="btn btn-primary">Add</a>\n' +
    "    </div>\n" +
    "</div>\n" +
    "<br/>";
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}
/*The localStorage object allows you to save key/value pairs in the browser.
<script>
 Set Item
localStorage.setItem("lastname", "Smith");
Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
</script>
*/
/*
JavaScript Object Notation (JSON) is a standard text-based format for representing 
structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, 
    so it can be displayed on a web page, or vice versa).

*/
function loadStorageSampleData() {
  if (!localStorage.getItem("items")) {
    const sampleItems = [
      {
        name: "juice",
        img: "https://www.gs1india.org/media/Juice_pack.jpg",
        description: "Orange and Apple juice fresh and delicious",
      },

      {
        name: "Ruffles Chicken",
        img: "https://i5.walmartimages.com/asr/a8187f0a-1bfb-4a45-a54f-c48cb38b8f86.2d572c9d4520b76a1d1a619c2ae3b121.jpeg",
        description: "Ruffles Potato Chips - Chicken",
      },
    ];
    localStorage.setItem("items", JSON.stringify(sampleItems));
  }
}

function loadCardsListFromItemsController() {
  for (var i = 0, size = itemsController.items.length; i < size; i++) {
    const item = itemsController.items[i];
    addItemCard(item);
  }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();





// // Initialize a new TaskManager with currentId set to 0
// const itemsController = new ItemsController(0);


// function addItemCard(item){
//     const itemHTML = '<div class="card" style="width: 20rem;">\n' +
//         '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
//         '    <div class="card-body">\n' +
//         '        <h5 class="card-title">'+item.name+'</h5>\n' +
//         '        <p class="card-text">'+item.description+'</p>\n' +
//         '        <a href="#" class="btn btn-primary">Add</a>\n' +
//         '    </div>\n' +
//         '</div>\n' +
//         '<br/>';
//     const itemsContainer = document.getElementById("list-items");
//     itemsContainer.innerHTML += itemHTML;
// }
// /*The localStorage object allows you to save key/value pairs in the browser.
// <script>
//  Set Item
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
// </script>
// */
// /*
// JavaScript Object Notation (JSON) is a standard text-based format for representing 
// structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, 
//     so it can be displayed on a web page, or vice versa).

// */
// function loadStorageSampleData(){
//     if(!localStorage.getItem("items")){
//         const sampleItems = [{'name':'juice',
//         'img':'C:/Users/Mohsin khan/Pictures/Saved Pictures/book15,jpg',
//         'description':'Orange and Apple juice fresh and delicious'},

//         {'name':'Ruffles Chicken',
//         'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
//         'description':'Ruffles Potato Chips - Chicken'}];
//         localStorage.setItem("items", JSON.stringify(sampleItems));
//     }
// }

// function loadCardsListFromItemsController(){
//     for(var i = 0, size = itemsController.items.length; i < size ; i++){
//         const item = itemsController.items[i];
//         addItemCard(item);
//     }
// }

// loadStorageSampleData();
// itemsController.loadItemsFromLocalStorage();
// loadCardsListFromItemsController();