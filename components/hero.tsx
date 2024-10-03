import Image from "next/image"
import Hero_img from "../images/Hero_img.webp"
import Hero_BG from "../images/Hero_BG.webp"
import Button from "./button"

const Hero = () => {
    return (
        <div className="hero">
            {/* BG-Image */}
            <div id="hero-bg" style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: "100%",
            }}>
                <Image 
                    src={Hero_BG}
                    alt="Background Image - Comics scattered around"
                    priority
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100%"
                />
            </div>

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
                            Apollo Club is your gateway to a universe of captivating stories, dynamic characters, and stunning visuals. Whether you&apos;re a lifelong comic enthusiast or new to the world of graphic storytelling, we invite you to dive into our ever-expanding library of original comics. From heroic adventures to dark fantasies, Apollo Club offers something for every imagination. Discover exclusive content, connect with a passionate community, and follow the journeys of both emerging and legendary creators. At Apollo Club, we&apos;re not just telling stories – we&apos;re building worlds. Join us, and become part of the story.
                        </p>
                        <div style={{
                            display: "flex",
                            gap: "10px"
                        }}>
                            <Button
                                isPrimary={true}
                                ariaLabel="Shop"
                                style={{
                                    width: "50%"
                                }}
                                href="/"
                            >
                                Shop
                            </Button>
                            <Button
                                ariaLabel="Read more"
                                style={{
                                    width: "50%"
                                }}
                                href="/"
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
                            priority
                            alt="Comics in a Pile"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero