import Hero from "@/components/hero"
import Banner from "@/components/banner"
import Offer from "@/components/offer"
import bitterRootFront from "@/images/bitter-root/bitter-root-front.webp"
import bitterRootPage from "@/images/bitter-root/bitter-root-page.webp"
import bitterRootBack from "@/images/bitter-root/bitter-root-back.webp"
import tokyoGhostFront from "@/images/tokyo-ghost/tokyo-ghost-front.webp"
import tokyoGhostPage from "@/images/tokyo-ghost/tokyo-ghost-page.webp"
import tokyoGhostBack from "@/images/tokyo-ghost/tokyo-ghost-back.webp"
import CreatorsCorner from "@/components/creatorsCorner"
import Footer from "@/components/footer"

const Page = () => {
    return (
        <>
            <Hero /> 
            <Banner direction="r">
                    <h2>Top Pick</h2>
            </Banner>
            <Offer 
                frontImg={bitterRootFront}
                frontImgAlt="Bitter Root Comic - Cover"
                backImg={bitterRootBack}
                backImgAlt="Bitter Root Comic - Backside"
                pageImg={bitterRootPage}
                pageImgAlt="Bitter Root Comic - First Page"
                title="BITTER ROOT"
                tags={[{ text: "Supernatural", color: "#669966" }, { text: "Historical Fiction", color: "#6699CC" }, { text: "Horror", color: "#993300" }]}
                price={16.99}
                details={["Charissa Curiel - Cover", "Chase Conley - Cover", "Chuck Brown - Writer", "David Walker - Writer", "Hassan Otsmane-Elhaou - Leterer", "John Jennings - Other", "Sanford Greene - Artist, Cover", "Shelly Bond - Editor", "Sofie Dodgson - Colorist"]}
                imgSide="l"
            >
                <p>
                    Once known as the greatest monster hunters of all time, the Sangerye family specialized in curing the souls of those infected by hate. But those days are fading. A terrible tragedy has claimed most of the family, leaving the surviving cousins divided between by the desire to cure monsters or to kill them. Now, though, there&apos;s a new breed of monster loose on the streets of Harlem, and the Sangerye family must either come together or watch the human race fall to untold evil.
                </p>
                <p>
                    Collects BITTER ROOT #1-5.
                </p>
            </Offer>
            <Banner direction="l">
                <h2 style={{textAlign: "right"}}>Weekly Recommended</h2>
            </Banner>
            <Offer 
                frontImg={tokyoGhostFront}
                frontImgAlt="Tokyo Ghost Comic - Cover"
                backImg={tokyoGhostBack}
                backImgAlt="Tokyo Ghost Comic - Backside"
                pageImg={tokyoGhostPage}
                pageImgAlt="Tokyo Ghost Comic - First Page"
                title="TOKYO GHOST"
                tags={[{ text: "Sci-Fi", color: "#008080" }, { text: "Dystopian", color: "#800080" }, { text: "Cyberpunk", color: "#800000" }]}
                price={29.99}
                details={["Dave McCaig - Colorist", "Dustin Nguyen - Artist, Cover", "Sean Murphy - Writer", "Steve Wands - Letterer"]}
                imgSide="r"
            >
                <p>
                    The Isles of Los Angeles 2089: Humanity is addicted to technology. Getting a virtual buzz is the only thing left to live for, and gangsters run it all. And who do these gangsters turn to when they need their rule enforced? Constables Led Dent and Debbie Decay are about to be given a job that will force them out of the familiar squalor of LA and into the last tech-less country on Earth: The Garden Nation of Tokyo.
                </p>
                <p>
                    Collects TOKYO GHOST #1-10.
                </p>
            </Offer>
            <CreatorsCorner/>
            <Footer/>
        </>
    )
}

export default Page