// Properties and methods
class Training {
	constructor(private category: string, private title: string, private noOfDays: number) {
	}
}

class CartWithTrainings {
	private trainings: Training[] = [];

	static maxTraining: number = 10;

	constructor(public cartId: string) {
	}

	addTraining(training: Training) {
		if (this.trainings.length >= CartWithTrainings.maxTraining) {
			throw new Error('To many courses in your Cart.');
		}
		this.trainings.push(training);
	}
}

// Creating a new instance
var coursesCart = new CartWithTrainings('Cart1');

// Accessing a public instance property
var nameCart = coursesCart.cartId;

// Calling a public instance method
coursesCart.addTraining(new Training('VUE', 'Vue for Ugitech', 5));

// Accessing a public static property
var maxTrainings = CartWithTrainings.maxTraining;