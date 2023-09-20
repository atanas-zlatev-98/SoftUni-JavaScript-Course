function ages(age) {
  let person = " ";

  if (age < 0) {
    console.log("out of bounds");
  } else if (age <= 2) {
    person = "baby";
  } else if (age <= 13) {
    person = "child";
  } else if (age <= 19) {
    person = "teenager";
  } else if (age <= 65) {
    person = "adult";
  } else {
    person = "elder";
  }
  console.log(person);
}

ages(20);
ages(1);
ages(100);
ages(-1);

/*function age(age) {
  /*if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {
    console.log("child");
  } else if (age >= 14 && age <= 19) {
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }

  if (age < 0) {
    console.log("out of bounds");
  } else if (age <= 2) {
    console.log("baby");
  } else if (age <= 13) {
    console.log("child");
  } else if (age <= 19) {
    console.log("teenager");
  } else if (age <= 65) {
    console.log("adult");
  } else {
    console.log("elder");
  }
}

age(20);
age(1);
age(100);
age(-1);*/
