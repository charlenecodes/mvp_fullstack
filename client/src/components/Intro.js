import React from "react"

export default function Intro(){
    return(
        <>
            {/* //? Why are Material icons not working 
            <span className="material-icons-round">business_center</span>
            <span className="material-icons-round">
            <span className="material-icons-outlined">
                    monetization_on
                    </span> 
                    sentiment_satisfied_alt
                    </span> */}
            <div className="text-center mt-6 p-5">
                <div className="">
                    <div style={{color: "#FC5F5F", fontFamily: "'DM Serif Display', serif", fontSize: "18px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-airplane-fill" viewBox="0 0 16 16">
                            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                        </svg> Create your own itinerary
                    </div>
                </div>
                <div className="">
                    <div style={{color: "#FC5F5F", fontFamily: "'DM Serif Display', serif", fontSize: "18px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg> Hassle-free planning
                    </div>
                </div>
                <div className="">
                    <div style={{color: "#FC5F5F", fontFamily: "'DM Serif Display', serif", fontSize: "18px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
                            <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                            <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
                        </svg> Save money
                    </div>
                </div>
            </div>
            

            <div className="px-3">
                <h1 style={{color: "color: #2B2F38", textAlign: "center", margin: "20px 10px"}}>What kind of travel are you looking for?</h1>
                <p>We have organized our trips into different categories, based on different budgets to suit your needs!</p>
                <p>You can mix and match the experiences to make your own trip, especially to match the number of days you are staying in Switzerland.</p>
            </div>
            
        </>
    ) 
}

