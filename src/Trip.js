class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userId;
    this.destinationID = trip.destinationID;
    this.traverlers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
  }
}

export default Trip;
