function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
    let paragraphInput = document.getElementById("paragraphs").value;
    let paragraphs = paragraphInput.split("\n");
    let paragraph = document.getElementById("paragraph");
    let timer = document.getElementById("timer");
    console.log(paragraphs.length);
    await sleep(1000);
    for (let p of paragraphs) {
        let time = 20;
        paragraph.innerHTML = p;
        while (time > 0) {
            timer.innerHTML = time.toPrecision(2);
            time -= 1;
            await sleep(1000);
        }
    }
}