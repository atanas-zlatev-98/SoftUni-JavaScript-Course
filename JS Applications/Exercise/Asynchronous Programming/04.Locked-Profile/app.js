async function lockedProfile() {
  const baseURL = "http://localhost:3030/jsonstore/advanced/profiles";

  const mainRef = document.getElementById("main");

  const response = await fetch(baseURL);
  const data = await response.json();

  for (let prof of Object.values(data)) {
    mainRef.appendChild(template(prof));
  }

  const buttons = document.querySelectorAll("button");

  for (let btn of buttons) {
    btn.addEventListener("click", showInfo);
  }

  const profiles = document.querySelectorAll(".profile");
  profiles[0].remove();

  for (let profile of profiles) {
    profile.children[9].style.display = "none";
  }

  function showInfo(e) {
    let radio = e.target.parentElement.querySelectorAll(
      'input[type="radio"]:checked'
    )[0];

    const btn = e.currentTarget;

    let user = e.currentTarget.parentElement.querySelectorAll("div")[0];

    if (radio.value === "unlock") {
      if (btn.textContent === "Show more") {
        user.style.display = "block";
        btn.textContent = "Hide it";
      } else {
        user.style.display = "none";
        btn.textContent = "Show more";
      }
    }
  }

  function template(data) {
    const profile = document.createElement("div");
    profile.classList.add("profile");

    const imgRef = document.createElement("img");
    imgRef.setAttribute("src", "./iconProfile2.png");
    imgRef.classList.add("userIcon");

    const labelLock = create("label","","Lock");
    const lockInput = createInput("radio", data.username, "lock", true, false);
    const labelUnlock = create("label","", "Unlock");
    const unlockInput = createInput("radio", data.username, "unlock");
    const br = create("br");
    const hr = create("hr");
    const labelUsername = create("label", "Username");
    const userInp = createInput("text", data.username, data.username, false, true);
    const showBtn = document.createElement('button');
    showBtn.textContent = 'Show more';
    const hiddenDiv = create("div");
    const labelEmail = create("label", "Email");
    const inputEmail = createInput("email", data.email, data.email, false, true);
    const labelAge = create("label", "Age");
    const inputAge = createInput("email", data.age, data.age, false, true);

    profile.appendChild(imgRef);
    profile.appendChild(labelLock);
    profile.appendChild(lockInput);
    profile.appendChild(labelUnlock);
    profile.appendChild(unlockInput);
    profile.appendChild(br);
    profile.appendChild(hr);
    profile.appendChild(labelUsername);
    profile.appendChild(userInp);
    hiddenDiv.appendChild(labelEmail);
    hiddenDiv.appendChild(inputEmail);
    hiddenDiv.appendChild(labelAge);
    hiddenDiv.appendChild(inputAge);
    profile.appendChild(hiddenDiv);
    profile.appendChild(showBtn);
  

    return profile;
  }

  function create(type, className, context) {
    const element = document.createElement(type);

    if (className) {
      element.classList.add(className);
    }
    if (context) {
      element.textContent = context;
    }
    return element;
  }

  function createInput(type, name, value, checked, disabled) {
    const element = document.createElement("input");

    let atrributes = {
      type: type,
      name: name,
      value: value,
    };
  
    if (checked) {
      atrributes.checked = true;
    }
  
    if (disabled) {
      atrributes.disabled = true;
      atrributes.readonly = true;
    }
  
    for (let key in atrributes) {
      element.setAttribute(key, atrributes[key]);
    }
    return element;
  }
}
