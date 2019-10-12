export class Volunteer {
    id : number;
    username : string;
    password : string;
    firstname : string;
    lastname : string;
    active : boolean;
    size : string;
    breeds : string;

    constructor(
       { id, username, password, firstname, lastname, active, size, breeds} :
       {id? : number; username? : string; password? : string; firstname? : string; lastname? : string;
    active? : boolean; size? : string; breeds? : string; }={}
    )
    { 
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.active = active;
        this.size = size;
        this.breeds = breeds;    
}
}
