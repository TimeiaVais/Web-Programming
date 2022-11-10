class PhotoCollection {
    constructor() {
      this.items = [];
    }

    get count() {
      return this.items.length;
    }
   
    add(photo) {
      if (!(photo instanceof Photo))
        throw `${photo} is not instance of Photo`;
      this.items.push(photo);
    }
    getAll() {
        return [...this.items];
    }
    delete(photo) {
        let userIndex = this.items.findIndex(photo => photo.photo == photo);
        if (photoIndex == -1)
          throw `Not found photo with photo ${photo}`;
        this.items.splice(photoIndex, 1);
      }
    }