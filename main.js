import $ from "jquery";
import angry from "./images/angry.png";
import angsty from "./images/angsty.png";
import cat from "./images/cat.png";
import grumpy from "./images/grumpy.png";
import hangry from "./images/hangry.png";
import meinv from "./images/meinv.png";
import shuaige from "./images/shuaige.png";
import smiley from "./images/smiley.png";
import unsure from "./images/unsure.png";
import youngster from "./images/youngster.png";
import gameSound from "./music/chewing-a-pop-corn.mp3";
import countdownBeep from "./music/short-beep-countdown.mp3";

//* 10 customer images to source

const photos = [
  angry,
  angsty,
  cat,
  grumpy,
  hangry,
  meinv,
  shuaige,
  smiley,
  unsure,
  youngster,
];

const time = {
  seconds: 300,
};

const soundEffect = () => {
  const gameSounds = new Audio(gameSound);
  gameSounds.play();
};

const countdownBeeps = () => {
  const Beep = new Audio(countdownBeep);
  Beep.play();
};

//===========Model/State ==================

const app = {
  dishPrice: {
    rice: Math.random().toFixed(1),
    veg: (0.9 + Math.random()).toFixed(1),
    meat: (2 + Math.random()).toFixed(1),
    fish: (2.8 + Math.random()).toFixed(1),
    veggieMeat: (1 + Math.random()).toFixed(1),
    egg: (0.8 + Math.random()).toFixed(1),
    saltedEgg: 1.3,
    moreCurry: 0.5,
    kimchi: (1.5 + Math.random()).toFixed(1),
    prawn: (2.3 + Math.random()).toFixed(1),
    otah: (1.1 + Math.random()).toFixed(1),
    bambooShoot: (1.2 + Math.random()).toFixed(1),
  },
  num: 0,
  custNum: 0,
  cashGiven: 0,
  changeReturned: 0,
  yourCalculation: 0,
  totalEarned: 0,
  correctCost: 0,
  correctTotal: 0,
  discrepancy: 0,
  totalDiscrepancy: 0,
  promptInput: [],
  outcomes: [
    "No scolding from boss today!",
    "Boss wants you to pay from your own pocket :(",
    "Boss doesn't need you to come in tomorrow anymore!",
  ],
};

//build each customer archetype here using classes

const orders = [];
class Customer {
  constructor(
    type,
    rice,
    veg,
    meat,
    fish,
    veggieMeat,
    egg,
    saltedEgg,
    moreCurry,
    kimchi,
    prawn,
    otah,
    bambooShoot
  ) {
    this.type = type;
    this.rice = rice;
    this.veg = veg;
    this.meat = meat;
    this.fish = fish;
    this.veggieMeat = veggieMeat;
    this.egg = egg;
    this.saltedEgg = saltedEgg;
    this.moreCurry = moreCurry;
    this.kimchi = kimchi;
    this.prawn = prawn;
    this.otah = otah;
    this.bambooShoot = bambooShoot;
  }
  customerIntro() {
    return "Customer Type: " + this.type;
  }
  correctCost() {
    const plate = [
      this.rice,
      this.veg,
      this.meat,
      this.fish,
      this.veggieMeat,
      this.egg,
      this.saltedEgg,
      this.moreCurry,
      this.kimchi,
      this.prawn,
      this.otah,
      this.bambooShoot,
    ];
    const foodPrice = [];
    for (const food in app.dishPrice) {
      foodPrice.push(app.dishPrice[food]);
    }
    const correctPrice = [];
    for (let food = 0; food < plate.length; food++) {
      const subtotal = plate[food] * foodPrice[food];
      if (typeof subtotal === "number") {
        correctPrice.push(subtotal);
      }
    }

    const initialVal = 0;
    const Total = correctPrice.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialVal
    );
    return Total.toFixed(2);
  }
  cashGivenCust() {
    return (
      parseFloat(this.correctCost()) +
      Math.random() * 15 +
      Math.random() * 9 -
      Math.random() * 3
    ).toFixed(1);
  }
  order() {
    const plate = [
      this.rice,
      this.veg,
      this.meat,
      this.fish,
      this.veggieMeat,
      this.egg,
      this.saltedEgg,
      this.moreCurry,
      this.kimchi,
      this.prawn,
      this.otah,
      this.bambooShoot,
    ];
    const words = [
      "Rice: ",
      "Vegetable: ",
      "Meat: ",
      "Fish: ",
      "Veg-Meat: ",
      "Egg: ",
      "Salted Egg: ",
      "Extra Curry: ",
      "Kimchi: ",
      "Prawn: ",
      "Otah: ",
      "Bamboo Shoot: ",
    ];
    for (let i = 0; i < plate.length; i++) {
      if (plate[i] !== 0) {
        orders.push(words[i] + plate[i]);
      }
    }
    return orders;
  }
}

