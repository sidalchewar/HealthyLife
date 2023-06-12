import React, { useEffect, useState } from 'react';
import axios from 'axios';
function LatestNews(props) {
  
    const [news,setNews]=useState();
    useEffect(()=>
    { 
      axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=99b4464aa79a4111890a72cd0008d029").then(response=>
      {
        let data=response.data.articles;
        console.log(data[0].title+"---")
        setNews(data)

      })  
    })
    return (
        <div style={{marginTop:"100px",marginLeft:"80px",marginRight:"80px"}}>
            <h1>Latest News</h1><hr class="bg-danger border-2 border-top border-success"/>
            <center>
          {news?.map(e=>
            {
                if(e.urlToImage!==null)
                {
                return(

                    <div class="card mb-3 bg-transparent" style={{maxWidth: "800px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={e.urlToImage} class="img-fluid rounded-start"  alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{e.title}</h5>
        <p class="card-text">{e.description}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <button onClick={()=>window.open(e.url)} class="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>
</div>
                )
                }
            })}
            </center>
        </div>
    );
}

export default LatestNews;