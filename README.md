# webresume
Manoj Konda's Resume built with react.js
Steps: 
1. npm install gh-pages --save-dev
2. add this in package.json --> + "homepage": "https://manojKonda01.github.io/webresume"
3. git remote remove origin
4. git remote set-url origin https://github.com/manojKonda01/mkresume.git 
5. git init
6. add in package.json
    "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",

7. npm run build
8. git add .
9. git commit - m 'message'
10. git push origin master
