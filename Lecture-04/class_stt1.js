class dog {
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`This is' ${this.name}`);
    }
    static bark(){
        console.log('Woof!');
    }
}

const Mydog = new dog('Buster ! ');
Mydog.introduce();
dog.bark();