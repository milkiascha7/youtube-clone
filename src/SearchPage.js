import React from 'react';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import  TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h1>FILTER</h1>
            </div>
            <hr />
            
            <ChannelRow image="https://images.pexels.com/photos/4887868/pexels-photo-4887868.jpeg?cs=srgb&dl=pexels-cottonbro-4887868.jpg&fm=jpg" channel="Clever Programmer" verified subs="660k" noOfVideos={382} description="you can find awesome programing lessons here you can find awesome programing lessons here you can find awesome programing lessons hereyou can find awesome programing lessons here you can find awesome programing lessons here bla bla bla" />
            
            <hr />

            <VideoRow views="1.4M" subs="659k" description="Do you want a FREE one hour lesson training check... " timestamp="59 seconds ago" channel="Clever Programmer" title="Lets build a youtube clone with react js and firebase" image="https://images.pexels.com/photos/4887868/pexels-photo-4887868.jpeg?cs=srgb&dl=pexels-cottonbro-4887868.jpg&fm=jpg" />
            
            <VideoRow views="11.4M" subs="6M" description="Do you want a FREE one hour lesson training check... " timestamp="59 seconds ago" channel="Clever Programmer" title="Lets build a youtube clone with react js and firebase" image="https://images.pexels.com/photos/4887868/pexels-photo-4887868.jpeg?cs=srgb&dl=pexels-cottonbro-4887868.jpg&fm=jpg" />
            
            <VideoRow views="24k" subs="359k" description="Do you want a FREE one hour lesson training check... " timestamp="59 seconds ago" channel="Clever Programmer" title="Lets build a youtube clone with react js and firebase" image="https://images.pexels.com/photos/4887868/pexels-photo-4887868.jpeg?cs=srgb&dl=pexels-cottonbro-4887868.jpg&fm=jpg" />
          
            <VideoRow views="970k" subs="69k" description="Do you want a FREE one hour lesson training check... " timestamp="59 seconds ago" channel="Clever Programmer" title="Lets build a youtube clone with react js and firebase" image="https://images.pexels.com/photos/4887868/pexels-photo-4887868.jpeg?cs=srgb&dl=pexels-cottonbro-4887868.jpg&fm=jpg" />
        
        </div>
    )
}

export default SearchPage
