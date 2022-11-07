class Car_userCollection {
    constructor() {
      this.items = [];
    }
    get count() {
        return this.items.length;
    }
    add(user) {
        if (!(user instanceof Car_user))
          throw `${user} is not instance of Car_user`;
        this.items.push(user);
    }
    create(userData) {
        let newcar_user = new Car_user(userData.code, userData.fullname, userData.brand, userData.number, userData.color);
        this.items.push(newUser);
    }
    getById(id) {
        return this.items.find(user => user.id == id);
    }
    getAll() {
        return [...this.items];
    }
    update(id, updatedCar_user) {
        let user = this.getById(id);
        if (!user)
          throw `Not found user with id ${id}`;
        for (let key of user.settablePropertiesList)
        if (updatedCar_user[key])
        user[key] = updatedCar_user[key];
    }
    delete(id) {
        let userIndex = this.items.findIndex(user => user.id == id);
        if (userIndex == -1)
          throw `Not found user with id ${id}`;
        this.items.splice(userIndex, 1);
    }
}