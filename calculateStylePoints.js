const calculateStylePoints = (styleNotes) => {
	const max = Math.max(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
	const min = Math.min(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
		return styleNotes[0] + styleNotes[1] + styleNotes[2] + styleNotes[3] + styleNotes[4] - max - min;
};

module.exports = calculateStylePoints;

/*const calculateStylePoints = (styleNotes) => {
	const notes = [styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]];
	const max = Math.max(...notes);
	const min = Math.min(...notes);



};

module.exports = calculateStylePoints;*/