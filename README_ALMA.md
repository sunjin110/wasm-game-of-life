# issue
wasm-pack 0.9.1で、buildに失敗する問題がある

## 対処法1
Cargo.tomlに下記の設定を追加する
```toml
[package.metadata.wasm-pack.profile.dev]
wasm-opt = false

[package.metadata.wasm-pack.profile.release]
wasm-opt = false
```

## 対処法2
wasm-packのversionをdowngradeする
```
cargo install wasm-pack --version 0.8.1
```
