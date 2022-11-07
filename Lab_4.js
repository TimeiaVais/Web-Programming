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
                <button type="button" onclick="ShowAddCar_user()">
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
                    <input name="fullname" placeholder="fullname">
                    <input name="brand" placeholder="brand">
                    <input name="number" placeholder="number"> 
                    <input name="color" placeholder="color">
                    
                    <button type="button" onclick="AddNewCar_user()">
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
                    <h3> Edit Car_user </h3>
                    <input name="id" type="hidden">
                    <input name="code" placeholder="code"> 
                    <input name="fullname" placeholder="fullname">
                    <input name="brand" placeholder="brand">
                    <input name="number" placeholder="number"> 
                    <input name="color" placeholder="color">
                   
                    <button type="button" onclick="EditCar_user()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }
    toHTML() {
        return this.car_userTableToHTML() + this.addFormToHTML() + this.editFormToHTML();
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
        document.addEventListener("deleteCar_user", event => {
            super.delete(event.detail.id);
            this.render();
        });
        document.addEventListener("addCar_user", event => {
            super.add(
                new Car_userWithId(
                    event.detail.code,
                    event.detail.fullname,
                    event.detail.brand,
                    event.detail.number,
                    event.detail.color
                )
            );
            this.render();
        });

        document.addEventListener("editCar_user", event => {
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
function DeleteCar_user(id) {
    let deleteCar_userEvent = new CustomEvent("deleteCar_user", { detail: { id } });
    document.dispatchEvent(deleteCarsEvent);
}

function AddNewCar_user() {
    const code = document.getElementsByName("code")[0].value;
    const fullname = document.getElementsByName("fullname")[0].value;
    const brand = document.getElementsByName("brand")[0].value;
    const number = document.getElementsByName("number")[0].value;
    const color = document.getElementsByName("color")[0].value;
    
    let addCar_userEvent = new CustomEvent("addCar_user", {
        detail: {
            code, 
            fullname,
            brand,
            number, 
            color
        }
    });
    document.dispatchEvent(addCar_userEvent);
}
function StartEditCar_user(id) {
    document.getElementById("edit").style.display = "block";
    try {
        let car_user = car_user.getById(id);
        document.getElementsByName("id")[1].value = player.id;
        document.getElementsByName("code")[1].value = player.code;
        document.getElementsByName("fullname")[1].value = player.fullname;
        document.getElementsByName("brand")[1].value = player.brand;
        document.getElementsByName("number")[1].value = player.number;
        document.getElementsByName("color")[1].value = player.color;
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
function EditCar_user() {
    const id = parseInt(document.getElementsByName("id")[1].value);
    const code = document.getElementsByName("code")[1].value;
    const fullname = document.getElementsByName("fullname")[1].value;
    const brand = document.getElementsByName("brand")[1].value;
    const number = document.getElementsByName("number")[1].value;
    const color = document.getElementsByName("color")[1].value;
   
    let editCar_userEvent = new CustomEvent("editCar_user", {
        detail: {
            id,
            code, 
            fullname,
            brand,
            number, 
            color
        }
    });
    document.dispatchEvent(editCar_userEvent);
}

function ShowAddCar_user() {
    document.getElementById("add").style.display = "block";
}