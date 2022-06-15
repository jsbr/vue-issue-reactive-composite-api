

Project to demonstrate responsive issue in composition api of vue when using component as library.

## Folder
* app-vite: Application example build with vite.js (seems to work)
* app: application example build with vue-cli 
* libs: library builded with vue-cli
* libs-vite: build with vite.js

## Step to reproduce
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