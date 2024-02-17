import '../css/footer.css'
import {BsPhoneFill,BsQrCode, BsNewspaper, BsGooglePlay, BsGearWideConnected, BsPlay, BsApp, BsTabletFill, BsTabletLandscapeFill, BsPhoneFlip, BsPhoneVibrate, BsPhoneVibrateFill} from 'react-icons/bs'
export default function Footer(){

    return(
        <div className ="footer">
           <div class="ocean">
            <div class="wave"></div>
            </div>
            <div className='container'>
            <div className ="footer-card ">
                 <div className ="_icon-container" style ={{marginTop:"12px", marginBottom:"12px"}}>
                <BsPhoneVibrateFill color='rgb(223, 205, 91)' size ={50}/>
                </div>

                <span style ={{marginTop:12, color:"#ffff", fontSize:23}}>Contact Details</span>

                <div style ={{padding:"12px 12px 12px 12px", borderTop:"1px solid lightgrey"}}>
                 <span className ="phoneNumber">+263 782317266</span>
                 <div className ="phoneNumber">+263 772920909</div>
                </div>

            </div>

            <div className ="footer-card ">
                 <div className ="_icon-container" style ={{marginTop:"12px", marginBottom:"12px"}}>
                <BsNewspaper color='rgb(223, 205, 91)' size ={50}/>
                </div>

                <span style ={{marginTop:12, color:"#ffff", fontSize:23}}>Scan Code for News</span>
                 
                <div style ={{padding:"12px 12px 12px 12px", borderTop:"1px solid lightgrey"}}>
                <BsQrCode size ={118} color='white' />
                </div>

            </div>

            <div className ="footer-card">
                 <div className ="_icon-container" style ={{marginTop:"12px", marginBottom:"12px"}}>
                <BsTabletLandscapeFill color='rgb(223, 205, 91)' size ={50}/>
                </div>

                <span style ={{marginTop:12, color:"#ffff", fontSize:23}}>Mobile App</span>
                 
                <div style ={{padding:"12px 12px 12px 12px", borderTop:"1px solid lightgrey"}}>
                <BsGooglePlay size ={110} color='rgb(151, 226, 193)' />
                </div>

            </div>

            </div>

{/* <div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgTop">
    <div class="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
  </div>
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
  </div>
</div> */}

        </div>
    )
}