
let clicked = false;


const setupEventListener = () => {
    const dpBt = document.querySelector("#dropdownbutton");
    const dpMenu = document.querySelector('#dropdown');
    
    dpBt.addEventListener('click', () => {
        if (dpBt.innerHTML == "Open Dropdown") {
            dpBt.innerHTML = "Close Dropdown";
            dpMenu.classList = "active";
        }
        else{
            dpBt.innerHTML = "Open Dropdown";
            dpMenu.classList = "hidden";
        }
    });
}

setupEventListener();