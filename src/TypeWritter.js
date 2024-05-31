import { useEffect, useState } from "react";

function TypeWritter({
    text,
    typingSpeed=50,
    deletigSpeed=100,
    duration=1000
}){
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        const handleTyping = () =>{
            if(!isDeleting && displayedText.length==text[index].length){
                setIsDeleting(true);
            }
            if(isDeleting){
                if(displayedText.length>0) setDisplayedText((prev) => prev.slice(0,-1))
                else {
                    setIsDeleting(false)
                    setDisplayedText((prev)=> (prev+1)%text.length)
                }
            }
            else{
                setDisplayedText((prev) => prev+text[index].charAt(displayedText.length+1))
            }
        }
        const timeout = setTimeout(handleTyping,isDeleting ? deletigSpeed : typingSpeed)
    },[displayedText,isDeleting,index,text,typingSpeed,deletigSpeed])
    return <div className="typing-effect">
        text
        <span className="caret"></span>
    </div>
}

export default TypeWritter;