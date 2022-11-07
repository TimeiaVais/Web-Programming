class UserCollection {
    constructor() {
      this.items = [];
    }

    get count() {
      return this.items.length;
    }
   
    add(user) {
      if (!(user instanceof User))
        throw `${user} is not instance of User`;
      this.items.push(user);
    }
  
    
    create(userData) {
      let newUser = new User(userData.username, userData.password, userData.image);
      this.items.push(newUser);
    }
  
    getById(id) {
      return this.items.find(user => user.id == id);
    }
    
    getByUsername(fullname) {
      return this.items.find(user => user.fullname.toLowerCase() == fullname.toLowerCase());
    }
    
    getShortUsernames(len) {
      return this.items.filter(user => user.fullname.length <= len);
    }
  
    getByUsernameStart(searchString) {
      return this.items.filter(user => user.fullname.toLowerCase().startsWith(searchString.toLowerCase()));
    }

    getAll() {
      return [...this.items];
    }

    update(id, updatedUser) {
      let user = this.getById(id);
      if (!user)
        throw `Not found user with id ${id}`;
      for (let key of user.settablePropertiesList)
        if (updatedUser[key])
          user[key] = updatedUser[key];
    }
    
    delete(id) {
      let userIndex = this.items.findIndex(user => user.id == id);
      if (userIndex == -1)
        throw `Not found user with id ${id}`;
      this.items.splice(userIndex, 1);
    }
  }