import React from 'react'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import {isMobile} from "react-device-detect";
import Web3 from 'web3';
import Actions from '../../actions/index';

export class SlickA extends React.Component{
    state = {
        notice:[
            {
                title:"Opening of DEXHI demo version",
                date:'2019-01-03',
                id:0
            },
            {
                title:'Information on Plug(PLG) KRW market listing and listing event',
                date:'2018-12-14',
                id:1
            },
            {
                title:'DexNetwork(DNW) Event winner announcement',
                date:'2018-12-14',
                id:2
            },
            {
                title:'Infomation on Server Maintenace (14.12.18 4am ~ 2pm)',
                date:'2018-12-14',
                id:3
            },
            {
                title:'Infomation on the wallet opening and listing of Plug(PLG)',
                date:'2018-12-13',
                id:4
            },
            {
                title:'Infomation regarding ERC20 token wallet opening schedule',
                date:'2018-12-11',
                id:5
            },
            {
                title:'Pundi X(NPXS) December airdrop completed',
                date:'2018-12-11',
                id:6
            },
            {
                title:'BitNaru is under maintenance. (09.12.2018 21:50 ~ 09.12.2018 23:00)',
                date:'2018-12-10',
                id:7
            },
            {
                title:'Infomation on Taklimaken commission change, and wallet opening',
                date:'2018-12-10',
                id:8
            },
            {
                title:'Infomation on changing price unit for SRCOIN',
                date:'2018-12-07',
                id:9
            },
            {
                title:'Infomation regarding resuming DNW (BTCB) trading and event',
                date:'2018-12-06',
                id:10
            },
        ]
    }
    render() {

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false
        };
        const notice = this.state.notice;
        const lang = localStorage.getItem("lang");
        const url_string = window.location.href;
        const url = new URL(url_string);
        const id_test = url.searchParams.get("id");
        const result = notice.filter(elem => {
            if(elem.id == +id_test){
                return elem.title;
            };
        })

        let titleField;
        if(lang === "en"){
            titleField = "title_en"
        }else{
            titleField = "title_ko"
        }
        return (
            <Slider {...settings}>
                     <div>
                        <p className="roll-content"><span className="category">Notice</span>
                            Opening of DEXHI demo version
                        </p>
                    </div>
            </Slider>
        )
    }
}