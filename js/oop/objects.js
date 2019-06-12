class User {
    constructor(email, name) {
        this.email = email
        this.name = name
        this.score = 0;
    }
    login() {
        console.log(this.email, ' is logged in')
    }
    logout() {
        console.log(this.email, ' is logged out')
    }
    updateScore() {
        this.score += 1
        console.log(this.email, ' score is now ', this.score)
        return this;
    }

};


//Inherits constructor from parent class
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

const userOne = new User('shaun@fractal.ai', 'shaun');
const userTwo = new User('shaun2@fractal.ai', 'shaun2');
const admin = new Admin('shaunAdmin@fractal.ai', 'shaunAdmin');


var users = [userOne, userTwo]

//Method Chaining
userOne.updateScore().updateScore()