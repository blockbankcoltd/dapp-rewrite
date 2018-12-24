import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {isMobile} from "react-device-detect";
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import Actions from '../actions/index';


export default class extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {NOTICE} = this.props;
        const {FOOTER, BALANCES, DASHBOARD} = this.props.languageConfig;
        const tab = [
            {
                title: FOOTER.NOTICE,
                href: "/noticeContainer"
            },
            {
                title: FOOTER.GUIDE,
                href: "/informationUse"
            },
            {
                title: FOOTER.FEE,
                href: "/feeInformation"
            },
            {
                title: FOOTER.TERMS,
                href: "/termsOfUse"
            },
            {
                title: FOOTER.PRIVACY_TEXT,
                href: "/privacyPolicy"
            },
            {
                title: FOOTER.LISTING,
                href: "/ListingRequest"
            }
        ]
        const {INFO_USE} = this.props.languageConfig;
        return (
            <div>
                <div>
                    <Info>
                        <section className="infoMain" role="main">
                            <div className="info_common">
                            <div className="category_list">
                                <ul className="navigation">
                                    { tab.map((item,index) => {
                                            return (
                                                <li
                                                    className={item.title===FOOTER.GUIDE ? "active" : ""} key={index}
                                                >
                                                    <Link prefetch to={item.href}>
                                                        {item.title}
                                                    </Link>
                                                </li>

                                            )
                                        }
                                    )
                                    }
                                </ul>
                            </div>
                            </div>
                            <div id="infoUse">
                                <h2>{INFO_USE.INFOUSE_TIT}</h2>
                                <div className="maket">
                                    <h3>{INFO_USE.MARKET_TIT}</h3>
                                    <dl>
                                        <dt>{INFO_USE.MARKET_CON01}</dt>
                                        <dd>{INFO_USE.MARKET_CON02}
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>{INFO_USE.MARKET_CON03}</dt>
                                        <dd dangerouslySetInnerHTML={{__html: INFO_USE.MARKET_CON04}}>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>{INFO_USE.MARKET_CON05}</dt>
                                        <dd dangerouslySetInnerHTML={{__html: INFO_USE.MARKET_CON06}}>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>{INFO_USE.MARKET_CON07}</dt>
                                        <dd dangerouslySetInnerHTML={{__html: INFO_USE.MARKET_CON08}}>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="order_min">
                                    <h3>{INFO_USE.ORDER_MIN}</h3>
                                    <div className="table_min">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>{INFO_USE.MARKET_MIN01}</th>
                                                <th>{INFO_USE.MARKET_MIN02}</th>
                                                <th>{INFO_USE.MARKET_MIN03}</th>
                                                <th>{INFO_USE.MARKET_MIN04}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1,000 KRW</td>
                                                <td>0.0001 BTC</td>
                                                <td>100 LNC</td>
                                                <td>1 TUSD</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="withdraw_limit">
                                    <h3>{INFO_USE.LIMIT}</h3>
                                    <div>
                                        <p>{INFO_USE.LIMIT01}</p>
                                        <Link to='/'><a className="link_more btn btn_long">{INFO_USE.LIMIT02}</a></Link>
                                    </div>
                                    <div className="table_cont">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th colSpan="3" className="first_th">{INFO_USE.SORT}</th>
                                                <th>{INFO_USE.SORT01}</th>
                                                <th>{INFO_USE.SORT02}</th>
                                                <th dangerouslySetInnerHTML={{__html: INFO_USE.SORT03}}></th>
                                                <th dangerouslySetInnerHTML={{__html: INFO_USE.SORT04}}></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan="3" className="th_tit first-child">{INFO_USE.METHOD}
                                                </td>
                                                <td className="td_lev">{INFO_USE.METHOD01}</td>
                                                <td className="td_lev">{INFO_USE.METHOD02}</td>
                                                <td className="td_lev"
                                                    dangerouslySetInnerHTML={{__html: INFO_USE.METHOD03}}/>
                                                <td className="td_lev">{INFO_USE.METHOD04}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="first-child" rowSpan="2">{INFO_USE.DEPOSIT_LIMIT}</td>
                                                <td colSpan="2">KRW</td>
                                                <td>{INFO_USE.WON}</td>
                                                <td>{INFO_USE.WON}</td>
                                                <td>{INFO_USE.DEPOSIT_ONEDAY}</td>
                                                <td dangerouslySetInnerHTML={{__html: INFO_USE.DEPOSIT_ONEDAY_KOR}}/>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">{INFO_USE.CRYPTO}</td>
                                                <td>{INFO_USE.DEPOSIT_UN}</td>
                                                <td>{INFO_USE.DEPOSIT_UN}</td>
                                                <td>{INFO_USE.DEPOSIT_UN}</td>
                                                <td>{INFO_USE.DEPOSIT_UN}</td>
                                            </tr>
                                            <tr>
                                                <td className="first-child" rowSpan="3">{INFO_USE.WITHDRAWAL_LIMIT}</td>
                                                <td rowSpan="2">KRW</td>
                                                <td>{INFO_USE.DAY}</td>
                                                <td>{INFO_USE.WON}</td>
                                                <td>{INFO_USE.WON}</td>
                                                <td>{INFO_USE.WITHDRAW_ONEDAY}</td>
                                                <td dangerouslySetInnerHTML={{__html: INFO_USE.WITHDRAW_ONEDAY_KOR}}>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{INFO_USE.MONTH}</td>
                                                <td>{INFO_USE.WON}</td>
                                                <td>{INFO_USE.WON}</td>
                                                <td>{INFO_USE.ONEFIFTYMILLION}</td>
                                                <td dangerouslySetInnerHTML={{__html: INFO_USE.ONEFIFTYMILLION_KOR}}>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">{INFO_USE.CRYPTO}</td>
                                                <td>{INFO_USE.WON}</td>
                                                <td>{INFO_USE.DEPOSIT_UN}</td>
                                                <td>{INFO_USE.DEPOSIT_UN}</td>
                                                <td>{INFO_USE.DEPOSIT_UN}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <ul>
                                        <li>{INFO_USE.USE01}
                                        </li>
                                        <li>{INFO_USE.USE02}
                                        </li>
                                        <li>{INFO_USE.USE03}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </Info>
                </div>

            </div>
        )
    }
}


