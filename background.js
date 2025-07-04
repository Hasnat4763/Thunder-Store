var cartitems = {
    items: [],
    price: 0
};

var button = document.querySelector('button');
var cart = document.getElementById('cartitem');


var cartcount = 0;

function cartupdate(item, price) {
    if (!cartitems.items.includes(item) || item == 'Classified Documents Crate') {
        cartitems.items.push(item);
        cartcount++;
        cartitems.price += price;
    }
    cart.textContent = cartcount;
    console.log(cartitems);console.log(cartcount);
    localStorage.setItem('cartitems.items', JSON.stringify(cartitems.items));
    localStorage.setItem('cartitems.price', JSON.stringify(cartitems.price));
}

function customreq(){
    var item = document.getElementById('item_name');
    var number = document.getElementById('item_quantity');
    var email = document.getElementById('email');
    document.getElementById('req_1').style.display = 'none';
    document.getElementById('W').style.display = 'block';
    document.getElementById('W').innerHTML = 'Your request for ' + number.value + ' ' + item.value + ' has been sent to the Team.'+ email.value  +'will get a mail asap.';

}


function fbiwarning() {
    window.alert('Be Careful! You are now on the FBI watchlist. If you continue purchasing classified documents, you will be sent to gulag')
}

function removefromcart(item, price) {
    if (cartitems.items.includes(item)){
    let a = cartitems.items.indexOf(item);
    cartitems.price -= price;
    cartitems.items.splice(a, 1);
    cartcount -= 1 ;
    cart.textContent = cartcount;
    console.log(cartitems.items);
    console.log(cartcount);
    localStorage.setItem('cartitems.items', JSON.stringify(cartitems.items));
    localStorage.setItem('cartitems.price', JSON.stringify(cartitems.price));
}
}



document.getElementById('fbi').addEventListener('click', fbiwarning);

document.getElementById("request_button").addEventListener("click", customreq);