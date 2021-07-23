import "./add.css";

const Add = () => {

    
    
    const moveObject =(e)=>{
        var prevX = e.clientX
        var prevY = e.clientY
        const el = e.target
        const rect = el.getBoundingClientRect()

        var delta= 100
        if (window.innerWidth<720){
            delta=50
        }
        const winH = window.innerHeight-delta
        const winW = window.innerWidth-delta


        

        const mousemove=(e) =>{
            e.preventDefault()
            console.log(e.clientX,e.clientY)
            var newX = prevX - e.clientX;
            var newY = prevY - e.clientY;
            if(e.clientX>winW){
                newX=prevX-winW;
            }
            if(e.clientY>winH){
                newY=prevY-winH;
            }
            if(e.clientY<delta){
                newY = prevY-delta
            }
            if(e.clientX<delta){
                newX = prevX-delta
            }
            el.style.left = rect.left -newX + "px";
            el.style.top = rect.top -newY + "px";
            document.getElementsByTagName("body")[0].style.userSelect="none"
            
            
    
        }
        const mouseup =()=>{
            window.removeEventListener("mousemove",mousemove);
            document.getElementsByTagName("body")[0].style.userSelect=""
            window.removeEventListener("mouseup",mouseup);
        }
        window.addEventListener("mousemove",mousemove);
        window.addEventListener("mouseup",mouseup);
    }
    const resetPos = (e)=>{
        e.target.parentNode.style.left="5vw"
        e.target.parentNode.style.top="60vh"
        console.log("yes")
    }

    return (
        <div>
            <div class="task-form">Hello</div>
            <button onMouseDown={moveObject}   class="add-btn">
                <div onClick={(e)=>{resetPos(e)}}>Add task</div>
            </button>
        </div>
    );
}

export default Add;
