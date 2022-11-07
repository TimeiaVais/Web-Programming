class Car_user {
    constructor(code, fullname, brand, number, color){
        this.code = code;
        this.fullname = fullname;
        this.brand = brand;
        this.number = number;
        this.color = color;
        this._id = Car_user._isCounter++;
    }

    get fullname(){
        return this._fullname
    }

    set fullname(value) {
        const MIN_FULLNAME_LENGTH = 10;
        if (value?.length < MIN_FULLNAME_LENGTH)
            throw 'Fullname is to short. Need more ${MIN_FULLNAME_LENGHT - value?.lenght} symbols';
        this._fullname = fullname;
    }

    get number(){
        return this._number
    }

    set number(value){
        const MIN_NUMBER_LENGTH = 8;
        if (value?.length< MIN_NUMBER_LENGTH)
            throw 'Number is to short . Need more ${MIN_NUMBER_LENGTH - value?.length} symbols';
        this._number = number;
    }

    get id (){
        return this._id;
    }

    get settablePropertiesList(){
        return ["code", "fullname", "brand", "number", "color"];
    }

    get gettablePropertiesList(){
        return ["id", ...this,this.settablePropertiesList];
    }

}
Car_user._idCounter = 1;