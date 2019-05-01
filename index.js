var myPath;

function onMouseDown(event) {
    var myCircle = new Path.Circle({
        center: event.point,
        radius: 50
    });
    myCircle.fillColor = 'red';
    
}

function onMouseMove(event) {
    myCircle.position = event.point;
}