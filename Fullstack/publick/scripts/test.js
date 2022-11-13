(async ()=>{
    let users = new UserCollectionWithDOM();
    await users.mount(document.getElementById("root"));
}) ();