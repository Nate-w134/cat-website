
var buttonModal = document.getElementById('button-for-modal')
if (buttonModal) {
    buttonModal.addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'flex';
    });
}

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

function showModal(id) {
    $("#bg-modal").fadeIn('slow');
}
function hideModal(id) {
    $("#bg-modal").fadeOut('slow');
}

// const apples = 10
// const pears = 20

// const groceryShopping = ({ applesAmount, pearsAmount }) => {
//     return `You have ordered ${applesAmount} apples and it costs you ${applesAmount * apples} and ${pearsAmount} pears and its costs you ${pearsAmount * pears}`
// }

// console.log('My Order', groceryShopping({applesAmount: 6, pearsAmount: 214}))


// function hello() {

// }

// const hello = () => {

// }

// const hello = 'helo'




// let mello = 'mello'

// mello = 'something else'

// let orderSummary = 0


// const addOrders = (itemCount) => {
//     orderSummary = itemCount * 5
// }


const james = 19
const pheobe = 27

console.log(james+pheobe)