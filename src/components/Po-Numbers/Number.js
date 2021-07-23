import React from 'react';
import {GrFormClose} from "react-icons/gr"

const Number = (props) => {
        
    const moveObject =(e)=>{
        var prevX = e.clientX
        var prevY = e.clientY
        const el = e.target

        const mousemove=(e) =>{
            e.preventDefault()
            var newX = prevX - e.clientX;
            var newY = prevY - e.clientY;
            el.style.left = -newX + "px";
            el.style.top = -newY + "px";
            document.getElementsByTagName("body")[0].style.userSelect="none"
        }
        const mouseup =(e)=>{
            window.removeEventListener("mousemove",mousemove);
            document.getElementsByTagName("body")[0].style.userSelect=""
            window.removeEventListener("mouseup",mouseup);
            const setBack=()=>{
                el.style.left = 0 + "px";
                el.style.top = 0+ "px";
            }


            let els =document.getElementsByClassName("PoNumber")
            let index =-1
            for(var i =0 ;i<els.length;i++){
                if(els[i]==el){
                    index=i
                }
            }
            props.drop(e.clientX,e.clientY,index,setBack)

        }
        window.addEventListener("mousemove",mousemove);
        window.addEventListener("mouseup",mouseup);
    }
    return (
        <p onMouseDown={(e)=>moveObject(e)}  onDragEnter className="PoNumber"
        >{"#"+String(props.n)}<span><GrFormClose/></span></p>
    );
}

export default Number;
