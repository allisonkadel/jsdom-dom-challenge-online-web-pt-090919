document.addEventListener("DOMContentLoaded", function(){
    // grab all the elements we will need
    let counterBtn = document.getElementById("counter");
    let plusBtn = document.getElementById("plus");
    let minusBtn = document.getElementById("minus");
    let heartBtn = document.getElementById("heart");
    let pauseBtn = document.getElementById("pause");
    let likesUl = document.querySelector("ul.likes");
    let counter = {};
    // As a user, I should see the timer increment every second once the page has loaded.
    let timer = setInterval(function() {
        counterBtn.innerText++;
    }, 1000);
    // As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    plusBtn.addEventListener("click", function() {
        counterBtn.innerText++;
    });
    minusBtn.addEventListener("click", function() {
        counterBtn.innerText--;
    });
    // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
    heartBtn.addEventListener("click", function() {
        if(counter[counterBtn.innerText]) {
            counter[counterBtn.innerText]++;
        } else {
            counter[counterBtn.innerText] = 1;
        }
        likesUl.innerHTML += `<li> You liked number ${counterBtn.innerText} ${counter[counterBtn.innerText]} times</li>`
    });
    // a different approach:
    let li = document.createElement("li");
    li.innerText = `You liked number ${counterBtn.innerText}`;
    likesUl.appendChild(li);
    // todo: pause button feature
});