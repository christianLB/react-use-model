This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Demo: https://react-use-model.vercel.app/

Note: Use npm start to run the app.

This example shows the usage of useModel hook.
useModel allows for using a js/ts class as state, updating the view when a change occurs on it.

Example 1 shows a class named Model containing an attribute count and a method add, that sums one to the counter.
The view contains a label displaying the current count and a button that executes add on the Model.
The expected result is the label updates it's content whenever the button is pressed without the need to create a state to hold the count or an effect to change it.
