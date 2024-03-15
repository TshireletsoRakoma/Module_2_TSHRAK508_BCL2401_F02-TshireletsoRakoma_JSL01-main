const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const existingGoals = goalList.querySelectorAll('li');

    // Check if the goal already exists using Array.some()
    const isDuplicate = Array.from(existingGoals).some(goal => {
        return goal.textContent.trim() === goalInput.trim();
    });

    // If a duplicate is found, display an alert and exit the function
    if (isDuplicate) {
        alert("Goal already exists!");
        return;
    }

    // If it's not a duplicate, proceed with adding it as a new goal
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};
// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);


// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

// Function Declaration:
// This declares a function named addNewGoal using arrow function syntax.

// Getting Input and Existing List:
// goalInput: This line fetches the value of an input element with the id goalInput. It presumably contains the new goal that the user wants to add.
// goalList: This line fetches a list element with the id goalList. It's the container where the goals are displayed.

// Checking for Duplicates:
// existingGoals: It queries all list items (<li>) inside the goalList element.
// isDuplicate: It uses Array.from() to convert the NodeList returned by querySelectorAll into an array. Then, it uses Array.some() to iterate over each list item and check if any item's text content matches the input goal text (after trimming whitespace).

//Alert for Duplicate Goals: 
// If a duplicate goal is found, it shows an alert message and exits the function.

//Adding New Goal:
// If the goal is not a duplicate, it creates a new list item (<li>), sets its text content to the input goal text, and appends it to the goalList.
// Overall, this function ensures that duplicate goals are not added to the list, providing a clean user experience. 
