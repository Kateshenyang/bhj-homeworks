<script>
document.addEventListener('DOMContentLoaded', async () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        const pollData = await response.json();

        pollTitle.textContent = pollData.data.title;

        pollData.data.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
            pollAnswers.appendChild(button);
        });
    } catch (error) {
        console.error('Ошибка:', error);
    }
});
</script>