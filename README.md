Run:

```
npm install
npm run generate
npm run start
```

This will fail: `TypeError: input.keys is not a function`.

If you change the version of `swagger-typescript-api` in `package.json` to 13.0.10, and run the same three commands again, it will work.
