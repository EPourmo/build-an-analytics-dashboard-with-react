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
        bgColor: "#FF0000",
        color: "#FF0000",
        opacityValue: "0.07",
        width: "15.8",
        height: "20",
      },
      {
        id: 2,
        quantity: `${this.protein}g`,
        tag: "Proteines",
        iconName: "chicken",
        bgColor: "#4AB8FF",
        color: "#4AB8FF",
        opacityValue: "0.1",
        width: "18.84",
        height: "18.74",
      },
      {
        id: 3,
        quantity: `${this.carbohydrate}g`,
        tag: "Glucides",
        iconName: "apple",
        bgColor: "#F9CE23",
        color: "#FDCC0C",
        opacityValue: "0.1",
        width: "16.81",
        height: "20",
      },
      {
        id: 4,
        quantity: `${this.lipid}g`,
        tag: "Lipides",
        iconName: "cheeseburger",
        bgColor: "#FD5181",
        color: "#FD5181",
        opacityValue: "0.1",
        width: "20",
        height: "18.75",
      },
    ];
  }
}
