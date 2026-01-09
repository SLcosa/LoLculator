import init, { damage_calculation } from "./pkg/lolculator.js";

async function run() {
    await init();
    
    const calculate_button = document.getElementById("calculate");

    calculate_button.addEventListener("click", (event) => {
        event.preventDefault();

        const amp = Number(document.getElementById("amp").value);
        const damage_reduction = Number(document.getElementById("damage_reduction").value)

        const physical_damage = Number(document.getElementById("physical_damage").value);
        const armor = Number(document.getElementById("armor").value);
        const lethality = Number(document.getElementById("lethality").value);
        const penetration = Number(document.getElementById("penetration").value)
        const physical_damage_result = damage_calculation(physical_damage, armor, lethality, penetration, damage_reduction, amp);

        const magic_damage = Number(document.getElementById("magic_damage").value);
        const magic_resists = Number(document.getElementById("magic_resists").value);
        const flat_magic_pen = Number(document.getElementById("flat_magic_pen").value);
        const percentage_magic_pen = Number(document.getElementById("percentage_magic_pen").value);
        const magic_damage_result = damage_calculation(magic_damage, magic_resists, flat_magic_pen, percentage_magic_pen, damage_reduction, amp);

        const true_damage = Number(document.getElementById("true_damage").value);
        const true_damage_result = damage_calculation(true_damage, 0.0, 0.0, 0.0, 0.0, amp);

        const final_damage_output = true_damage_result + magic_damage_result + physical_damage_result;
        const display_text = `Your final damage output is ${final_damage_output.toFixed(2)} <br> ${physical_damage_result.toFixed(2)} physical damage // ${magic_damage_result.toFixed(2)} magic damage // ${true_damage_result.toFixed(2)} true damage`;
        document.getElementById("damage_result_text").innerHTML = display_text;
    });

}

run();