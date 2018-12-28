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

export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {FEEINFORMATION,FOOTER} = this.props.languageConfig;
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
        return (
            <div>
                <div>
                    <Fee>
                        <section className="feeMain" role="main">
                            <div className="category_list">
                                <ul className="navigation">
                                    { tab.map((item,index) => {
                                            return (
                                                <li
                                                    className={item.title===FOOTER.FEE ? "active" : ""} key={index}
                                                >
                                                    <Link to={item.href}>
                                                        {item.title}
                                                    </Link>
                                                </li>

                                            )
                                        }
                                    )
                                    }
                                </ul>
                            </div>
                            <div id="fee">
                                <h2> {FEEINFORMATION.FEE_TIT}</h2>
                                <div className="trade_fee">
                                    <h3> {FEEINFORMATION.FEE_TIT01}</h3>
                                    <p dangerouslySetInnerHTML={{__html : FEEINFORMATION.FEE_CON01}}></p>

                                    <table>
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Maker</th>
                                            <th>Taker</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{FEEINFORMATION.ALL_LEVEL}</td>
                                            <td>0%</td>
                                            <td>0%</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <p> {FEEINFORMATION.FEE_CON02}</p>
                                    <dl>
                                        <dt> {FEEINFORMATION.WHAT01}</dt>
                                        <dd> {FEEINFORMATION.MAKER_CON}
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt> {FEEINFORMATION.WHAT02}</dt>
                                        <dd> {FEEINFORMATION.TAKER_CON}
                                        </dd>
                                    </dl>
                                </div>
                                <div className="withdraw_fee">
                                    <h3> {FEEINFORMATION.FEE_TIT02}</h3>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th> {FEEINFORMATION.FEE_TXT01}</th>
                                            <th className="fee_right"> {FEEINFORMATION.FEE_TXT02}</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                    <p> {FEEINFORMATION.FEE_TXT03}</p>
                                </div>
                            </div>
                        </section>
                    </Fee>

                </div>

            </div>
        )
    }
}

const Fee = styled.div`
    width:100%;
    margin : 0 auto;
    background : #fff;
    .feeMain {
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
        #fee {
            width: 1000px;
            margin: 40px auto 0px;
            overflow: hidden;
            h2 {
                font-size: 30px;
                font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                font-weight: 900;
                text-align: center;
                margin: 0 0 50px;
            }
            h3 {
                font-size: 20px;
                font-weight: bold;
                font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                margin: 0 0 20px;
            }
            .trade_fee {
                width: 100%;
                overflow: hidden;
                margin: 0 0 60px;
                p {
                    font-size: 17px;
                	font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                }
                table {
                    width: 100%;
                    margin: 20px 0;
                    border-spacing:unset;
                    th {
                        background: #efefef;
                        border-bottom: 2px solid #003366;
                        padding: 10px 0;
                        border-left: 1px solid #bbb;
                        font-size: 17px;
                        text-align:center;
                        :first-child {
                            border-left: none;
                        }
                    }
                    td {
                        width: 33.33%;
                        border-left: 1px solid #bbb;
                        padding: 10px 0;
                        text-align: center;
                        font-size: 17px;
                        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                        border-bottom: 1px solid #bbb;
                        :first-child {
                            border-left: none;
                        }
                    }
                    
                }
                dl {
                    width: 100%;
                    overflow: hidden;
                    margin: 60px 0 0;
                    dt {
                        font-size: 19px;
                        font-weight: 900;
                        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                        color: #003366;
                        margin: 0 0 15px;
                    }
                    dd {
                        font-size: 17px;
                        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                        line-height: 1.6em;
                    }
                }
            }
            .withdraw_fee {
                width: 100%;
                overflow: hidden;
                table {
                    width: 100%;
                    border-spacing:unset;
                    tr {
                        th {
                            font-size: 19px;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                            background: #efefef;
                            border-bottom: 2px solid #003366;
                            padding: 10px 0;
                            text-align:center
                        }
                        td {
                            width: 50%;
                            border-bottom: 1px solid #bbb;
                            padding: 10px 0;
                            text-align: center;
                            font-size: 17px;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                            font-weight: bold;
                            
                        }
                        .fee_right {
                            border-left: 1px solid #003366;
                        }
                        &:nth-child(even) td {
                            background: #f9f9f9;
                        }
                    }
                }
                p {
                    font-size: 17px;
                    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                    margin: 20px 0 0;
                    margin-bottom:70px;
                }
            }
        }
    }
    @media(max-width:1024px) {
    .feeMain {
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        #fee {
            width: 100%;
            margin: 2rem auto 3rem;
            padding: 0 0.8rem;
            box-sizing: border-box;
            overflow: hidden;
            h2 {
                font-size: 1.5rem;
                margin: 0 0 1.5rem;
            }
            h3 {
                font-size: 1.3rem;
                margin: 0 0 20px;
            }
            .trade_fee {
                width: 100%;
                overflow: hidden;
                margin: 0 0 2rem;
                p {
                    font-size: 1rem;
                }
                table {
                    width: 100%;
                    margin: 1rem 0;
                    padding: 0 0.5rem;
                    th {
                        padding: 0.5rem 0;
                        font-size: 1.2rem;
                    }
                    td {
                        width: 33.33%;
                        padding: 0.5rem 0;
                        font-size: 1.2rem;
                        
                    }
                }
                dl {
                    width: 100%;
                    overflow: hidden;
                    margin: 2rem 0 0;
                    dt {
                        font-size: 1.4rem;
                        margin: 0 0 15px;
                    }
                    dd {
                        font-size: 1.2rem;
                        line-height: 1.6rem;
                    }
                }
            }
            .withdraw_fee {
                width: 100%;
                overflow: hidden;
                table {
                    width: 100%;
                    tr {
                        th {
                            font-size: 1.2rem;
                            padding: 10px 0;
                            text-align:center
                        }
                        td {
                            padding: 0.5rem 0;
                            font-size: 1rem;
                        }
                    }
                }
                p {
                    font-size: 1.2rem;
                    margin: 20px 0 0;
                }
            }
        }
    }
    }





`
