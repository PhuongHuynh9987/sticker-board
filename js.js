// get elements from documents
sticky_Note = document.getElementById('sticky_note');

dragEl(sticky_Note);

// variables to store the position of the stickers, set initial values 0. X is horizontal position, Y is vertical position


function dragEl(element){
    var clientX_before = 0, clientY_before  = 0, clientX_after  = 0, clientY_after = 0;
    
    element.onmousedown = dragMouse;

    function dragMouse(e){
        e = e || window.event;
        e.preventDefault();
        
        // set the mouse cursor position before dragging 
        clientX_before = e.clientX;               
        clientY_before = e.clientY;
        // console.log('before',clientX_before,clientY_before);

        document.onmouseup = closeDrag;                // when the element is dropped
        document.onmousemove =  dragging;             //when the element is moved around
    
    }

    function dragging(e){
        e = e || window.event;
        e.preventDefault();

        // calculate the new cursor position
        clientX_after = clientX_before - e.clientX;
        clientY_after = clientY_before - e.clientY;
        clientX_before = e.clientX;               
        clientY_before = e.clientY;
        // console.log('after',clientX_before,clientY_before);

        // set the element's new postition
        element.style.left = (element.offsetLeft - clientX_after) + "px";
        element.style.top = (element.offsetTop - clientY_after) + "px";
    }

    function closeDrag(){
        document.onmouseup = null;
        document.onmousemove = null;

    }

}






















