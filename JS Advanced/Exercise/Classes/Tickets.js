function tickets(destinations, criteria) {
  let result = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (let ticket of destinations) {
    let [destination, price, status] = ticket.split("|");
    let newDestination = new Ticket(destination, price, status);
    result.push(newDestination);
  }

  if (criteria == "destination") {
    result.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (criteria == "price") {
    result.sort((a, b) => a.price - b.price);
  } else if (criteria == "status") {
    result.sort((a, b) => a.status.localeCompare(b.status));
  }

  return result;
}

console.log(tickets(
  [
    "Philadelphia|94.20|available",

    "New York City|95.99|available",

    "New York City|95.99|sold",

    "Boston|126.20|departed",
  ],

  "status"
))
