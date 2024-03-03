const userNavRef = document.getElementById("user");
const guestNavRef = document.getElementById("guest");
const addBtnRef = document.querySelector(".add");
const catchesContainerRef = document.getElementById("catches");

document.querySelector('a[id="home"]').classList.add("active");
document.getElementById("logout").addEventListener("click", onLogout);
document.querySelector(".load").addEventListener("click", onLoadCatch);
document.getElementById("addForm").addEventListener("submit", onCreate);

let userData = JSON.parse(sessionStorage.getItem("userData"));

const endpoint = {
  logout: "http://localhost:3030/users/logout",
  catches: "http://localhost:3030/data/catches",
};

function hasOwner(id) {
  return userData?._id === id;
}

updateNav();
function updateNav() {
  if (userData) {
    document.querySelector("nav p span").textContent = userData.email;
    userNavRef.style.display = "inline-block";
    guestNavRef.style.display = "none";
    addBtnRef.disabled = false;
  } else {
    document.querySelector("nav p span").textContent = "guest";
    userNavRef.style.display = "none";
    guestNavRef.style.display = "inline-block";
    addBtnRef.disabled = true;
  }
}

async function onLogout(e) {
  let options = {
    method: "GET",
    headers: {
      "X-Authorization": userData.accessToken,
    },
  };
  await fetch(endpoint.logout, options);
  sessionStorage.clear();
  userData = null;
  await onLoadCatch();
  updateNav();
}

async function onLoadCatch() {
  catchesContainerRef.innerHTML = "";
  const response = await fetch(endpoint.catches);
  const data = await response.json();

  data.forEach((x) => {
    let div = listAllCatches(x);
    catchesContainerRef.appendChild(div);
  });
}

function listAllCatches(data) {
  let isOwner = hasOwner(data._id);
  let div = document.createElement("div");
  div.classList.add("catch");

  (div.innerHTML += `<label>Angler</label>`),
    (div.innerHTML += `<input type="text" ${
      !isOwner ? "disabled" : ""
    } class="angler" value="${data.angler}">`);
  div.innerHTML += `<label>Weight</label>`;
  div.innerHTML += `<input type="text" class="weight"  ${
    !isOwner ? "disabled" : ""
  } value="${data.weight}">`;
  div.innerHTML += `<label>Species</label>`;
  div.innerHTML += `<input type="text" class="species" ${
    !isOwner ? "disabled" : ""
  } value="${data.species}">`;
  div.innerHTML += `<label>Location</label>`;
  div.innerHTML += `<input type="text" class="location" ${
    !isOwner ? "disabled" : ""
  } value="${data.location}">`;
  div.innerHTML += `<label>Bait</label>`;
  div.innerHTML += `<input type="text" class="bait" ${
    !isOwner ? "disabled" : ""
  } value="${data.bait}">`;
  div.innerHTML += `<label>Capture Time</label>`;
  div.innerHTML += `<input type="number" class="captureTime" ${
    !isOwner ? "disabled" : ""
  } value="${data.captureTime}">`;

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("update");
  updateBtn.dataset.id = data._id;
  updateBtn.textContent = "Update";

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.dataset.id = data._id;
  delBtn.textContent = "Delete";

  if (!hasOwner(data._ownerId)) {
    updateBtn.disabled = true;
    delBtn.disabled = true;
  }

  div.appendChild(updateBtn);
  div.appendChild(delBtn);

  updateBtn.addEventListener("click", onUpdate);
  delBtn.addEventListener("click", onDelete);

  return div;
}

async function onCreate(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let angler = formData.get("angler");
  let weight = formData.get("weight");
  let species = formData.get("species");
  let location = formData.get("location");
  let bait = formData.get("bait");
  let captureTime = formData.get("captureTime");
  let _ownerId = userData._id;

  if (!angler || !weight || !species || !location || !bait || !captureTime) {
    return;
  }
  let data = {
    angler,
    weight,
    species,
    location,
    bait,
    captureTime,
    _ownerId,
  };
  const options = createOption("POST", data);

  await fetch(endpoint.catches, options);
}

async function onUpdate(e) {
  e.preventDefault();
  const id = e.target.dataset.id;
  const inputs = e.target.parentElement.querySelectorAll("input");

  for (let input of inputs) {
    input.disabled = false;
  }

  e.target.addEventListener('click',()=>{
    onEdit(inputs,id);
  })

}

async function onEdit(inputs,id){

  const data = {
    angler: inputs[0].value,
    weight: inputs[1].value,
    species: inputs[2].value,
    location: inputs[3].value,
    bait: inputs[4].value,
    captureTime: inputs[5].value,
  };

  await fetch(endpoint.catches + '/'+id,{
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json',
      'X-Authorization': userData.accessToken
    },
    body: JSON.stringify(data),
   })
   onLoadCatch();
}

async function onDelete(e) {
  const id = e.target.dataset.id;
  const options = {
    method: "DELETE",
    headers: {
      "X-Authorization": userData.accessToken,
    },
  };
  await fetch(endpoint.catches + "/" + id, options);
  onLoadCatch();
}

function createOption(method, data) {
  return {
    method,
    headers: {
      "Content-type": "application/json",
      "X-Authorization": userData.accessToken,
    },
    body: JSON.stringify(data),
  };
}
