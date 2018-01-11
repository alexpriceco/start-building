### Start Building _____
A straightforward, forkable project for building a web application.

### Launching a development environment
1. Install the Firebase CLI tools
2. Run `yarn`
3. Set Firebase API key in /config/firebase-api-key.js
  ```
  // like this
  const FIREBASE_API_KEY = 'API-key-here'
  module.exports = FIREBASE_API_KEY
  ```
4. Run `yarn run dev`
5. ???
6. Reap the wild profits and popularity of your new project

#### Using Firebase
If you need access to Firebase data, do the following:
1. Create an account at [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project. Copy your keys over to `/pages/index.js`. You'll see where to paste this data.
3. Navigate to the "database" tab, then create a new Firestore db.
4. Set the read/write rules to "testing" for ease of development