interface Props {
    title: string,
        children: any

}
const Info = styled.div`
    width:100%;
    margin : 0 auto;
    background: #fff;
    .infoMain {
        width: 1200px;
        margin: 0 auto;
        .category_list {
            margin-top:110px;
            margin-bottom:40px;
            ul {
                list-style:none;
                height: 45px;
                background: #fff;
                overflow: hidden;
                text-align: center;
                display:flex;
                flex-direction: row;
                place-content: center space-between;
                align-items: center;
                justify-content: space-between;
                padding-inline-start: unset;
                li {
                    width: 25%;
                    font-size: 18px;
                    line-height: 42px;
                    font-weight: 500;
                    text-align: center;
                    list-style: none;
                    a {
                        color: #999;
                        line-height: 45px;
                        font-weight: bold;
                        text-decoration: none;
                    }
                    &.active {
                    border-bottom: 7px solid #364958;
                        a {
                            color: #364958;
                        }
                    }
                }
            }
        }
        #infoUse {
            width: 1000px;
            margin: 40px auto 0px;
            overflow: hidden;
            .maket {
                margin: 0 0 100px;
            }
            h2 {
                font-size: 30px;
                font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                font-weight: 900;
                text-align: center;
                margin: 0 0 50px;
            }
            div {
                width: 100%;
                overflow: hidden;
                a {
                    float: right;
                    background: #003366;
                    color: #fff;
                    display: block;
                    padding: 10px 25px;
                }
                h3 {
                    font-size: 20px;
                    font-weight: bold;
                    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                    margin: 0 0 20px;
                }
                h5 {
                    font-size: 18px;
                    font-weight: bold;
                    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                    margin: 0 0 15px;
                }
                .table_cont{
                    width: 100%;
                    overflow-x: auto;
                    table {
                        border-spacing:unset;
                        width: 100%;
                        margin: 20px 0 30px;
                        th {
                            padding: 10px 0;
                            border-left: 1px solid #bbb;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                            font-size: 18px;
                            background: #efefef;
                            border-bottom: 2px solid #003366;
                            text-align : center;
                            :first-child {
                                border-left: none;
                            }
                        }
                        td {
                            padding: 10px 0;
                            border-left: 1px solid #bbb;
                            font-size: 15px;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                            text-align: center;
                            border-bottom: 1px solid #bbb;
                            &.first-child {
                                border-left: none;
                            }
                        }
                    }
                }
                .table_min{
                    width: 100%;
                    overflow-x: auto;
                    table {
                        width: 100%;
                        margin: 20px 0 100px;
                        border-spacing:unset;
                        th {
                            padding: 10px 0;
                            border-left: 1px solid #ddd;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                            font-size: 18px;
                            background: #efefef;
                            border-top: 3px solid #999;
                            border-bottom: 2px solid #ddd;
                            text-align : center;
                            :first-child {
                                border-left: none;
                            }
                        }
                        td {
                            padding: 10px 0;
                            border-left: 1px solid #ddd;
                            font-size: 15px;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                            text-align: center;
                            border-bottom: 1px solid #bbb;
                            :first-child {
                                border-left: none;
                            }
                        }
                    }
                }
                dl {
                    width: 100%;
                    overflow: hidden;
                    margin: 0 0 10px;
                    dt {
                        max-width: 150px;
                        float: left;
                        font-size: 17px;
                        font-weight: bold;
                        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                    }
                    dd {
                        width: 840px;
                        float: left;
                        margin-left: 10px;
                        font-size: 17px;
                        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                        word-break: keep-all;
                    }
                }
            }
            p {
                float: left;
                font-size: 17px;
                display: block;
                font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
            }
            ul {
            list-style:none;
            padding-inline-start: unset;
            margin-bottom:70px;
                li {
                    font-size: 17px;
                    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                    line-height: 1.7em;
                }
            }
        }
    }
    @media(max-width: 1024px) {
        width: 100%;
        overflow: hidden;
        .infoMain {
                width: 100%;
                margin: 20px auto 40px;
                padding: 0 10px;
                box-sizing: border-box;
            #infoUse {
                width: 100%;
                margin: 1rem auto 2rem;
                overflow: hidden;
                .maket {
                    margin: 0 0 2rem;
                }
                h2 {
                    font-size: 1.6rem;
                    margin: 0 0 1rem;
                }
                div {
                    width: 100%;
                    overflow: hidden;
                    a {
                        padding: 0.2rem 0.8rem;
                    }
                    h3 {
                        font-size: 1.4rem;
                        
                    }
                    h5 {
                        font-size: 1.2rem;
                        
                    }
                    table {
                        width: 100%;
                        margin: 20px 0 30px;
                        .first_th {
                            width:10rem;                       
                        }
                        th {
                            padding: 0.5rem 0;
                            font-size: 1rem;
                        }
                        td {
                            padding:0;
                            border-left: 1px solid #bbb;
                            font-size: 0.9rem;
                        }
                    }
                    dl {
                        width: 100%;
                        overflow: hidden;
                        margin: 0 0 10px;
                        dt {
                            width: 100%;
                            font-size: 1.2rem;
                        }
                        dd {
                            width: 100%;
                            font-size: 1rem;
                            margin-left: 10px;
                        }
                    }
                }
                p {
                    font-size: 1.2rem;
                }
                ul {
                    li {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`
