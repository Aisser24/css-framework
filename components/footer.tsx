import Logo from '@/images/logo.svg'
import Image from 'next/image'
import Button from '@/components/button'
import facebook from '@/images/footer/facebook.svg'
import instagram from '@/images/footer/instagram.svg'
import youtube from '@/images/footer/youtube.svg'
import tiktok from '@/images/footer/tiktok.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='container'>
            {/* Links & Logo */}
            <div className='footer-container'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                }}>
                    <Image 
                        width={285}
                        height={136}
                        src={Logo}
                        alt='Apollo Club - Logo'
                    />
                    <Button 
                        className='footerBtn'
                        ariaLabel='Donate now!'
                        href='/'
                    >
                        Donate now!
                    </Button>
                </div>
                <div>
                        <h3 className='footer-heading'>Take Action</h3>
                        <ul className='footer-list'>
                            <li><a href="#">Donor Opportunities</a></li>
                        </ul>
                </div>
                <div>
                        <h3 className="footer-heading">Company</h3>
                        <ul className="footer-list">
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Newsroom</a></li>
                        </ul>
                </div>
                <div>
                        <h3 className="footer-heading">Connect</h3>
                        <ul className="footer-list">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                </div>
            </div>

            {/* Social Media */}
            <div style={{
                display: 'flex',
                gap: '20px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px 0',
                rowGap: '30px',
            }}>
                <div style={{
                    display: 'flex',
                    gap: '15px',
                }}>
                    <Link href="https://www.facebook.com" passHref className='footer-social' target='_blank'>
                        <Image 
                            src={facebook}
                            width={50}
                            height={50}
                            alt='Facebook Logo'
                        />
                    </Link>
                    <Link href="https://www.instagram.com" passHref className='footer-social' target='_blank'>
                        <Image 
                            src={instagram}
                            width={50}
                            height={50}
                            alt='Instagram Logo'
                        />
                    </Link>
                    <Link href="https://www.tiktok.com" passHref className='footer-social' target='_blank'>
                        <Image 
                            src={tiktok}
                            width={50}
                            height={50}
                            alt='TikTok Logo'
                        />
                    </Link>
                    <Link href="https://www.youtube.com" passHref className='footer-social' target='_blank'>
                        <Image 
                            src={youtube}
                            width={50}
                            height={50}
                            alt='Youtube Logo'
                        />
                    </Link>
                </div>
                <p style={{marginBottom: 0, fontSize: "15px"}}>
                    © 2021 Apollo Club. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer