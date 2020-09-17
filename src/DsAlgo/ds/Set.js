/*
  Did this at freecodecamp
*/

/* 

  My solution
  Problem with my solution: I calculate size everytime
  
*/
export default class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  add(value) {
    if (this.dictionary[value]) return false;
    /* 
      setting value to true in dictionary means that it
      has been added
    */
    this.dictionary[value] = true;
    return true;
  }

  remove(value) {
    const data = this.dictionary[value];
    if (data !== undefined) {
      /* 
        Setting to undefined will be equal to removing
        I don't like the delete method because js advices against it
        But freecodecamp wasn't accepting my answer like this
      */
      delete this.dictionary[value];
      // We need to return the value that we deleted
      return value;
    }
  }
  /*
    I could have also just maintained a length 
    variable, instead of calculating it again and again
  */
  size() {
    let count = 0;
    Object.keys(this.dictionary).forEach((key) => {
      if (this.dictionary[key]) count++;
    });
    return count;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }
  // change code below this line
  intersection(setB) {
    const mainSet = this.size() < setB.size() ? this : setB;
    const otherSet = this.size() < setB.size() ? setB : this;
    const newSet = new Set();
    mainSet.values().forEach((value) => {
      if (otherSet.has(value)) newSet.add(value);
    });
    console.log(newSet.values);
    return newSet;
  }
  // change code above this line
}

// Freecodecamp's solution:
class Set1 {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
}
