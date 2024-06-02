# v1

1. `src-tauri/Cargo.toml`

```toml
[dependencies]
tauri-plugin-store = { git = "https://github.com/tauri-apps/plugins-workspace", branch = "v1" }
```

2. `src-tauri/src/main.rs`

```rs
.plugin(tauri_plugin_store::Builder::default().build())
```

3.

```shell
yarn add https://github.com/tauri-apps/tauri-plugin-store#v1
```

Error:

```shell
Usage Error: It seems you are trying to add a package using a https:... url; we now require package names to be explicitly specified.
Try running the command again with the package name prefixed: yarn add my-package@https:..
```

```shell
yarn add tauri-plugin-store@https://github.com/tauri-apps/tauri-plugin-store#v1
```

4.

```js
// import { Store } from "tauri-plugin-store-api"; // did not work

import { Store } from "tauri-plugin-store";

const store = new Store(".settings.dat");

await store.set("some-key", { value: 5 });

const val = await store.get<{ value: number }>("some-key");

if (val) {
  console.log(val);
} else {
  console.log("val is null");
}

await store.save();
```

5. The file path in macOs

```shell
/Users/<Username>/Library/Application Support/com.tauri.dev/.settings.dat
```

# Resources

1. [tauri-plugin-store](https://github.com/tauri-apps/tauri-plugin-store/tree/v1)
