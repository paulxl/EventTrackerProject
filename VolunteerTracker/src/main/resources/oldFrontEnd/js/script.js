window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	console.log("init()");

	document.allVol.volAll.addEventListener('click', function(e) {
		e.preventDefault();
		getAll();
	});
	document.volById.volById.addEventListener('click', function(e) {
		e.preventDefault();
		let volId = document.volById.volId.value;
		if (!isNaN(volId) && volId > 0) {
			getVolunteer(volId);
		}
	});
	document.volByUN.volByUN.addEventListener('click', function(e) {
		e.preventDefault();
		let volUN = document.volByUN.volUN.value;
		if (volUN != null) {
			getVolunteerByUN(volUN);
		}
	});
	document.createVol.createVol.addEventListener('click', function(e) {
		e.preventDefault();
		createNew(e);
	});	
}
function getAll() {// ---------get all-------------------
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/volunteer/");
	
	xhr.onreadystatechange = function() {
		
		if (xhr.readyState === 4 && xhr.status < 400) {
			
			let vol = JSON.parse(xhr.responseText);
			displayAll(vol);
		} else {
			
			let div = document.getElementById('outAll');
			// div.textContent = 'Something went wrong, database not accessable
			// at this time';
		}
	};
	xhr.send();
}
function displayAll(vol) { // ------------output all--------------------
	
	let body = document.getElementById('tablebody');
	body.textContent = '';//

	let form = document.createElement('form');
	form.name = "Volunteers";

	let table = document.createElement('table');
	form.appendChild(table);

	for (let i = 0; i < vol.length; i++) {
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

		let td8 = document.createElement('td');
		let sub1 = document.createElement('input');
		sub1.name = 'submit';
		sub1.type = 'submit';
		sub1.value = 'Edit/Delete';
		form.appendChild(sub1);
		td8.appendChild(sub1);
		tr.appendChild(td8);

		sub1.addEventListener('click', function(e) {
			e.preventDefault();
			displayVolunteer(vol[i]);
			let form = e.target.parentElement;
			// form.reset();// do something with this---------------------xxxxxx
		});

		table.appendChild(tr);
		body.appendChild(form);// had doc in front
	}
	let cc = vol.length;
	divC = document.getElementById('count');
	divC.textContent = 'Currently there are:  ' + cc
			+ '  volunteers in the database.';
}

function getVolunteer(volId) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/volunteer/" + volId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let vol = JSON.parse(xhr.responseText);
			displayVolunteer(vol);
			
		} else {
			
			let div = document.getElementById("outputById");
			div.textContent = 'Volunteer I.D. Not Found';
		}
	};
	xhr.send();
}

