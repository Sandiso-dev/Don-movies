
const searchField = document.querySelector(".searchField").value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ffc6c550bmsh8f0778dd56d1022p1de27fjsnc1fc17462444',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

function getsearchField(input){
	const movies = document.querySelector(".movies");
	while(movies.firstChild){
		movies.removeChild(movies.firstChild)
	}

	fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${input.value}`, options)
	.then(response => response.json())

	
	.then(data => {
		const list = data.d;

		list.map((item) =>{
			const name = item.l;
			const poster = item.i.imageUrl;
			const movie = 
						 `
						 
						  <div><img src="${poster}class="searched-movies"/></div>
						  <div><p>${name}</p></div>
						  
						  `

		document.querySelector(".movies").innerHTML += movie;				  
		})
			 

	})
	.catch(err => console.error(err));


}
