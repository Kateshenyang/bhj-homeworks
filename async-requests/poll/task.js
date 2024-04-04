document.addEventListener('DOMContentLoaded', function() {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    function createAnswerButton(text) {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = text;
        button.addEventListener('click', function() {
            alert('Спасибо, ваш голос засчитан!');
        });
        return button;
    }

    function loadPollData() {
        fetch('https://netology-slow-rest.herokuapp.com/poll.php')
            .then(response => response.json())
            .then(data => {
                if (data && data.data) {
                    pollTitle.textContent = data.data.title;

                    pollAnswers.innerHTML = '';

                    data.data.answers.forEach(answer => {
                        const answerButton = createAnswerButton(answer);
                        pollAnswers.appendChild(answerButton);
                    });
                }
            })
            .catch(error => console.error('Ошибка загрузки данных опроса:', error));
    }

    loadPollData();
});