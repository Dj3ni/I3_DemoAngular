// let  message : string = "Bienvenue";


// const maFonction = function(text :string): void
// {
//     console.log(message);
// }

// maFonction(message);


class Person{

    public Firstname : string;
    public Lastname : string;
    private _birthday : Date;

    public get Birthday() : Date {
        return this._birthday;
    }
    public set Birthday (value : Date){
        this._birthday = value;
    }

    constructor(firstname : string, lastname : string, birthdate : Date){
        this.Firstname = firstname;
        this.Lastname = lastname;
        this._birthday = birthdate;
    }

    public presents(): void {
        console.log(`Bonjour je suis ${this.Firstname} ${this.Lastname}`);
    }
}

let professor : Person = new Person("Samuel","Legrain",new Date (1988,9,27));
professor.Firstname = "Samuel";
professor.Lastname = "Legrain";
professor.Birthday = new Date (1988,9,27);

let student : Person = new Person("Jules","Verne", new Date());

class Employee extends Person{
    public job : string;

    constructor(firstname : string, lastname : string , birthday : Date, job : string){
        super(firstname, lastname, birthday)
        this.job = job;
    }

    public presents():void{
        console.log(`Bonjour je suis ${this.Firstname} ${this.Lastname} et je travaille comme ${this.job}`);
    }
}

professor.presents();
student.presents();

let groupeDePersonnes : Person[] = [
    professor,
    student
]

interface IPerson{
    Firstname : string;
    Lastname : string;
    
    presents()
}