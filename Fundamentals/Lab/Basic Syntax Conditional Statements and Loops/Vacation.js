function vacation(count, type, day) {
  let price = 0;

  switch (day) {
    case "Friday":
      if (type == "Students") {
        price = 8.45;
      } else if (type == "Business") {
        price = 10.9;
      } else if (type == "Regular") {
        price = 15;
      }
      break;
    case "Saturday":
      if (type == "Students") {
        price = 9.8;
      } else if (type == "Business") {
        price = 15.6;
      } else if (type == "Regular") {
        price = 20;
      }
      break;
    case "Sunday":
      if (type == "Students") {
        price = 10.46;
      } else if (type == "Business") {
        price = 16;
      } else if (type == "Regular") {
        price = 22.5;
      }
      break;
    default:
      break;
  }

  if (type == "Students" && count >= 30) {
    price = price - (price * 0.15);
  } else if (type == "Business" && count >= 100) {
    price = price - (10 * price);
  } else if (type == "Regular" && (count >= 10 && count <= 20)) {
    price = price - (price * 0.05);
  }

  let totalPrice = count * price;
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");

