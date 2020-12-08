import React from 'react';
import './SearchPage.css';
import { Button} from "@material-ui/core";
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>27 users visit this site on December</p>
                <h1>Search for more!</h1>
                <Button variant="outlined"> CANCELATION FLEXIBILITY</Button>
                <Button variant="outlined"> TYPE OF PLACE</Button>
                <Button variant="outlined"> PRICE</Button>
                <Button variant="outlined"> ROOMS AND BEDS</Button>

        
                
            </div>
            <SearchResult
                img = "http://wedo.com.vn/wp-content/uploads/2016/11/mau-thiet-ke-phong-ngu-giuong-ngu-dep-doc-dao-1.jpg"
                location = "207 Tran Quoc Hoan, Dich Vong Hau, Cau Giay, Hanoi"
                title = "Cuoc song vuong gia voi gia phai chang, phu hop voi sinh vien"
                description = "1 guest - 1 bed - Wifi - Kitchen - Toilet"
                star = {4.73}
                price = "30$ / 0.5 month"
            />
            <SearchResult
                img = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/62407148_2239800482771772_634682585938657280_n.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=jtlNgIB0XJ4AX-MDFOY&_nc_ht=scontent.fhan2-1.fna&oh=fee697b16f87e3d85291c25522ebd541&oe=5FF5CC5D"
                location = "207 Tran Quoc Hoan, Dich Vong Hau, Cau Giay, Hanoi"
                title = "Cuoc song vuong gia voi gia phai chang, phu hop voi sinh vien"
                description = "1 guest - 1 bed - Wifi - Kitchen - Toilet"
                star = {4.73}
                price = "30$ / 0.5 month"
            />
            <SearchResult
                img = "https://sohanews.sohacdn.com/thumb_w/660/2019/11/12/cdb-010-15735331357832010484705.jpg"
                location = "207 Tran Quoc Hoan, Dich Vong Hau, Cau Giay, Hanoi"
                title = "Cuoc song vuong gia voi gia phai chang, phu hop voi sinh vien"
                description = "1 guest - 1 bed - Wifi - Kitchen - Toilet"
                star = {4.73}
                price = "30$ / 0.5 month"
            />
            <SearchResult
                img = "https://cafef.mediacdn.vn/k:thumb_w/640/2015/9a-1436861560764/can-canh-phong-ngu-dep-nhu-mo-duoi-day-bien-danh-cho-gioi-sieu-giau.jpg"
                location = "207 Tran Quoc Hoan, Dich Vong Hau, Cau Giay, Hanoi"
                title = "Cuoc song vuong gia voi gia phai chang, phu hop voi sinh vien"
                description = "1 guest - 1 bed - Wifi - Kitchen - Toilet"
                star = {4.73}
                price = "30$ / 0.5 month"
            />
        </div>
    )
}

export default SearchPage
