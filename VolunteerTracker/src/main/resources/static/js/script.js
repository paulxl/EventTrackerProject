window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){//removed evt in parathases
	console.log("init()");
	
	document.allVol.volAll.addEventListener('click', function(e){//-----all listener------
		e.preventDefault();		
		getAll();
	});
	
	document.volById.volById.addEventListener('click', function(e) {//--by id listener------
        e.preventDefault();
        let volId = document.volById.volId.value;
        if (!isNaN(volId) && volId > 0) {
            getVolunteer(volId);
        }
    });
	
	document.volByUN.volByUN.addEventListener('click', function(e) {//--by username listener--
        e.preventDefault();        
        let volUN = document.volByUN.volUN.value;
        if (volUN != null) {
        	console.log('in the username listener');
            getVolunteerByUN(volUN);
        }
    });
	
//	document.updateById.updateById.addEventListener('click', function(e){//--updatebyId listener
//		e.preventDefault();
//		let upId = document.updateById.upId.value;
//		if (!isNaN(upId) && upId > 0){
//			updateMeById(upId);
//		}
//	});
	document.createVol.createVol.addEventListener('click', function(e){
		e.preventDefault();
		console.log('in creat listener');
		createNew(e);
		
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
			
			console.log('in the get all to print'+ vol);
			displayAll(vol);
		} else {
			console.log('something went wrong in get all');
			let div = document.getElementById('outAll');
			//div.textContent = 'Something went wrong, database not accessable at this time';
		}
	};
	xhr.send();
}
function displayAll(vol){            //------------output all--------------------
	console.log('in display all');
	

	
	let tableB = document.getElementById('tablebody');
	tableB.textContent ='';
		
	for(let i =0; i < vol.length; i++){
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
		
		let td8 =document.createElement('td');
		let button1 = document.createElement('input');
		button1.setAttribute('type','button');
		button1.setAttribute('value', 'Edit This Entry');
		button1.setAttribute('name', 'edit');
		td8.appendChild(button1);
		let submit1 = document.createElement('input');
		submit1.setAttribute('type', 'hidden');
		submit1.setAttribute('name','id');
		submit1.setAttribute('value', vol[i]);
		td8.appendChild(submit1);
		tr.appendChild(td8);
		
		let td9 =document.createElement('td');
		let button2 = document.createElement('input');
		button2.setAttribute('type','button');
		button2.setAttribute('value', 'Delete This Entry');
		button2.setAttribute('name', 'delete');
		td9.appendChild(button2);
		let submit2 = document.createElement('input');
		submit2.setAttribute('type', 'hidden');
		submit2.setAttribute('name','id');
		submit2.setAttribute('value', vol[i]);
		td9.appendChild(submit2);
		tr.appendChild(td9);
		
		
		tableB.appendChild(tr);
		
	}
	let cc = vol.length;
	divC = document.getElementById('count');
	divC.textContent='Currently there are:  '+ cc +'  volunteers in the database.';
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
function createNew(){
	
	let form = document.createVol;
	console.log('in create new');
	if(form.username.value !=='' && form.password.value !=='' && form.firstname.value !== '' && form.lastname.value !=='' ){
		let volC ={
				username : form.username.value,
				password : form.password.value,
				firstname : form.firstname.value,
				lastname : form.lastname.value,
				active : form.active.value,
				size : form.size.value,
				breeds : form.breeds.value		
				}
	
	
	let xhr = new XMLHttpRequest();
	xhr.open('POST','api/volunteer',true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status <400){
			volC = JSON.parse(xhr.responseText);
			console.log('sent create new vol');
			getAll();
		} else {
			let div = document.getElementById('createData');
			div.textContent= 'Unable to process right now, please try again';
			
		}
		
	};
	
	xhr.send(JSON.stringify(volC));
}
	else{
		let div = document.getElementById('createData');
		div.textContent='Missing Data, Please Try Again.';
	}
}
//function updateMeById(upId){
//	let xhr = new XMLHttpRequest();
//	xhr.open("PUT", "/api/volunteer/" + upId);
//    xhr.onreadystatechange = function() {
//        if (xhr.readyState === 4 && xhr.status < 400) {
//}
