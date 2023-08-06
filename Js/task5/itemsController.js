
// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
      this.items = [];
      this.currentId = currentId;
    }
  
    // Create the addItem method
    addItem(name, description, imageUrl) {
      const item = {
        // Increment the currentId property
        id: this.currentId++,
        name: name,
        description: description,
        imageUrl: imageUrl,
      };
  
      // Push the item to the items property
      this.items.push(item);
    }
  
    loadItemsFromLocalStorage() {
      const storageItems = localStorage.getItem("items");
      if (storageItems) {
        const items = JSON.parse(storageItems);
        for (var i = 0, size = items.length; i < size; i++) {
          const item = items[i];
          this.items.push(item);
        }
      }
    }
  }



// class ItemsController {
//     constructor(currentId = 0) {
//         this.items = [];
//         this.currentId = currentId;
//     }
//     //create additem mehod
//     addItem(name, image, description) {
//         const item = {

//             id: this.currentId,
//             name: name,
//             image: image,
//             description: description
//         };

//         this.items.push(item);
//     }


//     loadItemsFromLocalStorage() {
//         const storageItems = localStorage.getItem("Items")
//         if (storageItems) {
//             const items = JSON.parse(storageItems)
//             for (var i = 0, size = items.length; i < size; i++) {
//                 const item = items[i];
//                 this.items.push(item);


//             }
//         }
//     }
// }

