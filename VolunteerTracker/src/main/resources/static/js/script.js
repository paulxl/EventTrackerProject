window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){//removed evt in parathases
	console.log("init()");
	
	document.allVol.volAll.addEventListener('click', function(event){//-----all listener------
		event.preventDefault();
		console.log('in get all listen');
		getAll();
	});
	document.volById.volById.addEventListener('click', function(event) {//--by id listener------
        event.preventDefault();
        var volId = document.volById.volId.value;
        if (!isNaN(volId) && volId > 0) {
            getVolunteer(volId);
        }
    });
	document.volByUN.volByUN.addEventListener('click', function(event) {//--by username listener--
        event.preventDefault();
        console.log('in UN listen')
        var volUN = document.volByUN.volUN.value;
        if (volUN != null) {
        	console.log('in the username listener');
            getVolunteerByUN(volUN);
        }
    });

}
function getAll(){//---------get all-------------------
	console.log('in getAll');
	let xhr = new XMLHttpRequest();	
	xhr.open("GET", "/api/volunteer/");
	console.log('after call');
	xhr.onreadystatechange = function() {
		console.log('after function');
		if(xhr.readyState === 4 && xhr.status < 400) {
			console.log('before parse');
			let vol = JSON.parse(xhr.responseText);
			displayAll(vol);
			console.log('in the get all to print'+ vol);
		} else {
			console.log('something went wrong in get all');
			let div = document.getElementById('outAll');
			//div.textContent = 'Something went wrong, database not accessable at this time';
		}
	};
	xhr.send(null);
}
function displayAll(vol){//------------output all--------------------
	console.log('in display all');
	let body = document.getElementById('outAll');
	outputById.textContent ='';
	
	let tableB = document.getElementById('tablebody');
	body.appendChild(tableB);
	
	for(let i =0; i<vol.length; i++){
		let tr = document.createElement('tr');
		
		let td1 = document.createElement('td');		
		td1.textContent = vol[i].id;
		tr.appendChild(td1);
		
		let td2 = document.createElement('td');
		td2.textContent = vol[i].username;
		tr.appendChild(td2);
		
		let td3 = document.createElement('td');
		td3.textContent = vol[i].firstname;
		tr.appendChild(td3);
		
		let td4 = document.createElement('td');
		td4.textContent = vol[i].lastname;
		tr.appendChild(td4);
		
		let td5 = document.createElement('td');
		td5.textContent = vol[i].active;
		tr.appendChild(td5);
		
		let td6 = document.createElement('td');
		td6.textContent = vol[i].size;
		tr.appendChild(td6);
		
		let td7 = document.createElement('td');
		td7.textContent = vol[i].breeds;
		tr.appendChild(td7);
		
		tableB.appendChild(tr);
	}		
}


function getVolunteer(volId){//---------------------get by id----------------
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/volunteer/" + volId);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status < 400) {           	
                let vol = JSON.parse(xhr.responseText);
                displayVolunteer(vol);               
                console.log('in get vol about to print out'+ vol);
            } else {
            	console.log('in the else =>400 status')
            	let div = document.getElementById("outputById");
                div.textContent = 'Volunteer I.D. Not Found';
            }       
    };
    xhr.send();
}

function displayVolunteer(volunteer){//-------------output by id--------------
	  let outputById = document.getElementById('outputById');
	    outputById.textContent = '';
	    
	    let ul = document.createElement("ul");
	    outputById.appendChild(ul);
	    let li;
	    
	    li = document.createElement("li");	    
	    li.textContent = volunteer.username;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.firstname;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.lastname;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.active;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.size;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.breeds;	    
	    ul.appendChild(li);	
}
function getVolunteerByUN(volUN){//-------------get by username---------------
	console.log('in get by UN');
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/volunteer/username/" + volUN);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status < 400) {

                let vol = JSON.parse(xhr.responseText);
                console.log('in get vol by username about to print out'+ vol);
                displayVolunteerByUN(vol);               
            } else {
            	console.log('in else of get by UN');
            	let div = document.getElementById("outputByUN");
                div.textContent = 'Volunteer User Name Not Found';
            } 
    };
    xhr.send();
}
function displayVolunteerByUN(volunteer){//------------output by username--------
	  let outputByUN = document.getElementById('outputByUN');
	    outputByUN.textContent = '';
	    
	    let ul = document.createElement("ul");
	    outputByUN.appendChild(ul);
	    let li;
	    
	    li = document.createElement("li");	    
	    li.textContent = volunteer.username;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.firstname;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.lastname;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.active;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.size;	    
	    ul.appendChild(li);
	    
	    li = document.createElement("li");
	    li.textContent = volunteer.breeds;	    
	    ul.appendChild(li);	
}
