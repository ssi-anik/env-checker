## Env checker
Env checker shows you the difference between two .env files from source to destination.

## Purpose
When you're dealing with the key value pair and the pair is separated by an equal sign (=), this extension can be helpful. When you're developing an application, the main concentration is given to complete the task and you add your key to your file and you may forget what you added. It can be time consuming to find out what were added at the time of development. Moreover, whenever you are coping the file from `example` to the actual one you need to be sure that you're doing it right.

![Screenshot.png](https://raw.githubusercontent.com/ssi-anik/env-checker/master/screenshots/fullscreen.png)

Being a laravel developer, it is always necessary to check what is added in the `.env` and what is added in `.env.example`. When pushing the code to the staging/production server we need to be sure that all the environments are there so that the code doesn't break. The screenshot can explain how it works.

## Icons
* A special thanks to the icon author: [https://www.flaticon.com/authors/cursor-creative](https://www.flaticon.com/free-icon/exchange_338930)
* Another thank goes to a colleague of mine who designed and resized these images: [Seeam](https://dribbble.com/seeam)

## I'm a developer
If you're a developer, do the followings
* Clone this repository
* run `npm install` to install all the dependencies.
* run `npm run build` to let the webpack hot reload have an watch on your JS files as you update the file. Open `http://localhost:8080/` on your browser.
* run `npm run build:chrome` to build the app chrome ready extension.

## Issues & PRs
It is always appreciated if any issues have been submitted as well as PRs.