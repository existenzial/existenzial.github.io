---
published: true
title: Phaser & Cocoon.io: What they don’t tell you
layout: post
---
FEBRUARY 1, 2016

![Phaser](https://jazzedaboutcoding.files.wordpress.com/2015/12/img.png?w=252&h=216)Everyone loves gaming, whether they’ll admit to it or not. How easy is it to actually get started in the world of game development, however?

That depends on a few factors:

* Web/HTML5 or Mobile (or Both)
* 2D or 3D sprites and assets ([2D Tools](https://www.codeandweb.com/) & [3D Tools](https://www.blender.org/))
* Your familiarity with gaming engines and whether you feel comfortable building a game from scratch using Javascript, Java, Actionscript and other common languages (there are also options like [GameClosure](http://www.gameclosure.com/) that can also give you out-of-the-box game design assistance as well)
* How much time you have for development
Once you’ve decided what your end goal is, you can start to figure out what will be necessary to actually bring that dream to life. If you want a game that’s mobile and accessible for everyone, keep in mind that smartphones can essentially run your web game within a browser if all else fails for App Store & Google Play Store deployment. A mobile native game will require some form of compiling into either an apk for Android or xcarchive for iOS and may not be what you need for the needs of your particular project, so always weigh your options and focus on the developer time necessary for any avenue.

Also keep in mind that existing mobile app frameworks like Ionic and build tools like PhoneGap are there to help you reach your goal, however, they are not specifically built with games in mind(e.g.: Ionic, which is built on top of Angular, is more geared towards single-page apps and does not officially support [WebGL](https://www.chromeexperiments.com/webgl) or other graphics APIs) and you may max out their capabilities. You can find yourself in a very square peg in a round hole type of situation, but sometimes you can make it work with enough research. [Cocoon.io](http://cocoon.io/) is designed to make your life easier in this respect in that you can compile your app for iOS and Android concurrently with minimal headache. Just a word to the wise: make different sizes of your imagery for all possible devices and load them in turn for whichever device is detected to make your life easier.

It is of the utmost importance to build your game around the different game states necessary for the full experience you want to give your user. Phaser, a wonderful Javascript gaming library with its own built-in physics engine, is designed in such a way that you are forced to always remember this fact when building any project. Every state should reflect assets (music, imagery, etc.) that you want to preload and display in either that state or those that succeed it. Once the assets are preloaded, you add them to each state when you need them on the screen and for the player to interact with. You can set a variety of inputs whether you want your game to be keyboard or touch responsive if designing for mobile.

Typical Phaser game file structures separate the loading of these assets into a Preloader state within the common file structure:

* Boot  (to set the game config, can also act as a loading screen)
* Preloader (to load all assets)
* MainMenu(to link most other states not involved in gameplay e.g.: Options, About, Credits etc.)
* Game (the main state for gameplay)
* GameOver (a state if the player loses)
* NextLevel (a state to advance forward with increased difficulty)
* Win (a state when the player finally wins the game)
* Leaderboard (an optional state to retain a player scoring system)
Once your assets are loaded and your game file structure designed, you can start to actually code your game.

There are a wide variety of tutorials out there to help set you on the path to developing your game fully, but it is fundamental to your success to map out the game’s concept and end goal to help drive the user experience as you continue to develop. Decide how you want players to interact with the game and whether you want your game to be free or have in-game purchases? Do you want it cross-platform or just web-based?

If you decide you want to develop for Android, make sure you sign up for your Google Play developer’s license and configure your [keystore](https://github.com/amirudin/build/wiki/Android-Signing) and [certificate](http://developer.android.com/tools/publishing/app-signing.html#cert) ahead of time so that they’re ready once you go to deploy your app to the Play Store. For setting up your app for iOS, check out [this](http://www.raywenderlich.com/8003/how-to-submit-your-app-to-apple-from-no-account-to-app-store-part-1) wonderfully concise set of easy-to-follow instructions.

To continue your journey down the rabbit hole, check out the following tutorials and resources to try your hand at Phaser:

* [joshmorony.com](http://www.joshmorony.com/category/phaser-tutorials/)
* [HTML5 Dev Forums](http://www.html5gamedevs.com/forum/14-phaser/)
* [Phaser.io](http://phaser.io/tutorials/making-your-first-phaser-game)
