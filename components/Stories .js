import React from 'react'

function Stories () {
    
    const stories =[
        {
            "name":"subhash",
            "image":"https://i.pinimg.com/474x/63/5f/9d/635f9dd1fbd850d63bd364f3d0f7ba81.jpg",
            "alt":"this is a fog image"
        },
         {
            "name":"subhash",
            "image":"https://wallpapersok.com/images/high/fascinating-nature-mobile-0sld4om7yg1dyncj.jpg",
            "alt":"this is a fog image"
        },
         {
            "name":"subhash",
            "image":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj1fj0gYhBud2ih6QoFCua4z-jI7xgJ9OHdpQ5bH8qq5Ov07SxRhyM1nB1jKaehWydtsPAyd2vIqoeiS4wkGMCZksUiqjLO_zCNa4bSVF8XEcpkv8Dg-P7_Sng_-nYIfKKc6GDXH-v6wND/s1600/Landscape-mobile-wallpaper.jpg",
            "alt":"this is a fog image"
        }
    ]
  return (
   <div class="stories">

{
    stories.map((s)=>{
        return(
        <div class="story">
          <img src={s.image} alt={s.alt}/>
          <div class="story-user">{s.name}</div>
        </div>
        )
    })

   
}
        
        
      </div>
  )
}

export default Stories 
