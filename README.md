
![sportsee](https://user-images.githubusercontent.com/94918200/211210073-916ee258-c73c-4acd-866d-87c8a37b39ac.PNG)

# Build an analytics dashboard with react


# Project description

This project is part of OpenClassrooms "Développeur d'application - JavaScript React" training.

The goal of this project is to create a user dashborad using Recharts and the provided API. The backend was provided and its documentation are available in this [github repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git). 

User Stories are available [here](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e).
Figma file was provided [here](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1&t=33wc0ZstcO8MvoO8-0).




## 🔗 Online Deployment 

[![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)](https://sportsee-site-ep.netlify.app/)

## 🛠 Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Badges
![GitHub last commit](https://img.shields.io/github/last-commit/EPourmo/build-an-analytics-dashboard-with-react?style=plastic)

## Run Locally
### 1. Prerequisite
- [NodeJS (version 12.18)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

It is highly recommended to use [nvm](https://github.com/nvm-sh/nvm) in order to switch easily NodeJS version. Indeed, this project uses Vite and Vite requires Node.js version 14.18+, 16+.


### 2. Installation
First of all, clone this repo on your computer
```bash
git clone https://github.com/EPourmo/build-an-analytics-dashboard-with-react.git
```
#### 2.1 Back end
Go to the back end folder and install all dependencies
```bash
npm install
```
or

```bash
 yarn install
```

Then run the script

```bash
npm run dev
```
or

```bash
 yarn run dev
```


The data is accessible at `http://localhost:3000/`. For example, to have user 18 main data, you can have access with `http://localhost:3000/user/18`.

#### 2.1 Front End
After running the back end, go to the front end folder and install all dependencies

```bash
npm install
```
or

```bash
 yarn install
```

Then run the script

```bash
npm run dev
```
or

```bash
 yarn run dev
```

The front end data will be accessible at the localhost logged on your terminal.


## Features

- Dashboard
- [Reacharts](https://recharts.org/en-US/)
- Reusable components
