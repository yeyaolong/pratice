(function() {
	const svg = d3.select('svg');

	const height = svg.attr('height');
	const width = svg.attr('width');
	
	console.log(typeof height); // string

	const circle = svg.append('circle');

	circle.attr('r', parseInt(height) / 2);	//  it's strange, string can be divided by 2

	circle.attr('cx', parseInt(width) / 2);

	circle.attr('cy', parseInt(height) / 2);
})()

