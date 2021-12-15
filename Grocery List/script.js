//selectors
const form = document.querySelector('.grocery-form');
const input = document.getElementById('item');
const submit = document.getElementById('submit');
//event listeners
document.addEventListener("submit", handleSubmit);

//initialize grocery array
let groceryArray = [
    {
        name: "eggs",
        date: new Date
    },
    {
        name: "second item",
        date: new Date
    },
    {
        name: "fish",
        date: new Date
    }
];

//removes all items from the list then repopulates list from grocery array
function generateList(){
    removeChilds(list);
    groceryArray.map(item => createListItem(item));
};
//adds items to the grocery array from the form submission 
function handleSubmit(e){
    e.preventDefault()
    if(submit.value === "Submit" && input.value !== ""){
        groceryArray.unshift(
            {
                name: item.value,
                date: new Date
            }
        );  
        input.value = ""; 
    }
    if(submit.value === "Edit"){
        const id = submit.dataset.editId;
        const edit = {
            name: item.value,
            date: new Date
        }
        //find an index of an object - source:  https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array/
        const index = groceryArray.map(x => x.name).indexOf(id);
        if(index > -1){
            groceryArray.splice(index, 1, edit);  
        };
        input.value = "";
        submit.value = "Submit"; 
    }
    generateList();
};
//removes all children elements - source: https://attacomsian.com/blog/javascript-dom-remove-all-children-of-an-element
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};
//creates a new list item and appends to the ul element
function createListItem(item){
    const list = document.getElementById('list');
    let li = document.createElement("li");
    let div = document.createElement("div");
    let iEdit = document.createElement("i");
    let iDelete = document.createElement("i");

    li.innerHTML = item.name;

    iEdit.classList = "fas fa-edit green";
    iEdit.setAttribute("data-id", item.name);
    iEdit.setAttribute("data-action", "edit");
    iEdit.setAttribute("onClick", "handleClick(event)");
    iDelete.classList = "fas fa-trash-alt red";
    iDelete.setAttribute("data-id", item.name);
    iDelete.setAttribute("data-action", "delete");
    iDelete.setAttribute("onClick", "handleClick(event)");
    
    div.append(iEdit);
    div.append(iDelete);
    li.append(div);
    list.append(li);
}
//handles the onClick on the elements
function handleClick(event){
    if (event.currentTarget.dataset.action === "delete"){
        deleteItem(event.currentTarget.dataset.id);
    }
    if (event.currentTarget.dataset.action === "edit"){
        editItem(event.currentTarget.dataset.id);
    }
}
//deletes item from the grocery array
function deleteItem(item){
    //find an index of an object - source:  https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array/
    const index = groceryArray.map(x => x.name).indexOf(item);
    if(index > -1){
      groceryArray.splice(index, 1);  
    };
    generateList()
}

//turns form into editing mode
function editItem(item){
    input.value = item;
    submit.value = "Edit";
    submit.dataset.editId = item;
    
}

//clears groceryArray
function clearItems(){
    groceryArray = [];
    generateList();
}
//initialize list
generateList();
