import $ from "jquery";

//===========Model/State ==================

//build each customer archetype here using classes

class customer {
  constructor(
    archetype,
    rice,
    veg,
    meat,
    fish,
    veggieMeat,
    egg,
    saltedEgg,
    moreCurry,
    correctPrice
  ) {
    this.archetype = archetype;
    this.rice = rice;
    this.veg = veg;
    this.meat = meat;
    this.fish = fish;
    this.veggieMeat = veggieMeat;
    this.egg = egg;
    this.saltedEgg = saltedEgg;
    this.moreCurry = moreCurry;
    this.correctPrice = correctPrice;
  }
}

//* 16 customer archetypes to code out
const cust0 = new customer(
  "Unmemorable Customer X",
  1,
  2,
  1,
  0,
  0,
  0,
  0,
  0,
  4.8
);
// console.log(cust0.archetype);

const cust1 = new customer("I'm Taking Orders", 4, 4, 4, 0, 0, 1, 0, 1, 17);

const cust2 = new customer(
  "My Colleagues Are Too Busy To Come Out",
  3,
  2,
  3,
  1,
  1,
  0,
  1,
  2,
  17.6
);

const cust3 = new customer(
  "Unmemorable Customer Y",
  2,
  2,
  3,
  0,
  1,
  0,
  0,
  2,
  12.4
);

const cust4 = new customer("Unmemorable Customer Z", 1, 1, 1, 0, 0, 0, 1, 0, 5);

const cust5 = new customer(
  "Let Me Pay for Everyone!",
  6,
  3,
  7,
  2,
  2,
  2,
  0,
  4,
  37.1
);

const cust6 = new customer(
  "Rice is Too Much Carbs",
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  10.3
);

const cust7 = new customer(
  "I Want To Try Everything",
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  12.5
);

const cust8 = new customer(
  "Hungrier Than A Hippo",
  2,
  2,
  1,
  1,
  0,
  2,
  0,
  2,
  13.1
);

const cust9 = new customer(
  "Unmemorable Customer Z",
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  5.7
);

const cust10 = new customer("Wo Yao Zhe Ge Na Ge", 1, 1, 1, 0, 0, 0, 1, 0, 5);

const cust11 = new customer("Almost Vegetarian", 1, 3, 0, 0, 0, 0, 0, 0, 5);

const cust12 = new customer("That Was Weird", 1, 1, 0, 0, 0, 0, 2, 3, 5.6);

const cust13 = new customer(
  "Unmemorable Customer B",
  2,
  1,
  0,
  2,
  1,
  0,
  0,
  1,
  11.2
);

const cust14 = new customer("All About Proteins", 1, 1, 1, 0, 0, 0, 1, 0, 7.9);

const cust15 = new customer(
  "Unmemorable Customer C",
  3,
  3,
  3,
  0,
  3,
  1,
  1,
  3,
  21
);

const archetypes = [
  cust0,
  cust1,
  cust2,
  cust3,
  cust4,
  cust5,
  cust6,
  cust7,
  cust8,
  cust9,
  cust10,
  cust11,
  cust12,
  cust13,
  cust14,
  cust15,
];

//* 8 customer images to source
const image0 = "";
const image1 = "";
const image2 = "";
const image3 = "";
const image4 = "";
const image5 = "";
const image6 = "";
const image7 = "";
const photos = [image0, image1, image2, image3, image4, image5, image6, image7];

//* customer prompt scenarios
const prompt0 = prompt(
  "Customer: The fish is how much again? The veg leh? The meat?"
);
const prompt1 = prompt("Customer: Ehhhhh... here can use Visa Paywave?");
const prompt2 = prompt(
  "Customer: I just want to try one piece of curry potato... can give me for free?"
);
const prompt3 = prompt(
  "Boss is standing behind you! 'The queue is so long! You need to serve faster!'"
);
const prompt4 = prompt(
  "Your Challenger Approaches! Customer demands to know why their veggie dish is being charged at $1.80 instead of $1.10."
);
const prompt5 = prompt(
  "Customer wants to know if your long beans were ethically-sourced-100%-all-natural-certified-organic-fair-trade-cruelty-free... You are stun like vegetable. Your reply:"
);
const situations = [prompt0, prompt1, prompt2, prompt3, prompt4, prompt5];

const app = {
  dishPrice: {
    riceP: 0.4,
    vegP: 1.1,
    meatP: 2.2,
    fishP: 3.5,
    veggieMeatP: 1.8,
    eggP: 1.7,
    saltedEggP: 1.3,
    moreCurryP: 0.5,
  },
  customers: {
    generatedCustomer: archetypes[Math.floor(Math.random() * 16)],
  },
  custNum: 0,
  cashGiven: [4, 5, 10, 20, 30, 50],
  changeReturned: 0,
  yourCalculation: 0,
  totalEarned: 0,
  correctCost: 0,
  correctTotal: 0,
  discrepancy: 0,
  outcomes: [
    "No scolding from boss today!",
    "Boss wants you to pay from your own pocket :(",
    "Boss doesn't need you to come in tomorrow anymore",
  ],
};

//============View=========(static divs not included in render)

const rendertop1 = () => {};

const rendertop2 = () => {};

const rendertop3 = () => {};

const renderbot2 = () => {};

const renderPrompt = () => {
  if (custNum === 1) {
    alert(
      "It's lunch hour! Tabulate the orders of each customer and return them the correct change!"
    );
  } else if (custNum % 2 === 0 || custNum % 5 === 0) {
    //* load a random prompt from array of prompts
  } else if (custNum % 7 === 0) {
    let fire = prompt("Your cooking is on fire! Reply 'Attend' or 'Ignore'.");
    if (fire === "Attend") {
      alert("Crisis Averted!");
    } else {
      alert("Oh no! Your stall is now on fire.");
      //* game will end if stall is on fire. Load endGame and display separate result if total <$150
      endGame();
    }
  } else if (custNum % 11 === 0) {
    let cutlet = prompt(
      "Irate Customer Returns: Auntie just now I order one is fried Chicken or Fish cutlet?"
    );
    if (cutlet.length >= 5) {
      alert("Customer: Tsk! So expensive ah!");
    } else if (cutlet.length < 5) {
      prompt("Please key in a longer response. (Min 10 char)");
      alert(
        "Customer: This cai png so expensive and auntie so rude! Next time I don't eat here already!"
      );
    }
  }
};

//============Controller====================

const generateCust = () => {
  // start with state of custNum= 1
  //every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  //! ALERT intro & instructions if custNum===1
  //prompts if custNum is prime
  //generate random output of custOrder() in #top-1
  //generate random output img of cust in #top-2 using custImg()
  //! PROMPT injection scenario (randomly generated) if custNum can be divided by 3 or 5
  //! input field must contain 1 word related to eating with at least 7 characters
  //? is it possible to save the input and put in an array, then display in endGame()?
};

generateCust();

const main = () => {
  //upon clicking "Return Change" button, invoke addToTotal(), which is:
  // cash given will be given based on custType
  // (teen girl always gives $4, normal guy always gives $10, group always gives $50, etc)
  // cash - change = yourCalculation
  // totalEarned += yourCalculation
  //------------
  //correctCost() will include function to calculate actual cost (correctCost) of order
  // correctCost = () => {<tabulate order> --> //? how do you do this?
  // return correctTotal}
  //------------
  // discrepancy = correctTotal - totalEarned
  // caiPngPro button can be used to toggle to see discrepancy div in top-3 div
  //------------
  //* if totalEarned >= $150, invoke endGame()
};
main();

const endGame = () => {
  //! create window pop up
  // display the no. of customers served, totalEarned, correctTotal, discrepancy values
  // create text to indicate comments based on score, like so:
  //* if discrepancy (<$1, return "No scolding from boss today!")
  //* ($1<= X < $5 return "Boss wants you to pay from your own pocket :(")
  //* ($5<= X return "Boss doesn't need you to come in tomorrow anymore")
};
endGame();
