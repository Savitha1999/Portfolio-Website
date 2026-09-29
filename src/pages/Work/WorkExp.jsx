import React from "react";
import './workExp.css';
import work3 from '../../assets/images/work3.jpeg';
import work2 from '../../assets/images/work2.avif';
import work1 from '../../assets/images/work1.webp';
import { Bounce } from "react-reveal";

export default function WorkExp()
{
    return(
        <>
        <Bounce>
        <div className=" work "  id="workexprience">
            <div className="container work-exp">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase" > 
            WORK EXPRIENCE
            </h2>
            <hr/>
            <p className="pb-3 text-center" style={{fontWeight:"bold" ,fontStyle:"italic"}}> 
               Total Experience: 2.10+ Years
            </p>
        

<div className="row mt-5 " id="ads" style={{margin: "30px 0px 30px 0px"}}>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#4646ea",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"white",
                            padding:"5px 15px",
                            cursor:"pointer",
                            fontSize:"14px"
                        }}> MERN Stack Developer 
                        </span>

                        <img src={work1} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
  <span className="card-details-badge">Legends Tech Solution, Pudhucherry</span>
                    </div>

                       <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 style={{ color: "#138781" }}>2.3 Years Experience</h5>
                      <p className="text-muted" style={{ fontSize: "14px" }}>
                        ( 2023 - Aug 2025 )
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#4646ea",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"white",
                            padding:"5px 15px",
                            cursor:"pointer",
                            fontSize:"14px"
                        }}> Java FullStack Developer 
                        </span>

                        <img src={work3} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
  <span className="card-details-badge">Thikse Software Solution Pvt.Ltd., Pudhucherry</span>
                    </div>

                       <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 style={{ color: "#138781" }}> 1+ Years Experience </h5>
                      <p className="text-muted" style={{ fontSize: "14px" }}>
                        ( Sept 2025 - Sept 2026 )
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notif-badge"
                        style={{position:"absolute",
                            left:"-10px",top:"-20px",
                            background:"#4646ea",
                            textAlign:"center",
                            borderRadius:"30px",
                            color:"white",
                            padding:"5px 15px",
                            cursor:"pointer",
                            fontSize:"14px"
                        }}> Total Professional Experience
                        </span>

                        <img src={work2} alt="project" />
                    </div>
                    <div className="card-image-overly m-auto mt-2">
  <span className="card-details-badge"> Professional Experience </span>
                    </div>

                       <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 style={{ color: "#138781" }}> 3+ Years </h5>
                      <p className="text-muted" style={{ fontSize: "14px" }}>
                        Full Stack Development
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            </div> 
        </div>

        </Bounce>


        </>
    )
}