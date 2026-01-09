use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn damage_calculation(damage :f32, resistance: f32, lethality: f32, penetration: f32 ,damage_reduction: f32, amp: f32) -> f32{
    let resist_after_pen = resistance * (1.0 - penetration / 100.0) - lethality;
    let multiplier: f32;
    if resist_after_pen >= 0.0 {
        multiplier = 100.0 / (100.0 + resist_after_pen);
    } else {
        multiplier = 2.0 - 100.0 / (100.0 - resist_after_pen);
    }
    let mut answer = damage * multiplier * (100.0 + amp) / 100.0;
    answer = answer * (100.0 - damage_reduction) / 100.0;
    answer
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let x = damage_calculation(100.0, 50.0, 0.0, 0.0, 0.0, 0.0);
        println!("{}", x)
    }
}
