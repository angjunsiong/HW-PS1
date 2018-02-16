/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc  make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {};
exercise.img1 = document.getElementById('PacMan');
exercise.flag = 0; // 0 = mouth open  1 = mouth shut; see chooseImage function for actual use
// Do not that we need not redefine exercise.flag as a variable
// js allows us to define the variable as such

exercise.increment = 20; // pixels to move either + or -; size of every step

exercise.run = function() {
    console.log(exercise.pos.x);
    console.log(PacMan);
    //to check the position and image of pacman; should be within 0 to 400 if correctly done

    exercise.updatePosition();
    exercise.checkWallCollision(); 
    exercise.chooseImage();
};

exercise.updatePosition = function() {

    exercise.pos.x += exercise.increment
    // increment exercise.pos.x by increment
    
    exercise.img1.style.left = exercise.pos.x + "px"
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"

};

exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan1.png';
        };

        // While travelling rightwards, if mouth is closed at this instant, we choose the mouth open image for next loop

        if(exercise.flag === 0) {
            exercise.img1.src = 'PacMan2.png';
        };

        // While travelling rightwards, if mouth is open at this instant, we choose the mouth closed image for next loop

    };
    if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan3.png';
        };
        
        // While travelling leftwards, if mouth is closed at this instant, we choose the mouth open image for next loop

        if(exercise.flag === 0) {
            exercise.img1.src = 'PacMan4.png';
        };

        // While travelling leftwards, if mouth is open at this instant, we choose the mouth closed image for next loop

    };
    
    if (exercise.flag === 1) {
        exercise.flag = 0;
    }
    else {
        exercise.flag = 1;
    };
    // If mouth was closed, we open it for the next loop; and vice versa.
    
};

exercise.checkWallCollision = function() {
   
    if ((exercise.pos.x + exercise.img1.width) >= 600){
        exercise.increment = -exercise.increment;
    }
    
    // The above is to say, if position + width hits 600, it has bumped into right wall; So we change direction

    if (exercise.pos.x <= 0){
        exercise.increment = -exercise.increment;
    }

    // The above is to say, if position hits zero, it has bumped into left wall; So we change direction

};


// Do we need semicolon at the ened of every line?
// No if every line of code starts on a new line
// Yes if we are typing out a long code on a single line > it represents a new line of code

// window.onload = function(){
//     exercise.run();
// }
// Though this was covered in the lecture
// Note to self: We don't need this here beacuse the master html file already trigger the function to run