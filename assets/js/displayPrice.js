const price = document.querySelector('.giaDau');
const value = document.querySelector('.slider-value');
console.log(value);

console.log(price);
price.addEventListener('change', function() {
    value.innerHTML = "Giá bé hơn: "+ price.value + "VND";
});