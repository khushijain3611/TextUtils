import React, {useState, useEffect} from 'react'

export default function About({ handlePageTitleChange }) {

   
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    useEffect(() => {
        // Update the title of the page when the component mounts
        handlePageTitleChange('About - TextUtils');
        
        // Reset the title when the component unmounts
        return () => {
            handlePageTitleChange('TextUtils');
        };
    }, [handlePageTitleChange]);
    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({ 
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
                
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({ 
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    
    return (
        <div className="container rounded-3 py-3" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion rounded" id="accordionExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. Project Inspiration:
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    "Hello there! Welcome to Text Utils, a project that was born out of a simple yet powerful idea. As someone who often finds themselves working with text, whether it's for writing, coding, or any other task, I often encountered the need for quick and easy text manipulation tools. The frustration of switching between different applications or manually performing repetitive tasks led me to envision a website that would provide a seamless solution for text transformations."
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. Development Journey:
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    "Creating Text Utils has been an incredible journey of learning and innovation. From selecting the right technologies to designing an intuitive user interface, every step has been a valuable experience. I dived into web development, exploring languages like HTML, CSS, JavaScript and React. Overcoming challenges like optimizing the algorithms for text manipulation and ensuring compatibility across different browsers has been both rewarding and educational. This project has truly been a labor of love, and I'm proud of how far it's come."
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Future Plans:
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    "The journey of Text Utils is far from over! I'm excited to share some of my plans for the future. I'm actively listening to user feedback and suggestions, which will guide the addition of new features and tools like adding Find and replace option. One of my priorities is to expand the range of text manipulation options available, catering to an even broader set of user needs. I'm also considering the possibility of creating browser extensions or mobile apps to make text manipulation even more accessible. Your support and engagement with Text Utils will continue to drive its evolution!" 
                    </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}