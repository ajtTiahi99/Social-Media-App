import React,{useState,useRef} from 'react';
import ProfileImage from '../../img/profileImg.jpg';
import './PostShareSection.css';
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilLocationPoint} from "@iconscout/react-unicons";
import {UilSchedule} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";

const PostShareSection = () => {
    const [image,setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange=(e)=>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage({
                image:URL.createObjectURL(img)
            });
        }
    }

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder="What do you want to share..."/>
                <div className="postOptions">
                    <div className="options" style={{color:"var(--photo)"}}
                        onClick={()=>imageRef.current.click()}
                    >
                        Photo<UilScenery/>
                    </div>
                    <div className="options" style={{color:"var(--video)"}}>
                       Video<UilPlayCircle/>
                    </div>
                    <div className="options" style={{color:"var(--location)"}}>
                        Location<UilLocationPoint/>
                    </div>
                    <div className="options" style={{color:"var(--schedule)"}}>
                        Schedule<UilSchedule/>
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{display:"none"}}>
                        <input type="file" name="myImg" ref={imageRef} onChange={onImageChange}/>
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    ) 
}

export default PostShareSection