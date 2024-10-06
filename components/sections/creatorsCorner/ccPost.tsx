import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

const CCPost = (
    { 
        postImage, 
        imageAlt, 
        tags,
        cardTitle,
        cardContent,
        width,
        linkDestination = '#'
    }: {
        postImage: StaticImageData,
        imageAlt: string,
        tags: { text: string, color: string }[],
        cardTitle: string,
        cardContent: string,
        width: string,
        linkDestination?: string
    }
) => {
    
    
  return (
    <a href={linkDestination} className={`${width} columns card`}
        style={{
            aspectRatio: "1 / 1",
            borderRadius: "15px",
            overflow: "hidden",
        }}
    >
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "60%",
            }}
        >
            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
            }}>
                <Image 
                    src={postImage}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes='100%'
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
                className='tags-container'
            >
                {
                    tags.map((tag, index) => (
                        <span
                            key={index}
                            className='tag cc-tag'
                            style={{
                                backgroundColor: tag.color,
                            }}
                        >
                            {tag.text}
                        </span>
                    ))
                }
            </div>
        </div>
        <div style={{
            padding: "20px",
        }}>
            <h3 className="card-heading">
                {cardTitle}
            </h3>
            <p className='card-text'>
                {cardContent.length > 80 ? `${cardContent.substring(0, 80)}...` : cardContent}
            </p>
        </div>
    </a>
  )
}

export default CCPost