# todo-list
Who do you have on you ToDo list today? 🤔

Project was kicked off with vue-cli so all standard vue-cli commands apply.

## Notes
We've installed Tailwind under compatibility mode because when this project was spun up, Vue CLI didn't have PostCSS8 yet. So we've installed it in compatiblity mode!

Essentially we did this:
```console
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Later on, once Vue CLI gets upgraded with PostCSS8 we'll need to do this:
```console
npm uninstall tailwindcss @tailwindcss/postcss7-compat
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```
