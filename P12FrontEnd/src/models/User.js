export default class User {
  constructor(name, score, keyData) {
    this.name = name;
    this.score = score;
    this.calorie = keyData.calorieCount;
    this.protein = keyData.proteinCount;
    this.carbohydrate = keyData.carbohydrateCount;
    this.lipid = keyData.lipidCount;
  }
}
