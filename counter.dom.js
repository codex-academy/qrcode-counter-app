const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const counterElem = document.querySelector('.counter')

const counter = Counter();

decrementBtn.addEventListener('click', function(){
    counter.decrement();
    counterElem.innerText = counter.value();
});

incrementBtn.addEventListener('click', function(){
    counter.increment();
    counterElem.innerText = counter.value();
});

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    // console.log(`Scan result: ${decodedText}`, decodedResult);
    console.log(decodedText);
    console.log(decodedResult);

    if (decodedText == "plus") {
        counter.increment();
        counterElem.innerText = counter.value();
    } else if (decodedText == "minus") {
        counter.decrement();
        counterElem.innerText = counter.value();
    }

}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);