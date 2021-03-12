function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
    let paragraphInput = document.getElementById("paragraphs").value;
    let paragraphs = paragraphInput.split("\n");
    let paragraph = document.getElementById("paragraph");
    let timer = document.getElementById("timer");
    console.log(paragraphs.length);
    for (let p of paragraphs) {
        let time = 20;
        paragraph.innerHTML = p;
        for (let i = 0; i < 200; i++) {
            timer.innerHTML = time.toPrecision(4);
            time -= 0.1;
            await sleep(100);
        }
    }
}