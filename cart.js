addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cartitems.items')) || [];
    console.log("Loaded Cart:", cart);
    const price = JSON.parse(localStorage.getItem('cartitems.price')) || 0;
    console.log("Loaded Price:", price);
    
    var list = document.getElementById('list');
    var button = document.querySelector('button')
    document.getElementById('price').innerHTML = price + ' USD';
    var prize = [];   
    var classified_documents = [
        'F-22A', 'Su-57', 'T-90M', 'Leopard 2A7', 'Su-35', 'B-2', 'F-35'
    ]
    
    cart.forEach((cartitem) => {
        let li = document.createElement('li');
        li.innerText = cartitem;
        list.appendChild(li);

    })

function checkout() {
    if (!Array.isArray(cart) || cart.length === 0)
 {
        document.getElementById('checkout-message').innerHTML = 'Your Cart is empty! Please add items to your cart before checking out.';
        document.getElementById('cartlist').style.display = 'none';
        document.getElementById('checkout-button').style.display = 'none';
        document.getElementById('return').style.display = 'block';
        return;
    }
    else {
    document.getElementById('checkout-message').innerHTML = 'Your Payment has been processed successfully! You are now on FBI watchlist';
    document.getElementById('cartlist').style.display = 'none';
    document.getElementById('h3').style.display = 'block';
    document.getElementById('checkout-button').style.display = 'none';
    document.getElementById('return').style.display = 'block';
    if (cart.includes('Classified Documents Crate')) {
        classified_crate_spin();
        document.getElementById('checkout-message').innerHTML = 'Your Payment has been processed successfully! You are now on FBI watchlist.' + '<br>' + 'You have gotten these Classified Documents:' + '<br>' + prize.join(', ');

        }    
    }
    localStorage.removeItem('cart');
    localStorage.removeItem('price');
}
function goback() {
    window.location.href = 'index.html';
}
function classified_crate_spin() {
    cart.forEach((cartitem) => {
        if (cartitem == 'Classified Documents Crate') {
            let a = Math.floor(Math.random() * classified_documents.length);
            b = classified_documents[a];
            prize.push(b);
        }
    });
}

button.addEventListener('click', checkout);
document.getElementById('return').addEventListener('click', goback);
})