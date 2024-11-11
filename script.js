let randNum = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const userGuess = Number(document.getElementById('guessField').value);
    if (userGuess === randNum) {
        console.log('Правильно!');
    } else {
        console.log('Неправильно, спробуйте ще!');
    }
}

let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});

const applyCallbackToEachElement = (arr, callback) => {
    return arr.map(callback);
};
const arr = [1, 2, 3, 4, 5];
const squareCallback = x => x * x;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); // [1, 4, 9, 16, 25]

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};
const showDiscountedPrice = price => console.log("Discounted Price:", price);
calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted Price: 90