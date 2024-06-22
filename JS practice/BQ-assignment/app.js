let list = [];
let total = 0;

function addItem() {
  const name = document.getElementById("item-name").value;
  const price = parseFloat(document.getElementById("item-price").value);

  if (name && price) {
    const item = {
      name,
      price
    };

    list.push(item);

    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";

    renderList();
    calculateTotal();
  }
}

function renderList() {
  const listElem = document.getElementById("list");
  listElem.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const listItemElem = document.createElement("li");
    const itemPrice = item.price.toFixed(2);

    listItemElem.innerHTML = `<span>${item.name}</span><span>$${itemPrice}</span>`;
    listElem.appendChild(listItemElem);
  }
}
function calculateTotal() {
  let amount = 0;

  for (let i = 0; i < list.length; i++) {
    amount += list[i].price;
  }

  total = amount.toFixed(2);

  document.getElementById("total-amount").innerHTML = `$${total}`;
}