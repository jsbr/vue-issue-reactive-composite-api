

Project to demonstrate responsive issue in composition api of vue when using component as library. (in vue cli and build of vite.js)

## Folder
* app-vite: Application example build with vite.js (seems to work)
* app: application example build with vue-cli 
* libs: library builded with vue-cli
* libs-vite: build with vite.js

## Step to reproduce vue cli issue
1. run libs: 
    ```
    cd libs
    npm install
    npm run serve
    ```
    You should see different component with a increment counter
2. build libs (can be skipped, already done/ committed)
    ```
    npm run build:lib
    ```
3. build libs-vite (can be skipped, already done/ committed)
    ```
    cd ../libs-vite
    npm install
    npm run build-only
    ```
4. run apps
    ```
    cd ../apps
    npm install
    npm run  serve
    ```
    see composite component counter don't change

## Step to reproduce vite.js issue
1. run dev vite app
    ```
    cd ../apps-vite
    npm install
    npm run dev
    ```
    go to http://localhost:3000
    Vite Composite Api counter change
2. run prod vite app
    ```
    npm run prod
    ```
    go to http://localhost:8081
    Vite Composite Api counter don't change