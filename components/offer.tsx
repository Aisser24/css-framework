"use client"

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import Button from './button'

const Offer = ({ 
    frontImg, 
    frontImgAlt,
    backImg, 
    backImgAlt,
    pageImg,
    pageImgAlt,
    title,
    tags,
    price,
    details,
    imgSide,
    children
}: 
    { 
        frontImg:StaticImport, 
        frontImgAlt:string,
        backImg:StaticImport, 
        backImgAlt:string,
        pageImg:StaticImport,
        pageImgAlt:string,
        title:string,
        tags: { text: string, color: string }[],
        price:number,
        details:string[],
        imgSide:'l'|'r',
        children:React.ReactNode
    }) => {
    const [active, setActive] = React.useState(0);

    function handleActivation(item:number) {
        setActive(item)
    }
    function handleLeave() {
        setActive(0);
    }

    return (
        <>
        {
            imgSide === "l" ? (
                <div className='container offer'>
                    <div className="row" style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}>
                        {/* Images */}
                        <div className='six columns'>
                            {/* Images */}
                            <div className='img-container'>
                                <Image 
                                    src={frontImg}
                                    width={386}
                                    height={594}
                                    alt={frontImgAlt}
                                    onMouseOver={() => handleActivation(2)}
                                    onMouseLeave={handleLeave}
                                    className={`front ${active == 2 ? "active" : ""}`}
                                    style={{
                                        width: "60%",
                                        height: "auto",
                                        zIndex: "10"
                                    }}
                                    title={`${title} - Front`}
                                />
                                <Image 
                                    src={backImg}
                                    width={386}
                                    height={594}
                                    alt={backImgAlt}
                                    onMouseOver={() => handleActivation(3)}
                                    onMouseLeave={handleLeave}
                                    className={`dark ${active == 3 ? "active" : ""}`}
                                    style={{
                                        width: "50%",
                                        height: "auto",
                                        position: "absolute",
                                        right: 0
                                    }}
                                    title={`${title} - Back`}
                                />
                                <Image 
                                    src={pageImg}
                                    width={386}
                                    height={594}
                                    alt={pageImgAlt}
                                    onMouseOver={() => handleActivation(1)}
                                    onMouseLeave={handleLeave}
                                    className={`dark ${active == 1 ? "active" : ""}`}
                                    style={{
                                        width: "50%",
                                        height: "auto",
                                        position: "absolute",
                                        left: 0
                                    }}
                                    title={`${title} - Page`}
                                />
                            </div>

                            {/* Buttons */}
                            <div className='indicator-container'>
                                <button
                                    aria-label="selector-page-image"
                                    className={`indicator ${active == 1 ? "active" : ""}`}
                                    onClick={() => handleActivation(1)} 
                                ></button>
                                <button
                                    aria-label="selector-front-image"
                                    className={`indicator ${active == 2 ? "active" : ""}`}
                                    onClick={() => handleActivation(2)}
                                ></button>
                                <button
                                    aria-label="selector-back-image"
                                    className={`indicator ${active == 3 ? "active" : ""}`}
                                    onClick={() => handleActivation(3)}
                                ></button>
                            </div>
                        </div>

                        {/* Text */}
                        <div className='five columns offset-by-one'>
                            <h3 style={{marginBottom: "15px"}}>{title}</h3>
                            {/* Tags */}
                            <div className='tags-container'>
                                {
                                    tags.map((tag) => (
                                        <div className='tag' style={{backgroundColor: tag.color}} key={tag.text}>
                                            {tag.text}
                                        </div>
                                    ))
                                }
                            </div>
                            <div style={{marginBottom: "20px"}}>
                                {children}
                            </div>
                            {/* Price */}
                            <div style={{
                                display: "flex", alignItems: "center"
                            }}>
                                <span style={{width: "40%", display: "inline-block", height: "auto"}} className='price'>
                                    {`$${price}`}
                                </span>
                                <Button isPrimary style={{width: "60%", margin: 0}} ariaLabel='Buy' href='/'>
                                        Buy
                                </Button>
                            </div>
                            {/* Details */}
                            <div className='details-container'>
                                {
                                    details.map((detail) => (
                                        <div key={detail}>{detail}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container offer'>
                    <div className="row" style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap-reverse"
                    }}>
                        {/* Text */}
                        <div className='five columns'>
                            <h3 style={{marginBottom: "15px"}}>{title}</h3>
                            {/* Tags */}
                            <div className='tags-container'>
                                {
                                    tags.map((tag) => (
                                        <div className='tag' style={{backgroundColor: tag.color}} key={tag.text}>
                                            {tag.text}
                                        </div>
                                    ))
                                }
                            </div>
                            <div style={{marginBottom: "20px"}}>
                                {children}
                            </div>
                            {/* Price */}
                            <div style={{
                                display: "flex", alignItems: "center"
                            }}>
                                <span style={{width: "40%", display: "inline-block", height: "auto"}} className='price'>
                                    {`$${price}`}
                                </span>
                                <Button isPrimary style={{width: "60%", margin: 0}} ariaLabel='Buy' href='/'>
                                        Buy
                                </Button>
                            </div>
                            {/* Details */}
                            <div className='details-container'>
                                {
                                    details.map((detail) => (
                                        <div key={detail}>{detail}</div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Images */}
                        <div className='six columns offset-by-one'>
                            {/* Images */}
                            <div className='img-container'>
                                <Image 
                                    src={frontImg}
                                    width={386}
                                    height={594}
                                    alt={frontImgAlt}
                                    onMouseOver={() => handleActivation(2)}
                                    onMouseLeave={handleLeave}
                                    className={`front ${active == 2 ? "active" : ""}`}
                                    style={{
                                        width: "60%",
                                        height: "auto",
                                        zIndex: "10"
                                    }}
                                    title={`${title} - Front`}
                                />
                                <Image 
                                    src={backImg}
                                    width={386}
                                    height={594}
                                    alt={backImgAlt}
                                    onMouseOver={() => handleActivation(3)}
                                    onMouseLeave={handleLeave}
                                    className={`dark ${active == 3 ? "active" : ""}`}
                                    style={{
                                        width: "50%",
                                        height: "auto",
                                        position: "absolute",
                                        right: 0
                                    }}
                                    title={`${title} - Back`}
                                />
                                <Image 
                                    src={pageImg}
                                    width={386}
                                    height={594}
                                    alt={pageImgAlt}
                                    onMouseOver={() => handleActivation(1)}
                                    onMouseLeave={handleLeave}
                                    className={`dark ${active == 1 ? "active" : ""}`}
                                    style={{
                                        width: "50%",
                                        height: "auto",
                                        position: "absolute",
                                        left: 0
                                    }}
                                    title={`${title} - Page`}
                                />
                            </div>

                            {/* Buttons */}
                            <div className='indicator-container'>
                                <button
                                    aria-label="selector-page-image"
                                    className={`indicator ${active == 1 ? "active" : ""}`}
                                    onClick={() => handleActivation(1)} 
                                ></button>
                                <button
                                    aria-label="selector-front-image"
                                    className={`indicator ${active == 2 ? "active" : ""}`}
                                    onClick={() => handleActivation(2)}
                                ></button>
                                <button
                                    aria-label="selector-back-image"
                                    className={`indicator ${active == 3 ? "active" : ""}`}
                                    onClick={() => handleActivation(3)}
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Offer