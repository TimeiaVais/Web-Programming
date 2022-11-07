class Car_userCollectionWithDOM extends Car_userCollection {
    searchString = " ";
    car_userToHTML(car_user) {
        return `
        <tr>
            <td>
                ${car_user.id}
            </td>
            <td>
                ${car_user.code}
            </td>
            <td>
                ${car_user.fullname}
            </td>
            <td>
                ${car_user.brand}
            </td>
            <td>
                ${car_user.number}
            </td>
            <td>
                ${car_user.color}
            </td>
            <td> 
                <button onclick="DeleteCar_user(${car_user.id})">
                    Delete
                </button>
            </td>
            <td> 
                <button onclick="StartEditCar_user(${car_user.id})">
                    Edit
                </button>
            </td>
        </tr>
        `;
    }
    carsTableToHTML() {
        let rows = "";
        for (let cars of this.getAll()) {
            rows += this.carsToHTML(cars_users);
        }
        return ` 
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Code
                    </th>
                    <th>
                        Fullname
                    </th>
                    <th>
                        Brand
                    </th>
                    <th>
                        Number
                    </th>
                    <th>
                        Color
                    </th>
                    
                    <th colspan="2">
                        Actions
                    </th>
                </tr>
                ${rows}
            </table>
            <div class="add">
                <button type="button" onclick="ShowAddCars()">
                   Add cars
                </button>
            </div>
        `;
    }

    addFormToHTML() {
        return ` 
            <div id="add">
                <form name="addForm" method="post" action="#">
                    <h3> Add Cars </h3>
                    <input name="id" type="hidden">
                    <input name="code" placeholder="code"> 
                    <input name="fullname" placeholder="pib">
                    <input name="brand" placeholder="sex">
                    <input name="number" placeholder="age"> 
                    <input name="color" placeholder="country">
                    
                    <button type="button" onclick="AddNewCars()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }
    editFormToHTML() {
        return ` 
            <div id="edit">
                <form name="editForm" method="post" action="#">
                    <h3> Edit Player </h3>
                    <input name="id" type="hidden">
                    <input name="code" placeholder="code"> 
                    <input name="fullname" placeholder="pib">
                    <input name="brand" placeholder="sex">
                    <input name="number" placeholder="age"> 
                    <input name="color" placeholder="country">
                   
                    <button type="button" onclick="EditCars()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }
    toHTML() {
        return this.carsTableToHTML() + this.addFormToHTML() + this.editFormToHTML();
    }

    mount(parrent) {
        this._parrent = parrent;
        this.render();
        this.addEventListners();
    }

    render() {
        this._parrent.innerHTML = this.toHTML();
    }

    addEventListners() {
        document.addEventListener("deleteCars", event => {
            super.delete(event.detail.id);
            this.render();
        });
        document.addEventListener("addPlayer", event => {
            super.add(
                new PlayerWithId(
                    event.detail.code,
                    event.detail.fullname,
                    event.detail.brand,
                    event.detail.number,
                    event.detail.color
                )
            );
            this.render();
        });

        document.addEventListener("editCars", event => {
            try {
                super.update(event.detail.id, event.detail);
                this.render();
            } catch (error) {
                console.log(error);
                alert(error);
            }
        });
    }
}
function DeleteCars(id) {
    let deletePlayerEvent = new CustomEvent("deleteCars", { detail: { id } });
    document.dispatchEvent(deleteCarsEvent);
}

function AddNewPlayer() {
    const code = document.getElementsByName("code")[0].value;
    const pib = document.getElementsByName("fullname")[0].value;
    const sex = document.getElementsByName("brand")[0].value;
    const age = document.getElementsByName("number")[0].value;
    const country = document.getElementsByName("color")[0].value;
    
    let addCarsEvent = new CustomEvent("addCars", {
        detail: {
            code, 
            fullname,
            brand,
            number, 
            color
        }
    });
    document.dispatchEvent(addCarsEvent);
}
function StartEditCars(id) {
    document.getElementById("edit").style.display = "block";
    try {
        let player =player1.getById(id);
        document.getElementsByName("id")[1].value = player.id;
        document.getElementsByName("code")[1].value = player.code;
        document.getElementsByName("fullname")[1].value = player.pib;
        document.getElementsByName("brand")[1].value = player.sex;
        document.getElementsByName("number")[1].value = player.age;
        document.getElementsByName("color")[1].value = player.country;
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
function EditCars() {
    const id = parseInt(document.getElementsByName("id")[1].value);
    const code = document.getElementsByName("code")[1].value;
    const pib = document.getElementsByName("fullname")[1].value;
    const sex = document.getElementsByName("brand")[1].value;
    const age = document.getElementsByName("number")[1].value;
    const country = document.getElementsByName("color")[1].value;
   
    let editCarsEvent = new CustomEvent("editCars", {
        detail: {
            id,
            code, 
            fullname,
            brand,
            number, 
            color
        }
    });
    document.dispatchEvent(editCarsEvent);
}

function ShowAddCars() {
    document.getElementById("add").style.display = "block";
}