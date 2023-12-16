import { Avatar } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GetAppIcon from '@mui/icons-material/GetApp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import './css/BodyPost.css'
import Post1 from './images/ls.jpg'
import Post2 from './images/ai.png'
import Post3 from './images/painting.jpg'



export default function BodyPost() {
  // const [comment,setComment]=useState(false)

  const Opencomment =()=>{
    setComment(!comment)
    
  }
      //  Use State for Vote UP And Down
  const [vote,setVote] = useState(25)
  const [unvote,setUnvote]= useState(10)

  const [activevote,setActivevote]= useState(false)
  const [unactivevote,setUnactivevote]= useState(false)

  function votef(){
    if(activevote){
      setActivevote(false)
      setVote(vote-1)
    }else{
      setActivevote(true)
      setVote(vote+1)
      if(unactivevote){
        setUnactivevote(false)
        setVote(vote+1)
        setUnvote(unvote-1)
      }
    }
  }

  function unvotef(){
    if(unactivevote){
      setUnactivevote(false)
      setUnvote(unvote-1)
    }else{
      setUnactivevote(true)
      setUnvote(unvote+1)
      if(activevote){
        setActivevote(false)
        setUnvote(unvote+1)
        setVote(vote-1)
      }
    }
  }

  return (
    <>

                                     {/* Main Div */}
      <div className='postContainer'>
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>

                                        {/* Post1 */}
                 <div className='author'>Nicoletta Lanese</div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>In a 1st, AI neural network captures 'critical aspect of human intelligence' <span className='time-span'>6d ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>“The research, published Wednesday (Oct. 25) in the journal Nature, signals a shift in a decades-long debate in cognitive science — a field that explores what kind of computer would best represent the human mind. Since the 1980s, a subset of cognitive scientists have argued that neural networks, a type of artificial intelligence (AI), aren't viable models of the mind because their architecture fails to capture a key feature of how humans think. .”</p>
        <div ><img src={Post1} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>
                                       {/* use state downVote on click */}
                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>455</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>90</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

                                           {/* Post2 */}
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>
                 <div className='author'>Kristina Terech  </div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>Qualcomm and Microsoft's game-changing chip could supercharge Windows 12
<span className='time-span'>5d ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>We’re approaching ever closer to the next generation of Windows, which most people expect will be Windows 12, and at Qualcomm's Snapdragon X Elite event, which took place this week, we got a peek at some potential Windows 12 features. </p>
        <div ><img src={Post2} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>

                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>3k</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>387</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

                                           {/* Post2 */}
                                            
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>
                 <div className='author'>Kenneth R. Rosen </div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>a flaw in the famous model that programmers use to translate color to pixels.<span className='time-span'>23 d ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>BENEATH A CLEAR SKY and a high sun, a regular human eye can see nearly the entire visible color spectrum. Remove direct sunlight, and a reflection offers only a sliver of the rainbow. But despite darkness distorting our points of reference, we can still determine color in shadow. Many factors influence the hues we detect: our eyes, our brains, the air, objects the light bounces from, Earth’s geometry, and even our visual memories.</p>
                <div ><img src={Post3} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>

                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>8k</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>455</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

      </div>
    </>
  )
}
