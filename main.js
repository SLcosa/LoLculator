import init, { damage_calculation } from "./pkg/lolculator.js";

//document.getElementById("output").textContent = ("Udyr")

async function run() {
    await init();
    
    const form = document.getElementById("damage_form");
    const result = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const physical_damage = Number(document.getElementById("physical_damage").value);
        const armor = Number(document.getElementById("armor").value);
        const lethality = Number(document.getElementById("lethality").value);
        const penetration = Number(document.getElementById("penetration").value)
        const amp = Number(document.getElementById("amp").value);

        const damage_result = damage_calculation(physical_damage, armor, lethality, penetration, amp);
        result.textContent = `Damage: ${damage_result}`;
    });
}

run();