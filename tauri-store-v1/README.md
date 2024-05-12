# v1

1. src-tauri/Cargo.toml

```toml
[dependencies]
tauri-plugin-store = { git = "https://github.com/tauri-apps/plugins-workspace", branch = "v1" }
```

2. src-tauri/src/main.rs

```rs
.plugin(tauri_plugin_store::Builder::default().build())
```

3.

```js
import { Store } from "tauri-plugin-store-api";

const store = new Store(".settings.dat");

await store.set("some-key", { value: 5 });

const val = (await store.get) < { value: number } > "some-key";

if (val) {
	console.log(val);
} else {
	console.log("val is null");
}

await store.save(); // this manually saves the store, otherwise the store is only saved when your app is closed
```

# Resources

1. [tauri-plugin-store](https://github.com/tauri-apps/tauri-plugin-store/tree/v1)
