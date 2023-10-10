import LinkedIn from './logo/linkedin.png'
import Github from './logo/github.png'
import Twitter from './logo/twitter.png'
import Instagram from './logo/instagram.png'

const Footer = () => {
    return (
        <footer align="center">
            <a href="https://www.linkedin.com/in/vishal-gori-710106214" target="_blank">
                <img src={LinkedIn} height="50px" alt="" />
            </a>
            <a href="https://github.com/Vishal-Gori" target="_blank">
                <img src={Github} height="50px" alt=""/>
            </a>
            <a href="https://twitter.com/VGori2003?t=QWb47oAAlD-Mabid0YXAdQ&s=09" target="_blank" >
                <img src={Twitter} height="50px" alt="" />
            </a>
            <a href="https://instagram.com/vishal22_8?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
                <img src={Instagram} height="50px" alt="" />
            </a><br/>
            <font color="white"><strong>Made with &#10084;  and lots of ☕</strong></font><br/>
            <font color="white"><strong>Copyright © 2023. All rights reserved</strong></font>

                </footer>
                )
}

export default Footer