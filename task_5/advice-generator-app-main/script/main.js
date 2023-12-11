window.addEventListener("DOMContentLoaded", () => {
    const advice_title = document.querySelector("#advice-id");
    const advice_body = document.querySelector("#advice-body");
    const dice = document.querySelector("#dice");

    dice.addEventListener('click', FetchData);

    async function FetchData() {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const json = await response.json();
            console.log(json);
            advice_title.innerText = `Advice #${json.slip.id}`;
            advice_body.innerText = `"${json.slip.advice}"`;
        } catch (error) {
            console.error("Error fetching advice", error);
        }
    }

    FetchData();
});
