let rednum = 0;
let bluenum = 0;
let prev = "0";

function roll4() {
    document.getElementById("button").style.display = "block"
    document.getElementById("button1").style.display = "block"
    document.getElementById("button4").style.display = "none"
}

function roll() {
    document.getElementById("button1").style.display = "none"
    let val = Math.floor((Math.random() * 6) + 1);
    document.querySelector("img").style.display = "block";
    document.querySelector(".img").setAttribute("src", "new.gif")
    setTimeout(function() {
        document.getElementById("p").innerHTML = "Black Player turn"
        document.querySelector(".img").setAttribute("src", "dice" + val + ".png");
        rednum += val;
        if (rednum > 100) {
            rednum -= val;
            prev = "0"
            return
        }
        document.getElementById("button").style.display = "none"
        document.getElementById("button1").style.display = "block"
        document.getElementById("button1").disabled = true;
        document.getElementById("button1").style.opacity = "0.5"
        document.getElementById("red1").style.display = "none"
        if (rednum >= 100) {
            alert("Red won") // return
            document.getElementById('button').style.display = 'none'
            document.getElementById('button1').style.display = 'none'
            document.getElementById('button2').style.display = 'block'
            document.getElementById("h2").innerHTML = "Congratulation <br/>Red Won"
            document.getElementById("p").innerHTML = ""
        }
        let time = 0;
        for (let i = Math.abs(rednum - val); i <= rednum; i++) {

            let ab = i.toString();
            time++;
            // if (i == bluenum) {
            //     document.getElementById(ab).classList.remove("test5")
            //     document.getElementById(ab).classList.add("test4")
            //     setTimeout(function() {
            //         document.getElementById(ab).classList.add("test5")
            //     }, 500)
            // }
            setTimeout(function() {
                if (i == 2 || i == 8 || i == 25 || i == 59) {
                    document.getElementById(ab).classList.remove("second")
                    document.getElementById(ab).classList.add("test4");
                    console.log("did")
                } else if (i == 15 || i == 47 || i == 74 || i == 88) {
                    document.getElementById(ab).classList.remove("first")
                    document.getElementById(ab).classList.add("test4");
                }
                document.getElementById(ab).classList.add("test4");
                document.getElementById(prev).classList.remove("test4")
                prev = ab
                setTimeout(function() {
                    if (i == 2 || i == 8 || i == 25 || i == 59) {
                        // document.getElementById(ab).classList.remove("test4")
                        document.getElementById(ab).classList.add("second")
                    } else if (i == 15 || i == 47 || i == 74 || i == 88) {
                        document.getElementById(ab).classList.add("first")
                    }
                }, 100)
                setTimeout(function() {
                    if (rednum == 2) {
                        rednum = 16;
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4")
                        document.getElementById(prev).classList.remove("test4")
                        prev = ab;
                    } else if (rednum == 8) {
                        rednum = 28
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4");
                        document.getElementById(prev).classList.remove("test4")
                        prev = ab;
                    } else if (rednum == 25) {
                        rednum = 56
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4")
                        document.getElementById(prev).classList.remove("test4")
                        prev = ab;
                    } else if (rednum == 59) {
                        rednum = 87
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4")
                        document.getElementById(ab).classList.remove("test4")
                        prev = ab;
                    } else
                    if (rednum == 88) {
                        rednum = 38;
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4")
                        document.getElementById(prev).classList.remove("test4")
                        prev = ab;
                    } else if (rednum == 74) {
                        // document.getElementById(prev).classList.add("first")
                        rednum = 66;
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4")
                        document.getElementById(prev).classList.remove("test4")
                        prev = ab;
                    } else if (rednum == 47) {
                        rednum = 27;
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4")
                        document.getElementById(prev).classList.remove("test4")
                        prev = ab;
                    } else if (rednum == 15) {
                        rednum = 4;
                        let ab = rednum.toString();
                        document.getElementById(prev).classList.add("second")
                        document.getElementById(ab).classList.add("test4")
                        document.getElementById(prev).classList.remove("test4")
                        prev = ab;
                    }
                }, (time + 1) * 100)
            }, time * 100)
            setTimeout(function() {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button1").style.opacity = "1"
                },
                (val + 1) * 100)
        }
    }, 1000);

}

// Function for blue roll


let prev1 = "0";

function roll1() {
    document.getElementById("button").style.display = "none"
    let val = Math.floor((Math.random() * 6) + 1);
    document.querySelector("img").style.display = "block";
    //setting up a  rotating dices gif

    document.querySelector(".img").setAttribute("src", "new.gif")

    //main function

    setTimeout(function() {
        document.getElementById("p").innerHTML = "Red Player turn"
        document.querySelector(".img").setAttribute("src",
            "dice" + val + ".png");
        bluenum += val;

        //checking for overflow condition

        if (bluenum > 100) {
            bluenum -= val;
            prev1 = "0"
            return;
        }
        document.getElementById("button1").style.display = "none";
        document.getElementById("button").style.display = "block";
        document.getElementById("button").style.opacity = "0.5"
        document.getElementById("button").disabled = true;
        document.getElementById("blue1").style.display = "none"


        //showing win condition

        if (bluenum >= 100) {
            document.getElementById('button').style.display = 'none'
            document.getElementById('button1').style.display = 'none'
            document.getElementById('button2').style.display = 'block'
            document.getElementById("h2").innerHTML = "Congratulation <br/> Black Won"
            document.getElementById("p").innerHTML = ""
            alert("Black won");
        }
        let time = 0;
        for (let i = Math.abs(bluenum - val); i <= bluenum; i++) {
            let ab = i.toString();
            time++;
            setTimeout(function() {
                if (i == 2 || i == 8 || i == 25 || i == 59) {
                    document.getElementById(ab).classList.remove("second")
                    document.getElementById(ab).classList.add("test5");
                } else if (i == 15 || i == 47 || i == 74 || i == 88) {
                    document.getElementById(ab).classList.remove("first")
                    document.getElementById(ab).classList.add("test5");

                }
                document.getElementById(ab).classList.add("test5");
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab
                setTimeout(function() {
                        if (i == 2 || i == 8 || i == 25 || i == 59) {
                            // document.getElementById(ab).classList.remove("test5")
                            document.getElementById(ab).classList.add("second")
                        } else if (i == 15 || i == 47 || i == 74 || i == 88) {
                            document.getElementById(ab).classList.add("first")
                        }

                    }, 1000)
                    //jumping on snake aor ladder action

                setTimeout(function() {
                    if (bluenum == 2) {
                        bluenum = 16;
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;
                    } else if (bluenum == 8) {
                        bluenum = 28
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;
                    } else if (bluenum == 25) {
                        bluenum = 56
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;
                    } else if (bluenum == 59) {
                        bluenum = 87
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;
                    } else
                    if (bluenum == 88) {
                        bluenum = 38;
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;
                    } else if (bluenum == 74) {
                        bluenum = 66;
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;
                    } else if (bluenum == 47) {
                        bluenum = 27;
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;
                    } else if (bluenum == 15) {
                        bluenum = 4;
                        let ab = bluenum.toString();
                        document.getElementById(prev1).classList.add("second")
                        document.getElementById(ab).classList.add("test5")
                        document.getElementById(prev1).classList.remove("test5")
                        prev1 = ab;

                    }
                }, (time + 1) * 100)

            }, time * 100)

            //disbling the button 

            setTimeout(function() {
                document.getElementById("button").disabled = false;
                document.getElementById("button").style.opacity = "1"

            }, (val + 1) * 100)
        }


    }, 1000);

}


//function for restart game

function roll2() {
    window.location.reload()
}