// const renderFood = () => {
//   const easy = new Customer(
//     "Unmemorable Customer",
//     Math.round(Math.random() * 2),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 4),
//     Math.round(Math.random() * 2),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 2),
//     Math.round(Math.random() * 4),
//     0,
//     0,
//     0,
//     0,
//     0
//   );

//   const medium = new Customer(
//     "Picky Customer",
//     Math.round(Math.random() * 5),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 4),
//     Math.round(Math.random() * 2),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 4),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 2),
//     Math.round(Math.random() * 5),
//     0,
//     0
//   );

//   const hard = new Customer(
//     "The Impossible Customer",
//     Math.round(Math.random() * 6),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 4),
//     Math.round(Math.random() * 6),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 5),
//     Math.round(Math.random() * 4),
//     Math.round(Math.random() * 3),
//     Math.round(Math.random() * 6),
//     Math.round(Math.random() * 5),
//     Math.round(Math.random() * 4),
//     Math.round(Math.random() * 6)
//   );

//   const difficulty = [easy, medium, hard];
//   const array = difficulty[app.num].order();
//   $("#orderlist").empty();
//   for (const item of array) {
//     const $fooditem = $("<p>").text(`${item}`).addClass("fooditem");
//     $("#orderlist").append($fooditem);
//   }
//   console.log("array", array);
//   $("#orderlist").text("hello bye hello");
//   console.log("hello bye hello");
// };

//* 9 customer prompt scenarios
const scene0 = "Customer: The fish is how much again? The veg leh? The meat?";
const scene1 = "Customer: Ehhhhh... here can use Visa Paywave?";
const scene2 =
  "Customer: I just want to try one piece of curry potato... can give me for free?";
const scene3 =
  "Boss is standing behind you. He says, 'The queue is so long! You need to serve faster!' Your reply:";
const scene4 =
  "A New Challenger Approaches! Customer demands to know why their veggie dish is being charged at $1.80 instead of $1.10.";
const scene5 =
  "[Stun like vegetable] Customer wants to know if your long beans were ethically-sourced-100%-all-natural-certified-organic-fair-trade-cruelty-free... Your reply:";
const scene6 =
  "Irate Customer Returns: Auntie just now I order one is fried Chicken or Fish cutlet?";
const scene7 = "Customer: Tsk! So expensive ah!";
const scene8 =
  "Your cooking is on fire! You need to attend to it. Reply attend / ignore: ";
const situations = [
  scene0,
  scene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7,
  scene8,
];

//============View=========(static divs not included in render)

const renderClock = () => {
  const minusSec = () => {
    time.seconds--;
    $("#timerdiv").text(time.seconds + " SECONDS LEFT");
  };
  setInterval(minusSec, 1000);
};

const renderPhoto = () => {
  //* generate random photo
  const randURL = photos[Math.floor(Math.random() * 10)];
  const $customerPhoto = $("<img>")
    .attr("src", `${randURL}`)
    .addClass("custPhoto");
  $("#top-2").append($customerPhoto);
};

