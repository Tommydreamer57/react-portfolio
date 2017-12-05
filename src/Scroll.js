function checkScrollHeight() {
    let currentHeight = document.getElementsByClassName('content_window')[0].scrollTop;

    let about_Y = document.getElementById('one').offsetTop;
    let skills_Y = document.getElementById('two').offsetTop;
    let projects_Y = document.getElementById('three').offsetTop;
    let contact_Y = document.getElementById('four').offsetTop;

    let break_1 = (about_Y + skills_Y) / 2;
    let break_2 = (skills_Y + projects_Y) / 2;
    let break_3 = (projects_Y + contact_Y) / 2;

    // console.log(contact_Y,'and',break_3)
    // console.log('current height', currentHeight)

    // designed to only set the state a single time while scrolling over each break point;

    if (currentHeight > break_1) {
        if (currentHeight > break_2) {
            if (currentHeight > break_3) {
                if (!state_set_4) {
                    this.setState({ section: 4 });
                    state_set_4 = true;
                    state_set_3 = false;
                    state_set_2 = false;
                    state_set_1 = false;
                }
            } else if (!state_set_3) {
                this.setState({ section: 3 });
                state_set_3 = true;
                state_set_1 = false;
                state_set_2 = false;
                state_set_4 = false;
            }

        } else {
            if (!state_set_2) {
                // console.log('two')
                this.setState({ section: 2 });
                state_set_2 = true;
                state_set_1 = false;
                state_set_3 = false;
            }

        }
    } else {
        if (!state_set_1) {
            // console.log('one')
            this.setState({ section: 1 });
            state_set_1 = true;
            state_set_2 = false;
            state_set_3 = false;
        }

    }

}

//function designed to scroll to any section while easing into that section
function scroll_to_section(id) {

    let initial = 1; //milliseconds used to scroll smoothly
    // let timeFraction = 1;
    let marginY = document.getElementsByClassName('content_window')[0].scrollTop;
    let destination = document.getElementById(id).offsetTop;
    // let difference = Math.abs(marginY - destination);
    let halfway = (marginY + destination) * .5; // maybe make it number of pixels to that section
    let madeItHalfWay = false;
    console.log(halfway)

    function handleScroll(index, direction) {
        if (index > halfway && madeItHalfWay === false && direction === 'down') {
            madeItHalfWay = true;
        }
        if (index < halfway && madeItHalfWay === false && direction === 'up') {
            madeItHalfWay = true;
        }


        let timeFraction = Math.abs(index - halfway) / (halfway) * 10;


        // console.log(madeItHalfWay)

        if (madeItHalfWay) {
            initial = initial + 5 + timeFraction;
        } else {
            initial = initial + 4;
        }

        setTimeout(() => {
            document.getElementsByClassName('content_window')[0].scrollTop = index;
        }, initial * .1) // change fraction to change scroll speed
    }

    //determines scroll direction
    if (marginY < destination) {
        for (let i = marginY; i <= destination; i++) {
            handleScroll(i, 'down')
        }
    } else {
        for (let i = marginY; i >= destination; i--) {
            handleScroll(i, 'up')
        }
    }

}