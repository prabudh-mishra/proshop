### Steps to create a frontend screen

1. Create constants in `frontend/src/constants` folder.
2. Create reducer in `frontend/src/reducers` folder.
3. Register the reducer in `frontend/src/store.js` file.
4. Create the actions for that reducer in `frontend/src/actions` folder.
5. Create the screen in `frontend/src/screens`
6. Add the screen to `frontend/src/App.js` to access the screen

### List of packages added to frontend

To install react-paypal-button-v2 on react versions above 16.x.x, use following command:
`npm install react-paypal-button-v2 --legacy-peer-deps`

### To include a functionality

1. Create the backend
2. In frontend, create constants.
3. Then create reducer for above constants
4. Bring the reducer to store.js
5. Create an action containing the reducer functions
6. bring the action to screen (file to be rendered)