const renderPricelist = () => {
  for (const food in app.dishPrice) {
    const $foodprice = $("<p>").attr("id", "foodprice");
    $foodprice.text(`${food}, ${app.dishPrice[food]}`);
    $("#pricelist").append($foodprice);
  }
};
renderPricelist();

const renderOrder = () => {
  //*start with clearing top-2 and top-1
  $("#top-2").empty();
  $("#intro").empty();
  $("#orderlist").empty();
  //* append customer order
  // renderFood(); //!
  const easy = new Customer(
    "Unmemorable Customer",
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 4),
    0,
    0,
    0,
    0,
    0
  );

  const medium = new Customer(
    "Picky Customer",
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 5),
    0,
    0
  );

  const hard = new Customer(
    "The Impossible Customer",
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6)
  );
  const difficulty = [easy, medium, hard];
  const array = difficulty[app.num].order();
  $("#orderlist").empty();
  for (const item of array) {
    const $fooditem = $("<p>").text(`${item}`).addClass("fooditem");
    $("#orderlist").append($fooditem);
  }
  //* append photo
  renderPhoto();
  //* append customer archetype under photo
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${difficulty[app.num].customerIntro()}`);
  $("#top-2").append($randomCustomer);
  //* every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  //* displaying cash given by customer from archetypes
  app.cashGiven = difficulty[app.num].cashGivenCust();
  $("#cashGiven").text(`${app.cashGiven}` + "0");
  app.correctCost = difficulty[app.num].correctCost();
  console.log("renderOrder", "app.correctCost", app.correctCost);
  console.log("=====================");
};

const renderOrder1 = () => {
  //*start with clearing top-2 and top-1
  $("#top-2").empty();
  //* append customer order
  // renderFood(); //!
  const easy = new Customer(
    "Unmemorable Customer",
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 4),
    0,
    0,
    0,
    0,
    0
  );

  const medium = new Customer(
    "Picky Customer",
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 5),
    0,
    0
  );

  const hard = new Customer(
    "The Impossible Customer",
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6)
  );
  const difficulty = [easy, medium, hard];
  const array = difficulty[app.num].order();
  $("#orderlist").empty();
  for (let i = 0; i < array.length; i++) {
    const $fooditem = $("<ul>").text(`${array[i]}`).addClass("fooditem");
    $("#orderlist").append($fooditem);
  }
  const $endReceipt = $("<h1>").text("Next Order:");
  $("#orderlist").prepend($endReceipt);
  //* append photo
  renderPhoto();
  //* append customer archetype under photo
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${difficulty[app.num].customerIntro()}`);
  $("#top-2").append($randomCustomer);
  //* every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  //* displaying cash given by customer from archetypes
  app.cashGiven = difficulty[app.num].cashGivenCust();
  $("#cashGiven").text(`${app.cashGiven}`);
  app.correctCost = difficulty[app.num].correctCost();
  console.log("renderOrder1", "app.correctCost", app.correctCost);
  console.log("======================");
  calculate();
  //* force player to click on "Return Change" or else game will end
  if ($("#cashChange").val() === "") {
    alert("The customer escaped without paying!");
    endGame();
  }
  //* countdown beep to inform player it's going to change soon
  setTimeout(countdownBeeps, 6000);
};

const renderPrompt = () => {
  const random9 = Math.floor(Math.random() * 9);
  app.promptInput.push(prompt(situations[random9]));
  if (
    random9 === 8 &&
    app.promptInput[app.promptInput.length - 1] === "attend"
  ) {
    alert("Crisis averted! You may proceed.");
  } else if (random9 === 8) {
    alert("YOUR KITCHEN IS ON FIRE! TAKE THE CASH AND RUN!!");
    endGame();
  }
};

//============Controller====================

