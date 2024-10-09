document.getElementById('addItem').addEventListener('click', addItem);
document.getElementById('generateBill').addEventListener('click', generateBill);

let totalBill = 0;

function addItem() {
    const itemName = document.getElementById('item').value;
    const itemPrice = parseFloat(document.getElementById('price').value);
    const itemQuantity = parseInt(document.getElementById('quantity').value);

    if (itemName && !isNaN(itemPrice) && !isNaN(itemQuantity)) {
        const totalPrice = itemPrice * itemQuantity;
        totalBill += totalPrice;

        const tableBody = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();

        newRow.innerHTML = `
            <td>${itemName}</td>
            <td>$${itemPrice.toFixed(2)}</td>
            <td>${itemQuantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
        `;

        // Clear input fields
        document.getElementById('item').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
    } else {
        alert("Please enter valid item details!");
    }
}

function generateBill() {
    document.getElementById('totalBill').innerText = `Total Bill: ₹{totalBill.toFixed(2)}`;
}