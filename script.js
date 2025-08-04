const bands = ['The Plot in You', 'The Devil Wears Prada', 
			   'Pierce the Veil', 'Norma Jean', 'The Bled', 
			   'Say Anything', 'The Midway State', 'We Came as Romans', 
			   'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
			   'Anywhere But Here', 'An Old Dog'];

function stripPrefix(name){
	return name.replace(/^(a |an |the )/i, '').trim();
}

const sorteBands = bands.sort((a,b) => {
	const nameA = stripPrefix(a).toLowerCase();
	const nameB = stripPrefix(b).toLowerCase();

	return nameA.localeCompare(nameB);
})

const ul = document.getElementById("bands");
ul.innerHTML = sorteBands.map(bands => `<li>${bands}</li>`).join('');


