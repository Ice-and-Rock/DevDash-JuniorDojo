# TODO

- Test the data isn't fetched until after password checker is successful

### TestQuestions.js
- Set state for current question 
- Set state for current answer
- Set state for score out of 10 

## Current plan
Overall goals
- Finish the rendering of the Test component
    - 1 question at a time ✅
    - reload button ✅
    - show score at the end of the test ✅
- Enclose the test component into a seperate box
    - outside are the buttons for the reload
    - outside is the number of question they are up to
- Write an introductory page to explaiun what the goal is
- break down the components into smaller pieces
    - test questions
    - buttons 
- Delete unneccasrary components and parts including the origional useFetch calls

- import Tailwind?
- research Bootstrap examples - which is fairly limited? 

### make sure the FETCH is onyl actuvatedx once after the password component is called
✅

## Feedback from users:
**Show the asnwers of the user and show them the correct ones** ✅

    **Test Results Component** 
    Render:
        - Create a Results component, pass props for { responseData, userAnswers }
        - Conditionally render the <Results /> component over the ShowScore component Card.Body
    Code:
        Use .map() to iterate through the {responseData.questions} with (questionData, index)
            - render the question number "+1" (starts from 0)
            - Create a Card.Body tag for the data to render 
            - render the question / answers.correct (shows correct answer)
            - colour the render
                - Depending on whether the userAnswers[index] is true/false
                - using "style={{ background: ? colour : colour}}
        Use .map() to iterate through {userAnswers} 
            - display emoji ✅ / ❌ depending on user answer: true OR false 
            - with the index( +1 ) for the question number 

**render something fun to do when the tests are loading**

    Adapt and import an old rock, paper, scissors game into the component
        - Check the old game can me imported as a third party library 
    🏆 I build and installed my own game via NPM package, couldn't find a good one. 
        - what an achievement!! ⭐️
    **next...**
    - Install the new package I build and add it to the Test component
    **
    - Didn't work ❌
        - Check the compatability of the new game with React 
        - Might need to check exports and JSX if using the new package as a JSX !!
        - Damn near spent 5 hours trying to work out whats wrong. I needed to create the npm package as a React App. I just don't have the time to go back through all of this to make it work. Another time, maybe!
    **

