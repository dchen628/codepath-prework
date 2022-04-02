# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: David Chen

Time spent: 4 hours spent in total

Link to project: (https://wind-strengthened-novel.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [x] Red circles to represent the amount of mistake the player has made

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/qYG5duYD4o.gif)
![](http://g.recordit.co/GJuDYx7WAr.gif)
![](http://g.recordit.co/jQO0vsn4uY.gif)
![](http://g.recordit.co/rAvbWm7U6k.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I referenced the following website for the timer implementation: https://www.w3schools.com/jsref/met_win_setinterval.asp
I also referenced another website to push elements into an array similar to c++ vector push_back function: https://www.w3schools.com/jsref/jsref_push.asp
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge that I encountered in creating this submission was implementing the game condition of the player making three mistakes before they lose the game. The implementation of the feature itself was not that difficult. However, while implementing this feature, I also decided to add buttons that appear to represent the number of mistakes the player has made. My initial implementation of the three lives worked, though I noticed that it created another problem. Both alert functions in the javascript files for the winGame() and loseGame() function, for some reason, did not pop up. The End button went straight to Start without showing the "Game Over, You Lost" or "Game Over, You Won" phrase. Initially, I thought maybe my implementation was wrong somewhere, but when I looked over my code, it seemed to be correct. So I decided to use the rewind functionality on Glitch in my project to see where the problem first occurred. I kept rewinding back and forth around the same area, focusing solely on the guess function changes, but I still couldn't figure out why the alert wasn't showing. I thought maybe I didn't understand the alert function itself, or I was perhaps missing some argument, so I went to google and tried to read more about the alert() method. The research did not help solve my problem, so I went back to my program and decided to rewind a bit further back. I then noticed that I added the hidden class to the button that represented the mistake the player made in the stopGame() function. I commented out those two lines, and then my alert function started working again. After playing around with the two lines and moving them around, I eventually got the three mistakes per game feature to work and the alert function.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Some questions I have regarding web development is, how can you make a website more appealing to people. Looking at my current project, it seems very lackluster. In my opinion, the buttons should be centered on the screen, and their size should be proportional to the size of the window. I've heard that front-end web development is responsible for the "looks" of the website. What elements make a website more appealing to people, and how do they decide whether the design of the website is too much or too difficult to navigate. Regarding back-end development, how can you make a website more secure and less likely to be hacked? What prevents a website from being overloaded by high traffic or by a DDoS attack?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours on the project, I would want to spend more time researching how to draw/create an x symbol on the website instead of a button for the number of mistakes the player has made. I would also want to learn how to position elements in a specific location relative to the size of the screen. While working on the project, I also came across some bugs/unfinished features in the game. I noticed that when I end a game and immediately start another one, two buttons are pressed instead of one, which should not be the case. Another thing that I would work on is the timer. Currently, whatever time the last game ends, when you start another game, that same time appears for one second before resetting to 25, which is what I set it. Also, the timer should only start counting when the hint is all done playing, so I would also work on that.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/edca67b7c29741998c51c316a85d4089)


## License

    Copyright [David Chen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.