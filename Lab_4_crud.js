class Car_userCollection {
    constructor() {
      this.items = [];
    }
    get count() {
        return this.items.length;
    }
    add(car_user) {
        if (!(car_user instanceof Car_user))
          throw `${car_user} is not instance of Car_user`;
        this.items.push(car_user);
    }
    create(car_userData) {
        let newcar_user = new Car_user(car_userData.code, car_userData.fullname, car_userData.brand, car_userData.number, car_userData.color);
        this.items.push(newCar_user);
    }
    getById(id) {
        return this.items.find(car_user => car_user.id == id);
    }
    getAll() {
        return [...this.items];
    }
    update(id, updatedCar_user) {
        let car_user = this.getById(id);
        if (!car_user)
          throw `Not found user with id ${id}`;
        for (let key of car_user.settablePropertiesList)
        if (updatedCar_user[key])
        user[key] = updatedCar_user[key];
    }
    delete(id) {
        let car_userIndex = this.items.findIndex(car_user => car_user.id == id);
        if (car_userIndex == -1)
          throw `Not found car_user with id ${id}`;
        this.items.splice(car_userIndex, 1);
    }
}