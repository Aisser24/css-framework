import Image from "next/image"
import Hero_img from "../images/Hero_img.png"
// import Hero_BG from "../images/Hero_BG.png"
import Button from "./button"

const Hero = () => {
    return (
        <section className="hero">
            {/* BG-Image */}
            {/* <div id="hero-bg" style={{ position: "absolute", top: 0, width: "100%", height: "100%", overflow: "hidden" }}>
                <Image 
                    src={Hero_BG}
                    alt="Background Image - Comics scattered around"
                    priority
                    fill
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div> */}

            {/* Content */}
            <div className="container">
                <div className="row"
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {/* Text */}
                    <div className="six columns">
                        <h1
                            style={{
                                color: "var(--primary)",
                                marginBottom: -8
                            }}
                        >
                            Apollo Club
                        </h1>
                        <h2 className="subtitle">
                            Where Legends Are Told
                        </h2>
                        <p style={{
                            marginBottom: "20px"
                        }}>
                            {`Apollo Club is your gateway to a universe of captivating stories, dynamic characters, and stunning visuals. Whether you're a lifelong comic enthusiast or new to the world of graphic storytelling, we invite you to dive into our ever-expanding library of original comics. From heroic adventures to dark fantasies, Apollo Club offers something for every imagination. Discover exclusive content, connect with a passionate community, and follow the journeys of both emerging and legendary creators. At Apollo Club, we're not just telling stories – we're building worlds. Join us, and become part of the story.`}
                        </p>
                        <div style={{
                            display: "flex",
                            gap: "10px"
                        }}>
                            <Button
                                isPrimary={true}
                                style={{
                                    width: "50%"
                                }}
                            >
                                Shop
                            </Button>
                            <Button
                                style={{
                                    width: "50%"
                                }}
                            >
                                Read more
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="six columns hero-img">
                        <Image 
                            src={Hero_img}
                            width={590}
                            height={506}
                            alt="Comics in a Pile"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero