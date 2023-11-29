# Next JS + Next UI Example App

I wanted to share with you a solution I found for the input component style issue in Next UI. I'm using `Headless UI`, and to improve the form style, I decided to use the `@tailwindcss/forms` package. I enabled this plugin on the `tailwind.config.js` file, but it caused some style issues with the Next UI input component.

If you'd like to reproduce the issue, simply enable the `@tailwindcss/forms` plugin from `tailwind.config.js`. However, please note that disabling this plugin causing another issue when using forms.

Feel free to take a look at my repo.
