
gardenn = "";
my_status = "";

array = [];

function preload() {

    gardenn = loadImage("garden.jpg");

}
function setup() {

    canvas = createCanvas(800, 573);
    canvas.center();
   
   
  


}
function draw() {

    image(gardenn, 0, 0, 800, 573);

    if (my_status != "") {

        r = random(255);
        g = random(255);
        b = random(255);

        for (i = 0; i < array.length; i++) {
            obj_x = array[i].x;
            obj_y = array[i].y;
            obj_w = array[i].width;
            obj_h = array[i].height;
            obj_c = floor(array[i].confidence*100);
            obj_l = array[i].label;


            stroke(r,g,b);
            noFill();
            rect(obj_x+80, obj_y, obj_w, obj_h);
            fill(r,g,b);
            text(obj_l, obj_x +50, obj_y + 30);
            text(obj_c + "%", obj_x +50, obj_y + 43);

            document.getElementById("detecte").innerHTML = "Number of the objects detected are: " + array.length;
            
        }
       
        objectDetector.detect(gardenn, got_results);
    }

  

}
function modal_loaded() {

    document.getElementById("status").innerHTML = "Detecting Objects";
    console.log("modal_loaded");
    my_status = true;
    objectDetector.detect(gardenn, got_results);


}
function got_results(error, results) {

    if (error) {

        console.error(error);

    }
    else {

        console.log(results);

        array = results;
        document.getElementById("status").innerHTML = "Objects Detected";

    }

}
function start_1(){

    objectDetector = ml5.objectDetector("cocossd", modal_loaded);

}





  /*
    

    
        //rect(x,y,w,h)
        //cat
        cat_x = array[0].x;
        cat_y = array[0].y;
        cat_w = array[0].width;
        cat_h = array[0].height;



        //dog
        dog_x = array[1].x;
        dog_y = array[1].y;
        dog_h = array[1].height;
        dog_w = array[1].width;
        dog_c = floor(array[1].confidence * 100);


        stroke("lime");
        noFill();
        rect(dog_x, dog_y, dog_w, dog_h);
        fill("green");
        text("DOG", dog_x - 30, dog_y + 30);
        text(dog_c + "%", dog_x - 30, dog_y + 43);
        

        
        stroke("lime");
        noFill();
        rect(100,80,25,400);
        fill("green");
        text("DOG",65,100);
        text("87%",65,115);
        noFill();
        rect(210,135,150,250);
        fill("green");
        text("CAT",365,145);
        text("76%",365,160);
    */