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
        let time = 18.7;
        paragraph.innerHTML = p;
        while (time > 0) {
            timer.innerHTML = time.toPrecision(4);
            time -= 0.1;
            await sleep(100);
        }
    }
}