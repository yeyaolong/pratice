(function() {
	const svg = d3.select('svg');

	const height = svg.attr('height');
	const width = svg.attr('width');
	
	// console.log(typeof height); // string

	

	

	const g = svg.append('g')
	.attr('transform', `translate(${width / 2}, ${height/2 })`);

	const circle = g.append('circle');
	circle.attr('r', parseInt(height) / 2)
		.attr('fill','yellow')
		.attr('stroke', 'black')
		;


	const eyeSpacing = 100;
	const eyeYOffset = -70;
	const eyeRadius = 30;
	const eyebrowWidth = 70;
	const eyebrowHeight = 15;
	const eyebrowYOffset = -70;

	const eyesGroup = g.append('g')
						.attr('transform', `translate(0, ${eyeYOffset})`)						

	const leftEye = eyesGroup.append('circle')
	leftEye.attr('r', eyeRadius)
			.attr('cx', -eyeSpacing)
		;
	const rightEye = eyesGroup.append('circle')
	rightEye.attr('r', eyeRadius)
			.attr('cx', eyeSpacing)
		;

	const eyesBrowGroup = eyesGroup.append('g')
										.attr('transform', `translate(0, ${eyebrowYOffset})`);

	eyesBrowGroup
		.transition().duration(2000)
			.attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
		.transition().duration(2000)
			.attr('transform',  `translate(0, ${eyebrowYOffset})`)
	
	const leftEyebrow = eyesBrowGroup.append('rect')
										.attr('x', -eyeSpacing - eyebrowWidth/2)
										.attr('width', eyebrowWidth)
										.attr('height', eyebrowHeight);

	const rightEyebrow = eyesBrowGroup.append('rect')
										.attr('x', eyeSpacing - eyebrowWidth/2)
										.attr('width', eyebrowWidth)
										.attr('height', eyebrowHeight);
	

	

	const mouth = g.append('path');
	mouth.attr('d', d3.arc()({
		innerRadius: 150,
		outerRadius: 170,
		startAngle: Math.PI/2,
		endAngle: Math.PI * 3/2
	}))

})()

