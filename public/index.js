
function renderSearchResults(equipment) {
    const resultsDiv = document.getElementById("searchResults")
    resultsDiv.innerHTML=''

    equipment.forEach((toy) => {
        const equipDiv = document.createElement('div')
        equipDiv.classList.add("equip-row")

        const equipType = document.createElement('div')
        equipType.classList.add("equip-type")
        equipType.textContent = toy.TYPE_DESCRIPTION

        const equipLocation = document.createElement('div')
        equipLocation.classList.add("equip-location")
        equipLocation.textContent = toy.POINT

        // equipDiv.appendChild(equipType)
        equipDiv.appendChild(equipLocation)
        resultsDiv.appendChild(equipDiv)
    })
}

async function onEquipmentChange(event) {
    const newFilter = document.getElementById('equipmentSelector').value
    console.log("Switching to look for", newFilter)
    const response = await fetch("/api/equipment/"+newFilter)
    const equipment = await response.json()
    renderSearchResults(equipment)
}

document.getElementById('equipmentSelector').addEventListener('change', onEquipmentChange)