import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { faFilter } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <div className='body'>
            <nav className='Topbar'>
                <section id="img"> <img src={require("./edlogo.png")} className="App-logo" alt="logo" /></section>
                <section id="exp">Explore Categories  <FontAwesomeIcon icon={faAngleDown} className="ml" />


                </section>
                <section id='txt'>EdYoda is a learning and knowledge
                    sharing platform for techies</section>
                <section><button>Go To Main Website </button></section>

                {/* <div>
            <img src={props.videoThumbnail} className='thumbnail'/>
            </div>
            <div className="inner-details">
                <p className="title">{props.title}</p>
                <div className="channel-details">
                    <img src={props.channelLogoUrl} className="channel-logo"/>
                    <p>{props.channelName}</p>
                </div>
                <div className="details">
                    <p>{props.views}M Views </p>
                    <p>{props.likes}M Likes</p>
                </div>
            </div> */}
            </nav>
            <div className='filter'>

                    <section className='filter1'>
                        <h2 className='la'>Latest Post</h2>

                        <h2><FontAwesomeIcon icon={faFilter} style={{color: "#3580c1",height:"20px", marginRight:"7px"}} /> Filter by Categories</h2>
                   
                       <section className='btn'> <button className='b1'>All</button>
                        
                        <button className='b2'>Artificial Intelligency</button>
                        <button className='b2'>Cloud Computing</button>
                        <button className='b4'>DevOps</button>
                        <button className='b3'>Programming Languages</button>
                        <button className='b2'>Technology and Tools</button>
                   </section>
                    </section>


             <div className='Card1'>
                <div className='card'>
                    <div >
                        <img orientation="top" className='img' src={"https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"} />
                        <section>
                            <h3>
                                Fresh Graduat or IT professional Looking for a...
                            </h3>

                            <h6><span style={{ color: "rgb(82,150,255)" }}>Arman Ahmed</span> | 05 Jul 2019</h6>
                            <p>
                                If you are a fresh graduate - or new to IT-looking for the next job, you need to read this. The last couple 
                                of years zekeLabs gave me a unique opportunity to assess technology </p>
                        </section>
                    </div>
                </div>


                <div className='card'>
                    <div >
                        <img orientation="top" className='img' src={"https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"} />
                        <section>
                            <h3>
                                Indroducing you all to EdYoda - www.edyoda.com
                            </h3>

                            <h6><span style={{ color: "rgb(82,150,255)" }}>Arman Ahmed</span> | 05 Jul 2019</h6>
                            <p>
    Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.... </p>
                        </section>
                    </div>
                </div>


                <div className='card'>
                    <div >
                        <img orientation="top" className='img' src={"https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg"} />
                        <section>
                            <h3>
                            Industry 4.0 - The Prospects & Journey ahead!
                            </h3>

                            <h6><span style={{ color: "rgb(82,150,255)" }}>Arman Ahmed</span> | 05 Jul 2019</h6>
                            <p>
                            Did you ever dream a world where computers are connected and will communicate with one another to ultimately make decisions without human involvement? </p>
                        </section>
                    </div>
                </div>



                <div className='card'>
                    <div >
                        <img orientation="top" className='img' src={"https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg"} />
                        <section>
                            <h3>
                            Ace your Soft Skills - Tips to crack the job interview
                            </h3>

                            <h6><span style={{ color: "rgb(82,150,255)" }}>Arman Ahmed</span> | 05 Jul 2019</h6>
                            <p>
                            Soft skills are seen to be as important as your technical skill set. When an organisation is hiring, soft skills is given a lot of weightage and thus becomes a very important area for yo... </p>
                        </section>
                    </div>
                </div>


                <div className='card'>
                    <div >
                        <img orientation="top" className='img' src={"https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg"} />
                        <section>
                            <h3>
                            Getting started with Artificial Intelligence
                            </h3>

                            <h6><span style={{ color: "rgb(82,150,255)" }}>Arman Ahmed</span> | 05 Jul 2019</h6>
                            <p>
                            We’re rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been the advent of artificial... </p>
                        </section>
                    </div>
                </div>


                <div className='card'>
                    <div >
                        <img orientation="top" className='img' src={"https://edyoda.s3.amazonaws.com/media/blog-images/WhatsApp_Image_2019-06-19_at_17.55.10.jpeg"} />
                        <section>
                            <h3>
                            Learn these Programming Languages in 2019
                            </h3>

                            <h6><span style={{ color: "rgb(82,150,255)" }}>Arman Ahmed</span> | 05 Jul 2019</h6>
                            <p>
                            Starting a career as a software developer obviously requires one to undertake a programming languages course that can cover everything from the basics to even the minute details.... </p>
                        </section>
                    </div>
                </div>
                
                </div>
            </div>
           

        </div>


    )
}

export default Header;