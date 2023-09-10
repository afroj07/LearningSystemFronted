#LMS Fronted
###Setup instruction

1.
...
 git clone  https://github.com/afroj07/LearningSystemFronted.git


 2 Move into directory
 ....

  cd LearninngSystemFronted

  3.install dependency
  ...
  npm i

  4. run the server
  ...
  npm run dev
  ...




### setup instruction for tailwind
...
check Tailwind official instruction doc
...

1.install tailxind css
...
npm i -D tailwindcss postcss autoprefixer
...

2.create tailwind config file
...
npx tailwindcss init
...

3. Add file extension to tailwind config file in the content property
...

"./index.html", "./src/**/*.{html,js,jsx, ts, tsx}"

...

4.Add the tailwind directives at the the top of 'index.css' file
...

@tailwind base;
@tailwind components;
@tailwind utilities;

# Adding pluging and dependencies
...
npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

...