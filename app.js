const button = document.getElementById('get-btn')
const advice = document.getElementById('advice')

button.addEventListener('click', getAdvice);

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            let html = "";
            html += `
                    <p class="advice">${data.slip.advice}</p>
                `;
            advice.innerHTML = html;
        });
}

