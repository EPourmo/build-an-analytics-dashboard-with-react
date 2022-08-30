export default class Performance {
  constructor(perfType, perfData) {
    this.perfType = perfType;
    this.perfData = perfData;
  }

  getOrganizedData() {
    const newData = this.perfData.map((obj, index) => {
      if (obj.kind === index + 1) {
        return {
          ...obj,
          kind: Object.values(this.perfType)[index],
        };
      }
    });
    return newData;
  }
}
