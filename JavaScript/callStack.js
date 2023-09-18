// Example 1: Wakeup routine explaining the call stack
const takeShower = () => {
    return "Showering";
}

const brushTeeth = () => {
    return "Brushing teeth";
}

const eatBreakfast = () => {
    let meal = cookFood();
    return "Eating: " + meal;
}

const cookFood = () => {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random() * items.length)];
}

const wakeUp = () => {
    takeShower();
    eatBreakfast();
    console.log("Ready to go to work!");
}

// driver code
wakeUp();