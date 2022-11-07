let users = new UserCollectionWithDOM();

users.add(
    new User(
        1,
        'Зеленський Володимир Олександрович' ,
        'Maserati' ,
        'АА0007АА' , 
        'black'
    )
);

users.add(
    new User(
        2, 
        'Зеленська Олена Володимирівна' ,
        'Maserati' , 
        'АА0001АО' , 
        'white'
    )
);

users.add(
    new User(
        3, 
        'Кошовий Євген Вікторович' ,
        'Audi' , 
        'АА8888ВК' , 
        'grey'
    )
);

users.add(
    new User(
        4, 
        'Каменських Анастасія Олексіївна' ,
        'Maserati' , 
        'АА0008АА' ,
        'black'
    )
);

users.add(
    new User(
        5, 
        'Балога Андрій Вікторович' ,
        'Brabus' , 
        'АО7777ОА' , 
        'black'
    )
);

users.mount(document.getElementById("root"));