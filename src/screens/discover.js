import React, {useEffect, useState} from "react";
import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";

import {
    NavLink,    
} from "react-router-dom";

function DiscoverPage(){

    useEffect(()=>{
        document.title = "Educa-tec";
    })

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Curso de Web 3.0",
            tutor: {
                ID: 1,
                name: "Harry",
                username: "harry",
                dp: "https://cdn.discordapp.com/attachments/973364348892373022/1040721944200351754/Screenshot_from_2022-11-11_17-16-07.png",
            },
            duration: "04 seg",               
            poster: Course1
        },
        {
            ID: 2,
            title: "Curso de Investimento",
            tutor: {
                ID: 1,
                name: "Harry",
                username: "harry",
                dp: "https://cdn.discordapp.com/attachments/973364348892373022/1040721944200351754/Screenshot_from_2022-11-11_17-16-07.png",
            },
            duration: "02 seg",               
            poster: Course2
        }
    ]);

    const [topTutors, setTopTutors] = useState([
        {
            ID: 1,
            name: "Harry",
            username: "harry",
            dp: "https://cdn.discordapp.com/attachments/973364348892373022/1040721944200351754/Screenshot_from_2022-11-11_17-16-07.png",
        }
    ]);

    //Live Tutors List
    var tutorList = [];
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + 1}>
                <img src="https://cdn.discordapp.com/attachments/973364348892373022/1040721944200351754/Screenshot_from_2022-11-11_17-16-07.png"  alt="" className="bl" />
            </button>
        );

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course" + popularCourse[i].ID} alt="" className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} alt="" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                <div className="user aic flex">
                    <NavLink to={"profiletutor"} className={"aic link noul"}>
                        <div className="pic">
                            <img src={topTutors[i].dp} alt="" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                            <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                        </div>
                    </NavLink>
                </div>                
            </a>
        );
    }

    return (
        <div className="home-page rel">

            {/**Popular Courses */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Olhe <span  className="fontn">Esses Cursos</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>
        </div>
    )
}

export default DiscoverPage;