## 2018.02.17 EMAIL

Hi Jose!

Here’s what I have for the first prototype so far, fairly basic at this point:
https://github.com/JulianaTennett/p5_homework/tree/master/prototype01

I got the basis for this code (creating the moving balls) from a p5 example online, and made a class for manic circles wiggling rapidly and depressive circles that will sway!

Here is the google doc I pasted the whole piece into: (PRIVATE)


Next steps:

- Figuring out why the heck the hovers aren’t working for the depress classes, like they are for the manic ones :(
    + Not sure what yo umean by this, they work for me... 

- Right now the depressive balls just wiggle at a slower/less noticeable rate, but I would like for them to sway very slowly left to right instead, so I need to problem solve how to create that kind of a motion in p5
    + Let's keep maniac movement as a wiggle, but change depressed one to an eased motion form left to right, see the code

- Right now the circles display at a random x,y coordinate in the upper or lower third of the screen, but I would like to ensure they’re spaced out aesthetically. Before making the class so the circles can jiggle, I had used a for loop with an array that selected a random x,y at coordinates in each sixth of the screen, then drew a circle 6 times, one for each position in the array. When I opted for the class, so I could display and giggle the circles in one place, I couldn’t figure out how to specify positions in sixths with an array or otherwise...
    + In order to do this, you cannot not use simply random() anymore, you have to do some precalculation of random values, and then normalize them on the screen. See code!

- Make only the manic or depressive circles appear at one time

- Make the circle all one class, have them move periodically up or down on the screen and change color, hover message, and motion depending whether they are at the top or bottom

- Make the circles shoot up and down on the screen in a dramatic, noticeable gesture (like rapidly jiggling, then shooting!) 

- Concept: allowing text to display in time intervals for the “in the moment” thoughts I had when writing the piece, which are themselves part of the piece (see the google doc to read the whole piece in it’s original, linear progression). I think I will eventually do this by having this text display when the circles start rapidly moving, and before they drop to the bottom or shoot to the top



SO, I WILL START TRYING TO TACKLE THESE NEXT STEPS right now. I’m not even sure where to start on a lot of them, but I will start! If you have feedback, suggestions, or anything please let me know — I could use all the technical help I can get!

See you next week!

Juliana

