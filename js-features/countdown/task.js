const countDown = function() {
	let timer = document.getElementById("timer");
	const timerId = setInterval(() => {
		timer -- ;
		if (timer === 0) {
			clearInterval(timerId);
			alert('Вы победили в конкурсе!');
		}
	}, 1000);

	return {};
}