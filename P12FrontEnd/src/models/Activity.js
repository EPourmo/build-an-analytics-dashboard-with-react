export default class Activity {
  constructor(sessions) {
    this.sessions = sessions;
  }

  minWeigth() {
    const minW = this.sessions.reduce((prev, curr) =>
      prev.kilogram < curr.kilogram ? prev : curr
    );
    console.log(minW);
    // return minW;
  }
}
