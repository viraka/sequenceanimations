const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// CALLBACK HELL

function doOperation1() {
    alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
        alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
            alice3.animate(aliceTumbling, aliceTiming).finished.then(() => {
                console.log("done");
            });
        });
    });
}

// PROIMISE CHAINING

function doOperation2() {
    alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
        return alice2.animate(aliceTumbling, aliceTiming).finished;
    }).then(() => {
        return alice3.animate(aliceTumbling, aliceTiming).finished;
    }).then(() => {
        console.log("done");
    });

}

// ASYNC-AWAIT 

async function doOperation3() {
    await alice1.animate(aliceTumbling, aliceTiming);
    await alice2.animate(aliceTumbling, aliceTiming);
    await alice3.animate(aliceTumbling, aliceTiming);
    console.log("done");
}

doOperation2();