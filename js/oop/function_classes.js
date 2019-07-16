//Alternative methods to create a class

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
};

//all function class has methods stored in prototype
User.prototype.login = function () {
    this.online = true
    console.log(this.email, ' has logged in')
}

User.prototype.logout = function () {
    this.online = false
    console.log(this.email, ' has logged out')
}

//Inheritance 
function Admin(...args) {
    User.apply(this, args)
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function () {

}

const userOne = new User('shaun@fractal.ai', 'shaun');
const userTwo = new User('shaun2@fractal.ai', 'shaun2');
const admin = new Admin('shaunAdmin@fractal.ai', 'shaunAdmin');

console.log(admin);