function displayVolunteer(volunteer) {
	let body = document.getElementById('outputById');
	body.textContent = '';//

	let form = document.createElement('form');
	form.name = "Volunteer";

	let table = document.createElement('table');
	form.appendChild(table);

	let tr = document.createElement('tr');

	let td1 = document.createElement("td");
	td1.textContent = volunteer.id;
	tr.appendChild(td1);

	let td2 = document.createElement("td");
	td2.textContent = volunteer.username;
	tr.appendChild(td2);

	let td3 = document.createElement("td");
	td3.textContent = volunteer.firstname;
	tr.appendChild(td3);

	let td4 = document.createElement("td");
	td4.textContent = volunteer.lastname;
	tr.appendChild(td4);

	let td5 = document.createElement("td");
	td5.textContent = volunteer.active;
	tr.appendChild(td5);

	let td6 = document.createElement("td");
	td6.textContent = volunteer.size;
	tr.appendChild(td6);

	let td7 = document.createElement("td");
	td7.textContent = volunteer.breeds;
	tr.appendChild(td7);

	let td8 = document.createElement('td');
	let sub1 = document.createElement('input');
	sub1.name = 'submit';
	sub1.type = 'submit';
	sub1.value = 'Edit';
	form.appendChild(sub1);
	td8.appendChild(sub1);
	tr.appendChild(td8);

	sub1.addEventListener('click', function(e) {
		e.preventDefault();
		editForm(volunteer);
		let form = e.target.parentElement;
		
	});
	let td9 = document.createElement('td');
	let sub2 = document.createElement('input');
	sub2.name = 'submit';
	sub2.type = 'submit';
	sub2.value = 'Delete';
	form.appendChild(sub2);
	td9.appendChild(sub2);
	tr.appendChild(td9);

	sub2.addEventListener('click', function(e) {
		e.preventDefault();
		
		deleteMeById(volunteer.id);
		
	});
	table.appendChild(tr);
	body.appendChild(form);
}
function editForm(volunteer) {
	let body = document.getElementById('justedit');
	body.textContent = '';
	let form = document.createElement('form');
	form.name = "editor";
	let p1 = document.createElement('p');
	p1.textContent = 'Edit here and hit the update button';
	body.appendChild(p1);
	let in1 = document.createElement('input');
	in1.type = 'text';
	in1.name = 'username';
	in1.size = '40';
	in1.value = volunteer.username;
	form.appendChild(in1);
	let br1 = document.createElement('br');
	form.appendChild(br1);
	let in2 = document.createElement('input');
	in2.type = 'text';
	in2.name = 'password';
	in2.size = '40';
	in2.value = volunteer.password;
	form.appendChild(in2);
	let br2 = document.createElement('br');
	form.appendChild(br2);
	let in3 = document.createElement('input');
	in3.type = 'text';
	in3.name = 'firstname';
	in3.size = '40';
	in3.value = volunteer.firstname;
	form.appendChild(in3);
	let br3 = document.createElement('br');
	form.appendChild(br3);
	let in4 = document.createElement('input');
	in4.type = 'text';
	in4.name = 'lastname';
	in4.size = '40';
	in4.value = volunteer.lastname;
	form.appendChild(in4);
	let br4 = document.createElement('br');
	form.appendChild(br4);
	
	 let in5 = document.createElement('SELECT');
	 in5.setAttribute('id','active');
	 form.appendChild(in5);
	 
	 let in5a = document.createElement('option');
	 in5a.setAttribute('value','true');
	 let in5b = document.createTextNode('Yes');
	 in5a.appendChild(in5b);
	 in5.appendChild(in5a);
	 
	 let in5c = document.createElement('option');
	 in5c.setAttribute('value','false');
	 let in5d = document.createTextNode('No');
	 in5c.appendChild(in5d);
	 in5.appendChild(in5c);
	 
	let br5 = document.createElement('br');
	form.appendChild(br5);
	
	let in6a = document.createElement('input');
	in6a.type = "checkbox";
	in6a.name = 'size sm';
	in6a.value = 'small';	
	form.appendChild(in6a);
		
	let br51 = document.createElement('br');
	form.appendChild(br51);
	
	let in6b = document.createElement('input');
	in6b.type = "checkbox";
	in6b.name = 'size md';
	in6b.value = 'medium';	
	form.appendChild(in6b);
		
	let br52 = document.createElement('br');
	form.appendChild(br52);
	
	let in6c = document.createElement('input');
	in6c.type = "checkbox";
	in6c.name = 'size lg';
	in6c.value = 'large';	
	form.appendChild(in6c);
		
	let br53 = document.createElement('br');
	form.appendChild(br53);
	
	let in6d = document.createElement('input');
	in6d.type = "checkbox";
	in6d.name = 'size all';
	in6d.value = 'all';	
	form.appendChild(in6d);
	
	let br6 = document.createElement('br');
	form.appendChild(br6);
	
	let in7 = document.createElement('input');
	in7.type = 'text';
	in7.name = 'breeds';
	in7.size = '40';
	in7.value = volunteer.breeds;
	form.appendChild(in7);
	let btnE = document.createElement('input');
	btnE.name = 'submit';
	btnE.type = 'submit';
	btnE.value = 'update';

	btnE.addEventListener('click', function(e) {
		e.preventDefault();
		
		editMe(volunteer.id, volunteer);
		
	});
	form.appendChild(btnE);
	body.appendChild(form);

}
function editMe(vid, volunteer){
	let form =event.target.parentElement;		
	let volE = {
			id : form.id.value,
			username : form.username.value,
			password : form.password.value,
			firstname : form.firstname.value,
			lastname : form.lastname.value,
			active : form.active.value,
			size : 'all',
			breeds : form.breeds.value
		}
	let xhr = new XMLHttpRequest();
	xhr.open("PUT","/api/volunteer/"+volunteer.id );
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function(){
		if(xhr.readyState ===4 && xhr.status <400){
			volE = JSON.parse(xhr.responseText);
			console.log('sent update ');
			getAll();
		} else {
			let div = document.getElementById('justedit');
			div.textContent = 'Unable to process right now, please try again';
		}	
	};
	xhr.send(JSON.stringify(volE));
}
function getVolunteerByUN(volUN) {
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/volunteer/username/" + volUN);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {

			let vol = JSON.parse(xhr.responseText);
			
			displayVolunteerByUN(vol);
		} else {
			console.log('in else of get by UN');
			let div = document.getElementById("outputByUN");
			div.textContent = 'Volunteer User Name Not Found';
		}
	};
	xhr.send();
}
function displayVolunteerByUN(volunteer) {
	let outputByUN = document.getElementById('outputByUN');
	outputByUN.textContent = '';

	let ul = document.createElement("ul");
	outputByUN.appendChild(ul);

	let li1 = document.createElement("li");
	li1.textContent = volunteer.username;
	ul.appendChild(li1);

	let li2 = document.createElement("li");
	li2.textContent = volunteer.firstname;
	ul.appendChild(li2);

	let li3 = document.createElement("li");
	li3.textContent = volunteer.lastname;
	ul.appendChild(li3);

	let li4 = document.createElement("li");
	li4.textContent = volunteer.active;
	ul.appendChild(li4);

	let li5 = document.createElement("li");
	li5.textContent = volunteer.size;
	ul.appendChild(li5);

	let li6 = document.createElement("li");
	li6.textContent = volunteer.breeds;
	ul.appendChild(li6);
}
function createNew() {
	let form = document.createVol;
	
	if (form.username.value !== '' && form.password.value !== ''
			&& form.firstname.value !== '' && form.lastname.value !== '') {
		let volC = {
			username : form.username.value,
			password : form.password.value,
			firstname : form.firstname.value,
			lastname : form.lastname.value,
			active : form.active.value,
			size : form.size.value,
			breeds : form.breeds.value
		}
		let xhr = new XMLHttpRequest();
		xhr.open('POST', '/api/volunteer', true);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				volC = JSON.parse(xhr.responseText);
				
				getAll();
			} else {
				let div = document.getElementById('createData');
				div.textContent = 'Unable to process right now, please try again';
			}
		};
		xhr.send(JSON.stringify(volC));
	} else {
		let div = document.getElementById('createData');
		div.textContent = 'Missing Data, Please Try Again.';
	}
}
function deleteMeById(Did) {
	
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', '/api/volunteer/' + Did);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			
			let dv = JSON.parse(xhr.responseText);
		} else {
			
			let div = document.getElementById("editDelete");
			div.textContent = 'Error in trying to delete';
		}
	};
	xhr.send(null);
}
