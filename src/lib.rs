use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn damage_calculation(damage :f32, resistance: f32, lethality: f32, penetration: f32 , amp: f32) -> f32{
    let mut resistance_after_pen = 0.0;
    let mut answer = 0.0;
    if resistance >= 0.0 {
        resistance_after_pen = resistance * (1.0 - penetration / 100.0) - lethality;
    } else {
        resistance_after_pen = 2.0 - 100.0 / (100.0 - resistance);
    }
    resistance_after_pen = 100.0 / (100.0 + resistance_after_pen);
    answer = damage * resistance_after_pen * (100.0 + amp) / 100.0;
    answer
}


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let x = damage_calculation(100.0, 500.0, 10.0, 50.0, 0.0);
        println!("{}", x)
    }
}
