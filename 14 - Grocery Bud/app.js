// ****** SELECT ITEMS **********

const submitBtn = document.querySelector('.submit-btn');
const input = document.getElementById('grocery');
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const container = document.querySelector('.grocery-container');

// edit option

let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********

form.addEventListener('submit', addItem);

clearBtn.addEventListener('click', clearItems);

window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********

function addItem(e) {

    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {

        displayItems(id, value);

        displayAlert('Item added to the list', 'success');

        addToLocalStorage(id, value);

        setBackDefault();

    } else if (value && editFlag) {

        editElement.textContent = value;
        displayAlert('Item edited successfully', 'success');
        editLocalStorage(editId, value);
        setBackDefault();

    } else {
        displayAlert('Please Enter a Value!', 'danger')
    }

}

function displayAlert(text, color) {

    alert.innerHTML = text;
    alert.classList.add(`alert-${color}`);

    setTimeout(function () {

        alert.innerHTML = '';
        alert.classList.remove(`alert-${color}`);

    }, 1000);

}

function setBackDefault() {

    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'Submit';

}

function clearItems() {

    const items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {

        items.forEach(function (item) {
            item.remove();
        });
    }

    container.classList.remove('show-container');
    displayAlert('All items removed successfully', 'success');
    setBackDefault();
    localStorage.removeItem('list');
}

function deleteItem(e) {

    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    element.remove();

    if (!list.children.length) {
        container.classList.remove('show-container');
    }

    displayAlert('Item removed successfully', 'success');
    setBackDefault();

    removeFromLocalStorage(id);
}

function editItem(e) {

    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    submitBtn.innerHTML = 'Edit';

    editFlag = true;
    editId = element.dataset.id;

}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
    const grocery = { id, value };
    const items = getLocalStorage();

    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {

    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem('list', JSON.stringify(items));

}

function editLocalStorage(id, value) {

    let items = getLocalStorage();

    items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    })

    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}


// ****** SETUP ITEMS **********

function setupItems(){

    let items = getLocalStorage();

    if (items.length > 0) {

        items.forEach(function (item) {
            displayItems(item.id, item.value);
        })

    }

}

function displayItems(id, value) {

    const element = document.createElement('article');
    element.classList.add('grocery-item');

    const attr = element.setAttribute('data-id', id);


    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    list.appendChild(element);
    container.classList.add('show-container');
}