const startgame = () => {
  $(".popup-overlay").hide();
  $(".bottomdiv").hide();
  $("#top-2").hide();
  $("#top-3").hide();
  //!remove return change buttons and just use value in field
  $("#customerNumber").text("0");
  $("#startgame").on("click", () => {
    $(".bottomdiv").show();
    $("#top-2").show();
    $("#top-3").show();
    $("#startgame").hide();
    $("#customerNumber").text(`${app.custNum}`);
    let diffLv = prompt("0 - EASY \n 1 - MEDIUM \n 2 - HARD");
    diffLv = parseInt(diffLv);
    if (diffLv === 0) {
      app.num = 0;
    } else if (diffLv === 1) {
      app.num = 1;
    } else if (diffLv === 2) {
      app.num = 2;
    } else {
      alert("Please select either 0, 1 or 2.");
      location.reload();
    }
    renderOrder();
  });
};

startgame();

const calculate = () => {
  // calculate the order
  //* retrieve value from input field
  app.changeReturned = $("#cashChange").val();
  app.yourCalculation = app.cashGiven - app.changeReturned;
  console.log("yourCalculation", app.yourCalculation);
  app.totalEarned += app.yourCalculation;
  console.log("totalEarned", app.totalEarned);
  //* display total earned in #top-3 div
  $("#totalEarned").text(`${app.totalEarned}`);
  //* calculated the actual total and store in app.correctTotal
  app.correctTotal += parseFloat(app.correctCost);
  console.log("correctTotal", app.correctTotal);
  app.discrepancy = app.totalEarned - app.correctTotal;
  console.log("discrepancy", app.discrepancy);
  renderPrompt();
};

const resultBoard = () => {
  const disc = Math.abs(app.discrepancy);
  if (disc < 3) {
    $("#score-tier").text("EMPLOYEE OF THE MONTH");
    $("#score-comments").text(`${app.outcomes[0]}`);
  } else if (disc < 6 && app.discrepancy >= 3) {
    $("#score-tier").text("COULD BE BETTER");
    $("#score-comments").text(`${app.outcomes[1]}`);
  } else {
    $("#score-tier").text("SEE YOU NEVER");
    $("#score-comments").text(`${app.outcomes[2]}`);
  }
};

const inputCompilation = () => {
  for (let i = 0; i < app.promptInput.length; i++) {
    const $input = $("<h3>")
      .text(`${app.promptInput[i]}`)
      .attr("id", "promptInput");
    $(".popup-content3").append($input);
  }
};

const endGame = () => {
  soundEffect();
  alert("Lunch is over!");
  //* create window pop up
  $("#page").fadeOut("slow");
  $(".popup-overlay").fadeIn("slow");
  //* create text to indicate comments based on score
  resultBoard();
  //* display the totalEarned, correctTotal, discrepancy values
  app.totalEarned = parseFloat(app.totalEarned).toFixed(2);
  $("#earned").text(`${app.totalEarned}`);
  app.correctTotal = parseFloat(app.correctTotal).toFixed(2);
  $("#correctTotal").text(`${app.correctTotal}`);
  app.totalDiscrepancy = app.totalEarned - app.correctTotal;
  console.log("total disc", app.totalDiscrepancy);
  app.totalDiscrepancy = parseFloat(app.totalDiscrepancy).toFixed(2);
  $("#total-discrepancy").text(`${app.totalDiscrepancy}`);
  //* add comments that were input during the game to review for fun
  inputCompilation();
  //* add exit or reset buttons
  $("#close").on("click", () => {
    window.close();
  });
  $("#reset").on("click", () => {
    location.reload();
  });
};

const main = () => {
  // start with state of custNum= 1
  $("#startTimerButton").on("click", (event) => {
    event.preventDefault();
    $("#startTimerButton").fadeOut("slow");
    setTimeout(countdownBeeps, 6500);
    renderClock();
    setInterval(renderOrder1, 10_000); //!30000
    setTimeout(endGame, 35_000); //!300000
  });
};
main();
