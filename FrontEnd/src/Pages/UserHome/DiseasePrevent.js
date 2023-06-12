import React from 'react';
import Arthritis from "../../Images/Arthritis.jpg"
import Arthritis1 from "../../Images/Arthritis1.jpg"
import BrainAlz from "../../Images/BrainAlz.png"
import BrainAlz1 from "../../Images/BrainAlz1.webp"

function DiseasePrevent(props) {

    let dieasesSt={
        fontSize:"15px",
        borderRadius:"2rem"   
    }
    return (
        <div style={{marginTop:"100px"}}>
            <div class="row" style={{marginLeft:"30px"}}>
                <div class="col">
                    <a class="btn btn-dark" href="#arthritis" style={dieasesSt}>Arthritis</a>
                </div>
                <div class="col" >
                    <a class="btn btn-dark" href="#alzDis" style={dieasesSt}>Alzheimer’s Disease</a>
                </div>
                <div class="col">
                    <a class="btn btn-dark" href="#heartAttack" style={dieasesSt}>Heart Attack</a>
                </div>
                <div class="col">
                    <a class="btn btn-dark" href="#respDis" style={dieasesSt}>Respiratory Diseases</a>
                </div>
                <div class="col">
                    <a class="btn btn-dark" href="#cancer" style={dieasesSt}>Cancer</a>
                </div>
                <div class="col">
                    <a class="btn btn-dark" href="#diabetes" style={dieasesSt}>Diabetes</a>
                </div>
            </div>
            <h1>The 6 Most Common Health Concerns for Seniors</h1>
            <div style={{backgroundColor:"navy",color:"white",fontSize:"40px",width:"100%",height:"200px"}} id="arthritis">
            <div style={{paddingTop:"10px",paddingBottom:"30px",paddingLeft:"20px"}}>1.Arthritis</div>
            <div class="row w-50" >
                <div class="col" style={{marginLeft:"30px"}}>
               <a class="btn btn-light" style={{borderRadius:"3rem"}} href="#Symptom">Symptoms & Causes</a>
                </div>
                <div class="col">
               <a class="btn btn-light" style={{borderRadius:"3rem"}} href="#Treatment">Diagnosis & Treatment</a>
                </div>
                <div class="col">
               <a class="btn btn-light" style={{borderRadius:"3rem"}} href="#videos">Videos</a>
                </div>
            </div>
            </div>

            <div style={{marginLeft:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Overview</h1>
            <center>
            <div class="row">
                <div class="col">
                    <img src={Arthritis} width="400px" height="400px"></img>
                </div>
                <div class="col">
                    <img src={Arthritis1} width="400px" height="400px" style={{borderRadius:"5rem"}}></img>
                </div>
            </div>
            </center>
            <div style={{fontSize:"30px"}}>Arthritis is the swelling and tenderness of one or more joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.</div>
            <div id="Symptom" style={{marginTop:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Symptoms</h1>
            <span style={{fontSize:"30px"}}>The most common signs and symptoms of arthritis involve the joints. Depending on the type of arthritis, signs and symptoms may include:</span>
            <ul style={{fontSize:"25px"}}>
                <li>Pain</li>
                <li>Stiffness</li>
                <li>Swelling</li>
                <li>Redness</li>
                <li>Decreased range of motion</li>
            </ul>
            </div>
            <div id="Treatment" style={{marginTop:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Diagnosis</h1>
            <span style={{fontSize:"30px"}}>During the physical exam, doctors check your joints for swelling, redness and warmth. They'll also want to see how well you can move your joints.</span>
            <h1 style={{fontFamily:"serif",fontWeight:"bold",marginTop:"20px"}}>Treatment</h1>
            <span style={{fontSize:"30px"}}>Arthritis treatment focuses on relieving symptoms and improving joint function. You may need to try several different treatments, or combinations of treatments, before you determine what works best for you.</span>
            </div>
            <div id="videos" style={{marginTop:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Videos</h1>
             <div class="card-group" >
                <div style={{width:"20rem",marginLeft:"240px",}}>
                  <div class="card" >
                  <iframe  src="https://www.youtube.com/embed/_-Q8yEMpBFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="card-body">
                    <h5 class="card-title">Symptoms & Causes</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                </div>
                </div>
                
                <div style={{width:"20rem",marginLeft:"100px"}} >
                  <div class="card" >
                  <iframe src="https://www.youtube.com/embed/phfqTyPBoy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="card-body">
                    <h5 class="card-title">Diagnosis & Treatment</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                </div>
                </div>
                </div>
                </div>
                
            </div>

            <div style={{backgroundColor:"navy",color:"white",fontSize:"40px",width:"100%",height:"200px",marginTop:"30px"}} id="alzDis">
            <div style={{paddingTop:"10px",paddingBottom:"30px",paddingLeft:"20px"}}>2.Alzheimer's Disease</div>
            <div class="row w-50">
                <div class="col" style={{marginLeft:"30px"}}>
               <a class="btn btn-light" style={{borderRadius:"3rem"}} href="#SymptomAlz">Symptoms & Causes</a>
                </div>
                <div class="col">
               <a class="btn btn-light" style={{borderRadius:"3rem"}} href="#TreatmentAlz">Diagnosis & Treatment</a>
                </div>
                <div class="col">
               <a class="btn btn-light" style={{borderRadius:"3rem"}} href="#videosAlz">Videos</a>
                </div>
            </div>
            </div>

            <div style={{marginLeft:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Overview</h1>
            <center>
            <div class="row">
                <div class="col">
                    <img src={BrainAlz} width="400px" height="400px"></img>
                </div>
                <div class="col">
                    <img src={BrainAlz1} width="400px" height="400px" style={{borderRadius:"5rem"}}></img>
                </div>
            </div>
            </center>
            <div style={{fontSize:"30px"}}>Alzheimer’s is generally a disease of advanced age and becomes more common over the age of 65. However, developing dementia is not a normal or healthy part of ageing. In rarer cases, Alzheimer’s can affect individuals much younger (between 30-40 years old) with approximately 5% of cases occurring in people under the age of 65. Though the disease is the same, the causes of early-onset Alzheimer’s are usually slightly different to what is known as sporadic Alzheimer’s disease.</div>
            <div id="SymptomAlz" style={{marginTop:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Symptoms</h1>
            <span style={{fontSize:"30px"}}> Initially mild cognitive impairment and subtle memory loss of recent events before progressing to more severe cognitive impairment with profound amnesia, in addition to personality, behavioural and motor changes, which ultimately lead to death.</span>
            </div>
            <div id="TreatmentAlz" style={{marginTop:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Diagnosis</h1>
            <span style={{fontSize:"30px"}}>To diagnose Alzheimer's dementia, doctors conduct tests to assess memory impairment and other thinking skills, judge functional abilities, and identify behavior changes. They also perform a series of tests to rule out other possible causes of impairment.</span>
            <h1 style={{fontFamily:"serif",fontWeight:"bold",marginTop:"20px"}}>Treatment</h1>
            <span style={{fontSize:"30px"}}>Treating the symptoms of Alzheimer’s can help provide people with comfort, dignity, and independence for a longer period of time and also assist their caregivers. Galantamine, rivastigmine, and donepezil are cholinesterase inhibitors that are prescribed for mild to moderate Alzheimer’s symptoms. These drugs may help reduce or control some cognitive and behavioral symptoms.</span>
            </div>
            <div id="videosAlz" style={{marginTop:"20px"}}>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>Videos</h1>
             <div class="card-group" >
                <div style={{width:"20rem",marginLeft:"240px",}}>
                  <div class="card" >
                  <iframe  src="https://www.youtube.com/embed/wfLP8fFrOp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="card-body">
                    <h5 class="card-title">What is Alzheimer’s Disease?</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                </div>
                </div>
                
                <div style={{width:"20rem",marginLeft:"100px"}} >
                  <div class="card" >
                  <iframe src="https://www.youtube.com/embed/6I8tpL639uA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="card-body">
                    <h5 class="card-title">Diagnosis & Treatment</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                </div>
                </div>
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default DiseasePrevent;