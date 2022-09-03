export default class User {
  constructor(name, score, keyData) {
    this.name = name;
    this.score = score;
    this.calorie = keyData.calorieCount;
    this.protein = keyData.proteinCount;
    this.carbohydrate = keyData.carbohydrateCount;
    this.lipid = keyData.lipidCount;
  }

  userDailyAllowances() {
    const calorieWithComma = this.calorie
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return [
      {
        id: 1,
        quantity: `${calorieWithComma}kCal`,
        tag: "Calories",
        iconName: "energy",
        bgColor: "rgba(255, 0, 0, 0.07)",
        color: "#FF0000",
        width: "15.8",
        height: "20",
      },
      {
        id: 2,
        quantity: `${this.protein}g`,
        tag: "Proteines",
        iconName: "chicken",
        bgColor: "rgba(74, 184, 255, 0.1)",
        color: "#4AB8FF",
        width: "18.84",
        height: "18.74",
      },
      {
        id: 3,
        quantity: `${this.carbohydrate}g`,
        tag: "Glucides",
        iconName: "apple",
        bgColor: "rgb(249,206,35, 0.1)",
        color: "#FDCC0C",
        width: "16.81",
        height: "20",
      },
      {
        id: 4,
        quantity: `${this.lipid}g`,
        tag: "Lipides",
        iconName: "cheeseburger",
        bgColor: "rgb(253,81,129, 0.1)",
        color: "#FD5181",
        width: "20",
        height: "18.75",
      },
    ];
  }
}
