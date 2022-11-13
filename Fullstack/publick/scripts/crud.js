class UserCollection {
    constructor() {
      this.items = [];
  
    }
    get count() {
      return this.items.length;
    }
    async create(userData) {
      let resp = await fetch("http://localhost:3000/users",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
      if (!resp.ok) {
        alert("Error creating user");
        return null;
      }
      return new User().fromDict(await resp.json());
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
  
    fromArray(userDataArray) {
      this.items = [];
      for (let userData of userDataArray) {
        this.items.push(new User().fromDict(userData));
      }
      return this.items;
    }
  
    async getAll() {
      let resp = await fetch("http://localhost:3000/users");
      if (!resp.ok) {
        alert("Error Loading");
        return [];
      }
      let userDataArray = await resp.json();
      return this.fromArray(userDataArray);;
    }
    async update(id, updatedUser) {
      let resp = await fetch(`http://localhost:3000/users/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedUser),
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
      if (!resp.ok) {
        alert("Error updating user");
        return null;
      }
      return new User().fromDict(await resp.json());
    }
    async delete(id) {
      let resp = await fetch(`http://localhost:3000/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!resp.ok) {
        alert("Error deleting user");
        return null;
      }
      return new User().fromDict(await resp.json());
    }
  }