// Define the Person class
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    // Exercise method
    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    // Fetch job method
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

// Define the Programmer class that extends Person
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true; // Default value for busy property
    }

    // Complete task method
    completeTask() {
        this.busy = false;
    }

    // Accept new task method
    acceptNewTask() {
        this.busy = true;
    }

    // Offer new task method
    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    // Learn new language method
    learnLanguage(language) {
        this.languages.push(language);
    }

    // List languages method
    listLanguages() {
        console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}`);
    }
}

// Testing the classes
const programmer1 = new Programmer('Daquan', 'Front-end Developer', 30, ['JavaScript', 'HTML', 'CSS']);
programmer1.fetchJob();
programmer1.exercise();
programmer1.completeTask();
programmer1.offerNewTask();
programmer1.listLanguages();

const programmer2 = new Programmer('Raynard', 'Back-end Developer', 35, ['Java', 'Python']);
programmer2.fetchJob();
programmer2.exercise();
programmer2.acceptNewTask();
programmer2.offerNewTask();
programmer2.learnLanguage('React');
programmer2.listLanguages();

const programmer3 = new Programmer('Tina', 'Full-Stack Developer', 23, ['Node', 'MySQL']);
programmer2.fetchJob();
programmer2.exercise();
programmer2.acceptNewTask();
programmer2.offerNewTask();
programmer2.learnLanguage('React');
programmer2.listLanguages();
