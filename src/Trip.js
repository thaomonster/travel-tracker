class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.pastTrips = [];
    this.presentTrips = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
  }


}

export default Trip;
