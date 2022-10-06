# Nucleus Minimal starter

## Steps to clone into a new repository
```bash
mkdir new_project
cd new_project
git clone --depth 1 https://github.com/atoms-studio/nucleus . 
rm -rf ./.git
git init
git branch -M main
git add -A
git commit -m "first-commit"
git remote set-url origin "--Your git repo--"
git push -u origin main
```
## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).