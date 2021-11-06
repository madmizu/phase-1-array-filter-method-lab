

const findMatching = (array, name) => array.filter(driver => driver.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (array, letters) => array.filter (members => members.charAt() === letters.charAt())

// QUESTION: how does JS know that 'record' refers to 

const matchName = (array, memberName) => array.filter (nm => nm.name === memberName);