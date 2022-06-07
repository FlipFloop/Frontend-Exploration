#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn print_creds(email: String, password: String) {
  println!("Email: {}, Password: {}", email, password);
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![print_creds])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
