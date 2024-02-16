class FlightBookingSystem{
    constructor(agencyName){
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price){
        let currentFlight = this.flights.find(x=>x.flightNumber === flightNumber);

        if(currentFlight){
            return `Flight ${flightNumber} to ${destination} is already available.`
        }

        this.flights.push({flightNumber,destination,departureTime,price});

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber){
        let currentFlight = this.flights.find(x=>x.flightNumber === flightNumber);

        if(!currentFlight){
           return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({passengerName,flightNumber});
        this.bookingsCount += 1;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber){
        let currentBooking = this.bookings.find(x=> x.passengerName === passengerName && x.flightNumber === flightNumber);

        if(!currentBooking){
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings = this.bookings.filter(x=>x.passengerName !== passengerName && x.flightNumber !== flightNumber);
        this.bookingsCount -= 1;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }

    showBookings(criteria){

        if(this.bookings.length <= 0){
            throw new Error(`No bookings have been made yet.`);
        }

        if(criteria == 'all'){
            let buff = `All bookings(${this.bookingsCount}):\n`;

            for(let flights of this.bookings){
                buff += `${flights.passengerName} booked for flight ${flights.flightNumber}.\n`;
            }

            return buff.trim();

        }else if(criteria == 'cheap'){

            let cheapFlights = this.flights.filter(x=>x.price <= 100);
            
            let buff = "Cheap bookings:\n";

            if(cheapFlights.length === 0){
                return "No cheap bookings found."
            }

            for(let flight of cheapFlights){
                let findPassenger = this.bookings.find(x=>x.flightNumber === flight.flightNumber);
                buff += `${findPassenger.passengerName} booked for flight ${flight.flightNumber}.\n`
            }
            return buff.trim();

        }else if(criteria == 'expensive'){

            let expensiveFlights = this.flights.filter(x=>x.price > 100);
            let buff = "Expensive bookings:\n";

            if(expensiveFlights.length === 0){
                return "No expensive bookings found."
            }

            for(let flight of expensiveFlights){
                let findPassenger = this.bookings.find(x=>x.flightNumber === flight.flightNumber);
                buff += `${findPassenger.passengerName} booked for flight ${flight.flightNumber}.\n`
            }
            return buff.trim();

        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));
