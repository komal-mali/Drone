let direction=document.getElementById('drone')
let angle=0

document.getElementById('left').onclick = function() {
    angle-=90
    drone.style.transform = `rotate(${angle}deg)`
    console.log(angle)
    if(angle===-360){angle=0}
}

document.getElementById('right').onclick = function() {
    angle+=90
    drone.style.transform = `rotate(${angle}deg)`
    console.log(angle)
    if(angle===360){angle=0}
}

let move = document.getElementById('move')
let left = direction.offsetLeft, up =direction.offsetTop, right =0, down =240
move.onclick = function moveDrone()
{

    if(angle===0 || angle===-360 || angle===360){
    
            if(up!==0){
                up-=30
                drone.style.top = up +'px'
                console.log(up)
            }
        }
        else if(angle===90 || angle===-270){
    
            if(left!==240){
                left+=30
                drone.style.left = left +'px'
                console.log(left)
            }
        }
    
        else if(angle===180 || angle===-180)
        {
            if(down!==0){
                down-=30
                drone.style.bottom = down +'px'
            }
        }

       else if(angle===270 || angle===-90)
        {
            if(right!==240){
                right+=30
                drone.style.right = right +'px'
            }
        }
           
    }
    

   


