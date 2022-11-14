import React, {useState} from "react";
import Course1 from "../ui/course-1.png";
import Button from 'react-bootstrap/Button';

import {
    NavLink,    
} from "react-router-dom";

function CoursePage(props){

    const [course, setCourse] = useState(
        {
            ID: 1,
            title: "Curso de Web 3.0",
            about: "Este curso conta com o caminho completo para o pleno conhecimento em desenvolvimento Web 3.0, indo da base teorica da blockchain até a pratica com os smart contracts do ethereum.",
            tutor: {
                ID: 1,
                name: "Harry",
                username: "harry",
                dp: "https://cdn.discordapp.com/attachments/973364348892373022/1040721944200351754/Screenshot_from_2022-11-11_17-16-07.png",
            },
            duration: "1200 min",             
            poster: Course1,

            videos: [
                {
                    ID: 1,
                    title: "Introdução",
                    duration: "04 seg"                    
                }
            ]
        }
    );

    const courseID = props.match.params.courseid;

    var courseVideos = [];


    for(let i = 0; i < course.videos.length; i++){
        courseVideos.push(
            <a href="#" key={"course-video-" + i} className="noul aic rel flex">
                <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
                    <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
                </div>
            </a>         
        );
    }
    
    return (
        <div className="course-page rel flex">


            <div className="course-info rel">

                <div className="tutor rel aic flex">
                    <NavLink to={"profiletutor"} className={"aic link noul"}>
                        <div className="pic">
                            <img src={course.tutor.dp} alt="" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
                            <h2 className="s13 uname fontn c777">Tutor</h2>
                        </div>
                    </NavLink>
                    </div>

                <div className="course-meta">
                    <h2 className="s24 title fontb c333">{course.title}</h2>
                    <p className="s18 about fontn c777" dangerouslySetInnerHTML={{ __html: course.about}} />

                    <div className="section section-b rel">
                        <h2 className="title s24 fontb">Recompensas <span  className="fontn">do Curso</span></h2>
                        <div className="course-stats aic flex">
                            <div className="stats-box flex">
                            <img src="https://cdn.discordapp.com/attachments/973364348892373022/1040811244820627567/chapeuescuro.png" height="18px" width="17px" alt="" className="bl"/>
                                <br/>
                                <h2 className="val s15 c333 fontb">1000</h2>
                                <h2 className="lbl s13 c777">TEC</h2>
                            </div>
                            <div className="stats-box flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                            </svg>
                                <br/>
                                <h2 className="val s15 c333 fontb">300</h2>
                                <h2 className="lbl s13 c777">USD</h2>
                            </div>
                        </div>
                    </div>

                    <div className="section section-b rel">                    
                        <h2 className="title s24 fontb">Detalhes <span  className="fontn">do Curso</span></h2>
                        <div className="course-videos aic flex">
                            {courseVideos}
                        </div>
                        <Button variant="danger" disabled>Resgatar Recompensas</Button>{' '}
                    </div>

                </div>

            </div>

            <div className="course-preview rel">

                <div className="player rel">
                <video width="750" height="500" controls >
                    <source src="https://cdn.discordapp.com/attachments/973364348892373022/1041123199112450218/Video.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
        </div>
    )
}

export default CoursePage;