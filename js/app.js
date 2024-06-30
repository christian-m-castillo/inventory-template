// script.js

function createItem(name, quantity, price) {
  return {
    name: name,
    quantity: quantity,
    price: price
  };
}

let inventory = [];

function addItem(name, quantity, price) {
  const item = createItem(name, quantity, price);
  inventory.push(item);
  displayInventory();
}

function displayInventory() {
  const inventoryList = document.getElementById('inventoryList');
  inventoryList.innerHTML = '';

  inventory.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`;
    inventoryList.appendChild(li);
  });
}

document.getElementById('addItemForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const itemName = document.getElementById('itemName').value;
  const itemQuantity = document.getElementById('itemQuantity').value;
  const itemPrice = document.getElementById('itemPrice').value;
  addItem(itemName, itemQuantity, itemPrice);

  document.getElementById('addItemForm').reset();
});
