// ======= DATA STRUCTURE =======
let data = [  // Initial dataset of aircrafts
    { name: "F-22 Raptor", role: "Stealth Fighter" },
    { name: "F-35 Lightning II", role: "Multirole Fighter" },
    { name: "Su-57", role: "Stealth Fighter" },
    { name: "Eurofighter Typhoon", role: "Air Superiority Fighter" },
    { name: "F/A-18 Hornet", role: "Multirole Fighter" },
    { name: "F-15 Eagle", role: "Air Superiority Fighter" },
    { name: "Dassault Rafale", role: "Multirole Fighter" },
    { name: "Lockheed Martin F-16 Fighting Falcon", role: "Multirole Fighter" },
    { name: "J-20 Mighty Dragon", role: "Stealth Fighter" },
    { name: "Grumman F-14 Tomcat", role: "Fleet Defense Fighter" }
];

// ======= DISPLAY FUNCTION =======
function displayData(filteredData = data) {
    let tableBody = document.getElementById("dataTable");
    tableBody.innerHTML = "";  // Clear old data

    filteredData.forEach(item => {
        let row = `<tr>
            <td>${item.name}</td>
            <td>${item.role}</td>
            <td><button onclick="deleteData('${item.name}')">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;  // Add each aircraft row
    });
}

// ======= ADDING DATA =======
function addData() {
    let name = document.getElementById("nameInput").value.trim();
    let role = document.getElementById("roleInput").value.trim();

    if (!name || !role) {
        alert("Please enter both name and role.");
        return;
    }

    data.push({ name, role });  // Add new aircraft to array
    displayData();  // Refresh display

    // Clear form inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("roleInput").value = "";
}

// ======= DELETING DATA =======
function deleteData(name) {
    data = data.filter(item => item.name !== name);  // Filter out by name
    displayData();  // Refresh
}

// ======= SEARCHING DATA =======
function searchData() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue));
    displayData(filteredData);
}

// ======= INITIAL LOAD =======
document.addEventListener("DOMContentLoaded", () => displayData());

// ======= IMAGE HOVER ANIMATION =======
images = document.querySelectorAll('img');

const mouseE = (evt) => {
    evt.target.className = "animate";
    thisimage = evt.target.getAttribute('src');  // Save original image src
    newimage = thisimage.replace('thumbnail', 'bw');  // Swap thumbnail with bw
    evt.target.setAttribute('src', newimage);
};

const mouseL = (evt) => {
    evt.target.className = "animate2";
    evt.target.setAttribute('src', thisimage);  // Restore original
};

images.forEach((item) => {
    item.addEventListener('mouseenter', mouseE); 
    item.addEventListener('mouseleave', mouseL);
}); //scale and reset image

