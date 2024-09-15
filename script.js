function createDropdown(id,property) {
    const container = document.getElementById("dropdownContainer");

    // Create label
    const label = document.createElement("label");
    label.htmlFor = `numberDropdown${id}`;
    label.textContent = property;

    // Create dropdown (select)
    const select = document.createElement("select");
    select.id = `numberDropdown${id}`;
    select.name = `numbers${id}`;

    // Create options from 1 to 10
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }

    // Append label, select, and a line break to the container
    container.appendChild(label);
    container.appendChild(select);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
}
tulajok = ["Arc","Alak","Szem","Haj","Tisztaság","Illat","Ruházat","Hang","Kedvesség","Hozzáállás","Felelősségteljesség","Figyelmesség","Smarts","Street-smarts","Cringe","Világkép","Esélyes-e ? ","Szeretnéd-e ? ","Összeilletek-e ? "]
// Create 19 dropdowns
for (let i = 1; i <= 19; i++) {
    createDropdown(i,tulajok[i-1]+":  ");
}

function gatherDropdownValues() {
    var values = [];
    // Loop through 19 dropdowns
    for (let i = 1; i <= 19; i++) {
        const select = document.getElementById(`numberDropdown${i}`);
        values.push(parseInt(select.value)); // Get the selected value
    }
    console.log(values);
    var sum = 0;
    for(let i = 0; i<19;i++){
        if(i == 14) {
            sum = sum + 11 - values[i];
        } else { 
            sum = sum + values[i];
        }
    }
    console.log(sum);
    sessionStorage.setItem('variable', 191 - sum);
    window.location.href = 'result.html';
    
}

