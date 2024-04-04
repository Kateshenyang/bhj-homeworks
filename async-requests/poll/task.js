document.addEventListener('DOMContentLoaded', function() {
    const pollTitleElement = document.getElementById('poll__title');
    const pollAnswersElement = document.getElementById('poll__answers');

    function createAnswerButtons(answers) {
        answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            button.addEventListener('click', function() {
                alert('Спасибо, ваш голос засчитан!');
            });
            pollAnswersElement.appendChild(button);
        });
    }

    function fetchPollData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                pollTitleElement.textContent = data.data.title;
                createAnswerButtons(data.data.answers);
            }
        };
        xhr.send();
    }

    fetchPollData();
});