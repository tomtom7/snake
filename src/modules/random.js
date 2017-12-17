let canvas = document.getElementById("game");


class Random {
	static getRandomColor() {
	    let letters = '0123456789ABCDEF';
	    let color = '#';

	    for (let i = 0; i < 6; i++) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	static getRandomStartingPosition(maxRandom, scale) {
		let max = maxRandom / scale;
		return  Math.floor(Math.random() * max) * scale;
	}

}
export default Random
