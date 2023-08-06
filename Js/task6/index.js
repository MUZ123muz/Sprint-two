document.getElementById("FormAddBook").addEventListener("submit", function (e) {
    e.preventDefault();
    const bookName = document.getElementById("bookName").value;
    const bookPrice = document.getElementById("bookPrice").value;
    const bookImage = document.getElementById("bookImage").files[0];
    const bookCategory = document.getElementById("bookCategory").value;

    const reader = new FileReader();
    reader.onload = function (event) {
      const bookImageURL = event.target.result;
      
      // Creating product object
      let book = {
        name: bookName,
        price: bookPrice,
        image: bookImageURL,
        category: bookCategory,
      };
      // Check if local storage is available
      if (typeof Storage !== "undefined") {
        // Getting Products
        let allBooks = JSON.parse(localStorage.getItem("products")) || [];

        // Adding product to the array
        allBooks.push(book);

        // Storing updated products in local storage
        localStorage.setItem("products", JSON.stringify(allBooks));
        document.getElementById("FormAddBook").reset();

        alert("Book added successfully!");
      } else {
        alert("Can Not Add Book.");
      }
    };
    // Read the image file as a data URL
    reader.readAsDataURL(bookImage);
  });





// document.getElementById('addProductForm').addEventListener('submit', function(e) {
//     e.preventDefault(); 
//     const productName = document.getElementById('productName').value;
//     const productPrice = document.getElementById('productPrice').value;
//     const productImage = document.getElementById('productImage').files[0];
//     const productCategory = document.getElementById('productCategory').value;

//     const reader = new FileReader();
//     reader.onload = function(event) {
//     const productImageURL = event.target.result;

//     // Creating product object 
//     let product = {
//       name: productName,
//       price: productPrice,
//       image: productImageURL,
//       category: productCategory
//     };
//     // Check if local storage is available
//     if (typeof(Storage) !== 'undefined') {

//       // Getting Products
//       let allProducts = JSON.parse(localStorage.getItem('products')) || [];

//       // Adding product to the array
//       allProducts.push(product);

//       // Storing updated products in local storage
//       localStorage.setItem('products', JSON.stringify(allProducts));
//       document.getElementById('addProductForm').reset();

//       alert('Product added successfully!');
//     } else {
//       alert('Error! adding product.');
//     }
//   };
//   // Read the image file as a data URL
//   reader.readAsDataURL(productImage);
// });
