import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";


const Home = () => {
  return (
    <>
    <div className="home" id='home'>
    <main>
        <h1>First Project</h1>
        <p>Understanding React Routing with sass styling</p>
    </main>
   </div>

   <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore velit quibusdam natus necessitatibus ab, nulla nam corrupti eum repellendus blanditiis distinctio, expedita asperiores quidem? Iusto architecto cum cupiditate excepturi dolore. Sunt vel, consequuntur laboriosam corrupti rerum iste ab cumque delectus magnam illo totam maxime ea, sed, repellendus quidem nulla corporis cum obcaecati! Modi ipsa dicta, quos est amet laborum mollitia?
        </p>
    </div>
   </div>

   <div className="home3" id='about'>
    <div>
        <h1>Simply Undersatnd how React works..?</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, commodi quibusdam vitae ipsum excepturi quisquam neque aut quasi deleniti alias reprehenderit numquam distinctio iste cumque dolor perferendis, voluptas harum blanditiis, libero pariatur! Consequatur accusamus quas autem suscipit molestiae quam perferendis culpa dolore! Nisi veniam facere corrupti delectus culpa sapiente suscipit?
        </p>
    </div>
   </div>

   <div className="home4" id='brands'>
    <div>
        <h1>Brands</h1>

        <article>
            <div style={{animationDelay: "0.3s"}}>
            <AiFillGoogleCircle />
            <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
            <AiFillYoutube />
            <p>Youtube</p>
            </div>
            <div style={{animationDelay: "1s"}}>
            <AiFillInstagram />
            <p>Instagarm</p>
            </div>
        </article>
    </div>
   </div>
    </>
   
  )
}

export default Home