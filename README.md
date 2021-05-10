# 05 Third-Party APIs: Work Day Scheduler

**[MissNG Scheduler](https://missng-git.github.io/Scheduler/)**

Using this simple calendar application will allow a user to save events for each hour of the day. This app will run in the browser and features dynamically updated HTML and CSS powered by jQuery with minimal utilisation of [Moment.js](https://momentjs.com/).

## Objectives

```
+ Help users organise their busy schedule
+ Add important events to a daily planner
+ Assist in effective time management
```

## Mock-Up

The following animation demonstrates the application functionality:

![day planner demo](./Assets/screenshot.PNG)

### Overview of Code Functionality

1. Application displays header inclusive of current date and time, loaded from `Moment.js`, which is dynamically updated every second.

2. Application loads planner and presents time blocks for standard business hours to user.

3. Application's time blocks are stylishly color-coded to indicate whether an event is in the past, present or future.

4. Application allows user to enter text within selected time block to register an event.

5. Application's 'add to calendar' (save) button successfully saves data entered into local storage.

6. Application retrieves stored information and correctly displays back into relevant text area.

7. Application successfully keeps data displayed in relevant time block even after page refresh.

8. Application maintains responsives and adjusts images, buttons and content to relevant screen sizes.

### Usability

- **NOTE:** Current date & time displayed at top of page.

- Scroll to desired time block and enter data into blank text area (_these are the semi-transparent color-coded boxes_).

- Click on the blue button with calendar icon on the right to save your entry to local storage.
  _Note:_ _the calendar icon will turn dark grey when you hover over it._

- Rest assured that your information will remain on the page even if you refresh the page! 👍
