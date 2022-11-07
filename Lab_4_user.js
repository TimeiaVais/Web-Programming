class User {

    constructor(code, fullname, brand, number, color) {
      this.code = code;
      this.fullname = fullname;
      this.brand = brand;
      this.number = number;
      this.color = color;
      this._id = User._idCounter++;
    }
  
    get id() {
      return this._id;
    }
  
    get settablePropertiesList() {
      return ["code", "fullname", "brand", "number", "color"];
    }
  
    get gettablePropertiesList() {
      return ["id", ...this.setablePropertisList];
    }
  }
  
  User._idCounter = 1;