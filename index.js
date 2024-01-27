class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    get mean() {
      if (this.data.length === 0) {
        return null;
      } else {
        return this.data.reduce((a, b) => a + b) / this.data.length;
      }
    }
  
    get median() {
      this.data.sort((a, b) => a - b);
      const middleNum = Math.floor(this.data.length / 2);
  
      if (this.data.length % 2 === 0) {
        const median = (this.data[middleNum - 1] + this.data[middleNum]) / 2;
        return median;
      } else {
        return this.data[middleNum];
      }
    }
  
    get mode() {
      const counts = {};
      for (const val of this.data) counts[val] = (counts[val] || 0) + 1;
      const highestOcc = Math.max(...Object.values(counts));
      const modes = Object.keys(counts).filter((val) => counts[val] === highestOcc);
      return modes;
    }
  
    get range() {
      if (this.data.length === 0) {
        return null;
      } else {
        return Math.max(...this.data) - Math.min(...this.data);
      }
    }
  
    get iqr() {
      if (this.data.length === 0) {
        return null;
      } else {
        this.data.sort((a, b) => a - b);
        return this.data[Math.floor(this.data.length * 3 / 4)] - this.data[Math.floor(this.data.length / 4)];
      }
    }
  
    get mad() {
      if (this.data.length === 0) {
        return null;
      } else {
        return this.data.reduce((sum, val) => sum + Math.abs(val - this.mean), 0) / this.data.length;
      }
    }
  
    get variance() {
      if (this.data.length === 0) {
        return null;
      } else {
        return this.data.reduce((sum, val) => sum + (val - this.mean) * (val - this.mean), 0) / this.data.length;
      }
    }
  
    get std() {
      if (this.variance === null) {
        return null;
      } else {
        return Math.sqrt(this.variance);
      }
    }
  }

const examResults = [
    97, 98, 82, 72, 29, 72, 97, 63, 92, 97, 82, 92, 98, 100, 97
];
const list = new Statistics(examResults);
const meanValue = list.mean;
const stdVal = list.std;
console.log(`The mean is ${meanValue} and the standard diviation is ${stdVal}`);
