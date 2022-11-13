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

  fromDict(userData){
    this._id = userData["id"];
    this.code = userData["code"];
    this.fullname = userData["fullname"];
    this.brand = userData["brand"];
    this.number = userData["number"];
    this.color = userData["color"];
    return this;
  }
}

User._idCounter = 1;