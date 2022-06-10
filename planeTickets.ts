interface Iticket {
	flightClass: "First" | "Economic" | "Points"
	departurePlace: string,
	arrivalPlace: string,
	price: number,
	Seats: number
}
interface IticketPointsClass {
	flightClass: "Points"
}
interface IticketEconomicClass extends Iticket {
	flightClass: "Economic"
	baggageWeight: number
}
interface IticketFirstClass extends Iticket {
	flightClass: "First",
	baggageWeight: number,
	FoodList: string[]
}

type Tticket = IticketEconomicClass | IticketFirstClass | IticketPointsClass

function showTicketInformation(ticket: Tticket): void {
	for(let [key, value] of Object.entries(ticket)) {
		console.log(`${key}: ${value}`);
	}
}