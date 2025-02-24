// let  message : string = "Bienvenue";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const maFonction = function(text :string): void
// {
//     console.log(message);
// }
// maFonction(message);
var Person = /** @class */ (function () {
    function Person(firstname, lastname, birthdate) {
        this.Firstname = firstname;
        this.Lastname = lastname;
        this._birthday = birthdate;
    }
    Object.defineProperty(Person.prototype, "Birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.presents = function () {
        console.log("Bonjour je suis ".concat(this.Firstname, " ").concat(this.Lastname));
    };
    return Person;
}());
var professor = new Person("Samuel", "Legrain", new Date(1988, 9, 27));
professor.Firstname = "Samuel";
professor.Lastname = "Legrain";
professor.Birthday = new Date(1988, 9, 27);
var student = new Person("Jules", "Verne", new Date());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstname, lastname, birthday, job) {
        var _this = _super.call(this, firstname, lastname, birthday) || this;
        _this.job = job;
        return _this;
    }
    Employee.prototype.presents = function () {
        console.log("Bonjour je suis ".concat(this.Firstname, " ").concat(this.Lastname, " et je travaille comme ").concat(this.job));
    };
    return Employee;
}(Person));
professor.presents();
student.presents();
var groupeDePersonnes = [
    professor,
    student
];
