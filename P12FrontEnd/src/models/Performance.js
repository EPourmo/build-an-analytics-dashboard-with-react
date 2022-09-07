/**
 * Class representing a user performances
 */
export default class Performance {
  /**
   * @param {Object} perfType
   * @param {Array} perfData
   */
  constructor(perfType, perfData) {
    this.perfType = perfType;
    this.perfData = perfData;
  }

  /**
   * Get new organized data with french activity type (kind) in the same array
   * @returns {Array} new array reorganized
   */
  getOrganizedData() {
    const perfTypeFr = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
    const newData = this.perfData.map((obj, index) => {
      if (obj.kind === index + 1) {
        return {
          ...obj,
          kind: Object.values(perfTypeFr)[index],
        };
      }
    });

    const newDataReverse = newData.reverse();
    return newDataReverse;
  }
}
