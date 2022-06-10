class Concert {
	place: "theater"
};
class Theater {
	place: "forum"
};
class Sport {
	place: "Coliseum"
};

type eventType = Concert | Theater | Sport;

function getEvent(myEvent: eventType): string {
	return myEvent.place;
}
