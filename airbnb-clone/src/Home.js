import React from 'react'; 
import './Home.css';
import Banner from './Banner'
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card 
                src ="https://www.mymove.com/wp-content/uploads/2007/05/Small-living-room_Photographee.eu_Shutterstock.jpg"
                title="Online Experience"
                description="Unique activities we can do together"
                price="34$"
                />
                <Card 
                src ="https://sites.google.com/site/nhachungcugiarequan8/_/rsrc/1511508068839/hinh-anh-can-ho/097c45ccb3785f260669.jpg"
                title="Online Experience"
                description="Unique activities we can do together"
                price="34$"
                />
                <Card 
                src ="http://www.himlamcholon.com/admin/upload/images/XOLCIMG_4633.jpg"
                title="Online Experience"
                description="Unique activities we can do together"
                price="34$"
                />
            </div>

            <div className='home__section'>
                <Card 
                src ="https://www.mymove.com/wp-content/uploads/2007/05/Small-living-room_Photographee.eu_Shutterstock.jpg"
                title="Online Experience"
                description="Unique activities we can do together"
                price="34$"
                />
                <Card 
                src ="https://sites.google.com/site/nhachungcugiarequan8/_/rsrc/1511508068839/hinh-anh-can-ho/097c45ccb3785f260669.jpg"
                title="Online Experience"
                description="Unique activities we can do together"
                price="34$"
                />
                <Card 
                src ="http://www.himlamcholon.com/admin/upload/images/XOLCIMG_4633.jpg"
                title="Online Experience"
                description="Unique activities we can do together"
                price="34$"
                />
            </div>

            
        </div>
    )
}

export default Home
