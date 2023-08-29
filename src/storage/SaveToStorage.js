const saveDataToLocalStorage = data => {
	try {
		const jsonData = JSON.stringify(data)
		localStorage.setItem('myData', jsonData)
	} catch (error) {
		console.log(error)
	}
}
