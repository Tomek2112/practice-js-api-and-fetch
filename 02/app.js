document.addEventListener('DOMContentLoaded', init);

function init() {
	const divList = document.querySelectorAll('div');

	setBorderColorAsync(divList[0], 'red')
		.then(() => setBorderColorAsync(divList[1], 'blue'))
		.then(() => setBorderColorAsync(divList[2], 'green'))
		.then(res => console.log(res))
		.catch(err => alert(err));
}

function setBorderColorAsync(element, color) {
	const promise = new Promise((resolve, reject) => {
		const time = Math.random() * 3000;
		if (element && element instanceof HTMLElement) {
			setTimeout(() => {
				element.style.border = `3px solid ${color}`;
				resolve('finish');
			}, time);
		} else {
			reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
		}
	});

	return promise;
}