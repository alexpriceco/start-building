### Start Building _____
A straightforward, forkable project for building a web application.

### Launching a development environment
#### Setting up Firebase
You can skip this for now and do it later if you don't immediately need a database for your app.

1. Set up a [Firebase account](https://console.firebase.google.com), if you haven't already.
2. Create a project on Firebase. Under "Develop," you should see "Authentication." Click that, then click on "Sign-in Method." There's a link in the top right "WEB SETUP." Click that. That should give you a popup with all the info you need for step 3.
3. Create `/config/firebase-config.js` as the following file:
  ```
  const config = {
    apiKey: 'jhkGKjhLKGJGUhKHgKJOIuyHGIUB8YIUgYtIUy7iGyGk',
    authDomain: 'your-auth-domain.firebaseapp.com',
    projectId: 'project-id'
  }

  module.exports = config
  ```

#### Finishing setup
1. Run `yarn && yarn dev` in a terminal of your choice
2. Build something beautiful and useful
3. Reap the wild profits and popularity of your new project

### Building things
You can find pages in the `/pages` directory—to create a new page in your app (like /about, or /dashboard), just create a new js file! You can find great documentation about this on [the Next.js repository](https://github.com/zeit/next.js).

There's also a `/components` directory. This is where components go. There's some base styling, but just enough to get you started. There's a single "child" component, but you can rename or delete as you see fit.

Have fun, and good luck! If you run into a bugs, [open an issue](https://github.com/alexpriceco/start-building/issues), or email me.
