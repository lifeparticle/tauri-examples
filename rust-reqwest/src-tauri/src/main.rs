// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use reqwest;
// use serde_json::Value;

// #[tauri::command]
// async fn get_data(url: String) -> Result<Value, String> {
//     let response = reqwest::get(url).await;
//     match response {
//         Ok(resp) => {
//             match resp.json::<Value>().await {
//                 Ok(json) => Ok(json),
//                 Err(e) => Err(format!("Failed to parse JSON: {}", e))
//             }
//         },
//         Err(e) => Err(format!("Failed to fetch data: {}", e))
//     }
// }

#[tauri::command]
async fn get_data(url: String) -> Result<String, String> {
    let response = reqwest::get(url).await;
    match response {
        Ok(resp) => {
            match resp.text().await {
                Ok(text) => Ok(text),
                Err(e) => Err(format!("Failed to read text: {}", e))
            }
        },
        Err(e) => Err(format!("Failed to fetch data: {}", e))
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
