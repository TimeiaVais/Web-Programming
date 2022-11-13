class UserCollectionWithDOM extends UserCollection {
    searchString = "";
    userToTableRowHtml(user) {
        return `
        <tr>
            <td>
                ${user.id}
            </td>
            <td>
                ${user.code}
            </td>
            <td>
                ${user.fullname}
            </td>
            <td>
                ${user.brand}
            </td>
            <td>
                ${user.number}
            </td>
            <td>
                ${user.color}
            </td>
            <td> 
                <button onclick="DeleteUser(${user.id})">
                    Delete
                </button>
            </td>
            <td> 
                <button onclick="StartEditUser(${user.id})">
                    Edit
                </button>
            </td>
        </tr>
        `;
    }

    async getUsers() {
        if (this.searchString)
            return this.getByUsernameStart(this.searchString);

        return await this.getAll();
    }

    async getUsersToTableHtml() {
        let users = await this.getUsers();
        if (users.length == 0)
            return `
                <h3> No users </h3>
            `;
        let rows = "";
        for (let user of users) {
            rows += this.userToTableRowHtml(user);
        }
        return `
            <h2> Users </h2>
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
        `;
    } 
    get addFormHtml() {
        return `
            <button type="button" onclick="ShowAddUserForm()">
                Add user
            </button> 
            <div id="add-user">
                <form name="addForm" method="post" action="#">
                    <h3> Add User </h3>
                    <input name="id" type="hidden">
                    <input name="code" placeholder="code"> 
                    <input name="fullname" placeholder="fullname">
                    <input name="brand" placeholder="brand">
                    <input name="number" placeholder="number">
                    <input name="color" placeholder="color">
                    <button type="button" onclick="AddNewUser()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }
    get editFormHtml() {
        return ` 
            <div id="edit-user">
                <form name="editForm" method="post" action="#">
                    <h3> Edit User </h3>
                    <input name="id" type="hidden">
                    <input name="code" placeholder="code"> 
                    <input name="fullname" placeholder="fullname">
                    <input name="brand" placeholder="brand">
                    <input name="number" placeholder="number">
                    <input name="color" placeholder="color">
                    <button type="button" onclick="EditUser()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }

    get searchInputHtml() {
        return `<input type="text" 
            name="searchByName" 
            id="searchByName"
            placeholder="Enter fullname for search"
            value="${this.searchString}"
            onchange="Search()"
        >`;
    }

    async mount(parrent) {
        this._parrent = parrent;
        await this.render();
        this.addEventListners();
        this.createClickHadlers();
        this.addErrorMessage();
    }

    async render() {
        const tableTemplate = await this.getUsersToTableHtml();
        this._parrent.innerHTML = this.searchInputHtml + tableTemplate + this.addFormHtml + this.editFormHtml;
    }
    addEventListners() {
        document.addEventListener("deleteUser", async event => {
            await super.delete(event.detail.id);
            this.render();
        });
        document.addEventListener("addUser", async event => {
            await super.create(event.detail);
            this.render();
        });
        document.addEventListener("editUser", async event => {
            await super.update(event.detail.id, event.detail);
            this.render();
        });

        document.addEventListener("searchUser", event => {
            this.searchString = event.detail.searchString;
            this.render();
        });
    }

    createClickHadlers() {
        window.DeleteUser = (id) => {
            let deleteUserEvent = new CustomEvent("deleteUser", { detail: { id } });
            document.dispatchEvent(deleteUserEvent);
        }

        window.ShowAddUserForm = () => {
            document.getElementById("add-user").style.display = "block";
        }
        window.AddNewUser = () => {
            const code= document.getElementsByName("code")[0].value;
            const fullname= document.getElementsByName("fullname")[0].value;
            const brand = document.getElementsByName("brand")[0].value;
            const number = document.getElementsByName("number")[0].value;
            const color = document.getElementsByName("color")[0].value;
            let addUserEvent = new CustomEvent("addUser", {
                detail: {
                    code,
                    fullname,
                    brand,
                    number,
                    color
                }
            });
            document.dispatchEvent(addUserEvent);
        }

        window.StartEditUser = (id) => {
            document.getElementById("edit-user").style.display = "block";

            let user = super.getById(id); // знаходимо користувача із вказаним id 
            document.getElementsByName("id")[1].value = user.id;
            document.getElementsByName("code")[1].value = user.code;
            document.getElementsByName("fullname")[1].value = user.fullname;
            document.getElementsByName("brand")[1].value = user.brand;
            document.getElementsByName("number")[1].value = user.number;
            document.getElementsByName("color")[1].value = user.color;
        }

        window.EditUser = () => {
            const id = parseInt(document.getElementsByName("id")[1].value);
            const code = document.getElementsByName("code")[1].value;
            const fullname = document.getElementsByName("fullname")[1].value;
            const brand = document.getElementsByName("brand")[1].value;
            const number = document.getElementsByName("number")[1].value;
            const color = document.getElementsByName("color")[1].value;
            let editUserEvent = new CustomEvent("editUser", {
                detail: {
                    id,
                    code,
                    fullname,
                    brand,
                    number,
                    color
                }
            });
            document.dispatchEvent(editUserEvent);
        }

        window.Search = () => {
            const searchString = document.getElementById("searchByName").value;
            let searchEvent = new CustomEvent("searchUser", { detail: { searchString } });
            document.dispatchEvent(searchEvent);
        }
    }
    addErrorMessage() {
        window.onerror = (error) => {
            alert(error);
        }
    }
}