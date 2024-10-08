"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import CCPost from "@/components/sections/creatorsCorner/ccPost"
import post1 from "@/images/CreatorsCorner/post1/post1.3.webp"
import post2 from "@/images/CreatorsCorner/post2/post2.webp"
import post3 from "@/images/CreatorsCorner/post3/post3.2.webp"
import post4 from "@/images/CreatorsCorner/post4/post4.2.webp"
import post5 from "@/images/CreatorsCorner/post5/post5.webp"
import post6 from "@/images/CreatorsCorner/post6/post6.2.webp"

const CreatorsCorner = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className='creators-corner-container'
            style={{
                position: "relative",
            }}
        >
            <div className='container creators-corner'>
                <div className="row">
                    <h2>
                        Creator&apos;s Corner
                    </h2>
                </div>
                <div>

                    {screenWidth > 1200 ? (
                        <>
                            <div className="row cc-r">
                                <CCPost 
                                    postImage={post1}
                                    imageAlt='Hellboy Comic - Cover'
                                    tags={[{ text: "Hellboy", color: "#660000" }, { text: "Storyboarding", color: "#663366" }, { text: "Behind the Scenes", color: "#6666CC" }]}
                                    cardTitle='Inside the World of Hellboy - Storyboarding'
                                    cardContent='Dive deep into the creative process behind Hellboy as we exlpore the intricate world of storyboarding the next volume.'
                                    width='four'
                                />
                                <CCPost 
                                    postImage={post2}
                                    imageAlt="Spiderman Comic - Cover"
                                    tags={[{ text: "Spider-Man", color: "#990000" }, { text: "Cover-Art", color: "#666666" }, { text: "Timelapse", color: "#666633" }, { text: "Behind the Scenes", color: "#6666CC" }]}
                                    cardTitle="Miles Morales - Cover Art Timelapse"
                                    cardContent="Watch this artistic journey unfold as the cover art for Miles Morales and Gwen Stacy's new comic comes to life in this exclusive timelapse."
                                    width='four'
                                />
                                <CCPost 
                                    postImage={post3}
                                    imageAlt="Post apocalyptic comic - Cover"
                                    tags={[{ text: "Horror", color: "#008080" }, { text: "Poll", color: "#996600" }, { text: "Community", color: "#666699" }]}
                                    cardTitle='Community Poll - Best Horror Comic Series'
                                    cardContent='The chills, thrills, and screams - now its time to pick your favourite. Cast your vote and decide which horror series reigns supreme.'
                                    width='four'
                                />
                            </div>
                            <div className="row cc-r">
                            <CCPost 
                                postImage={post4}
                                imageAlt='BRZRKR Comic - Cover'
                                tags={[{ text: "BRZRKR", color: "#CC6600" }, { text: "Fan-Theories", color: "#999966" }]}
                                cardTitle='BRZRKR - Fan Theory Explained'
                                cardContent='Is there more to the immortal warrior BRZRKR than meets the eye? Could this change everything we know about the character?'
                                width='four'
                            />
                            <CCPost 
                                postImage={post5}
                                imageAlt='Writing on a peice of paper.'
                                tags={[{ text: "Cover-Art", color: "#666666" }, { text: "Poll", color: "#996600" }, { text: "Community", color: "#666699" }]}
                                cardTitle='Vote for the Next Cover Art!'
                                cardContent='Your vote matters! Help us choose the next iconic cover for our exclusive Sci-Fi comic series called The Mutant Chronicles.'
                                width='four'
                            />
                            <CCPost 
                                postImage={post6}
                                imageAlt='King of Spies Comic - Cover'
                                tags={[{ text: "King of Spies", color: "#008080" }, { text: "Sneek Peak", color: "#800080" }]}
                                cardTitle='King of Spies #5 - Sneek Peak'
                                cardContent='The stakes are higher than ever in King of Spies 5#! Get and exclusive sneek peak into the final action packed chapter.'
                                width='four'
                            />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="row cc-r">
                                <CCPost 
                                    postImage={post1}
                                    imageAlt='Hellboy Comic - Cover'
                                    tags={[{ text: "Hellboy", color: "#660000" }, { text: "Storyboarding", color: "#663366" }, { text: "Behind the Scenes", color: "#001580" }]}
                                    cardTitle='Inside the World of Hellboy - Storyboarding'
                                    cardContent='Dive deep into the creative process behind Hellboy as we exlpore the intricate world of storyboarding the next volume.'
                                    width='six'
                                />
                                <CCPost 
                                    postImage={post2}
                                    imageAlt="Spiderman Comic - Cover"
                                    tags={[{ text: "Spider-Man", color: "#990000" }, { text: "Cover-Art", color: "#666666" }, { text: "Timelapse", color: "#666633" }, { text: "Behind the Scenes", color: "#800000" }]}
                                    cardTitle="Miles Morales - Cover Art Timelapse"
                                    cardContent="Watch this artistic journey unfold as the cover art for Miles Morales and Gwen Stacy's new comic comes to life in this exclusive timelapse."
                                    width='six'
                                />
                            </div>
                            <div className="row cc-r">
                                <CCPost 
                                    postImage={post3}
                                    imageAlt="Post apocalyptic comic - Cover"
                                    tags={[{ text: "Horror", color: "#008080" }, { text: "Poll", color: "#996600" }, { text: "Community", color: "#666699" }]}
                                    cardTitle='Community Poll - Best Horror Comic Series'
                                    cardContent='The chills, thrills, and screams - now its time to pick your favourite. Cast your vote and decide which horror series reigns supreme.'
                                    width='six'
                                />
                                <CCPost 
                                    postImage={post4}
                                    imageAlt='BRZRKR Comic - Cover'
                                    tags={[{ text: "BRZRKR", color: "#FF3300" }, { text: "Fan-Theories", color: "#999966" }]}
                                    cardTitle='BRZRKR - Fan Theory Explained'
                                    cardContent='Is there more to the immortal warrior BRZRKR than meets the eye? Could this change everything we know about the character?'
                                    width='six'
                                />
                            </div>
                            <div className="row cc-r">
                                <CCPost 
                                    postImage={post5}
                                    imageAlt='Writing on a peice of paper.'
                                    tags={[{ text: "Cover-Art", color: "#666666" }, { text: "Poll", color: "#996600" }, { text: "Community", color: "#666699" }]}
                                    cardTitle='Vote for the Next Cover Art!'
                                    cardContent='Your vote matters! Help us choose the next iconic cover for our exclusive Sci-Fi comic series called The Mutant Chronicles.'
                                    width='six'
                                />
                                <CCPost 
                                    postImage={post6}
                                    imageAlt='King of Spies Comic - Cover'
                                    tags={[{ text: "King of Spies", color: "#008080" }, { text: "Sneek Peak", color: "#800080" }]}
                                    cardTitle='King of Spies #5 - Sneek Peak'
                                    cardContent='The stakes are higher than ever in King of Spies 5#! Get and exclusive sneek peak into the final action packed chapter.'
                                    width='six'
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreatorsCorner