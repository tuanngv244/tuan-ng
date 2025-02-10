import Link from "next/link";
import "@/styles/modules/home.scss";

export default function HomePage() {
  return (
    <main className="container page">
      <div className="revealers">
        <div className="revealer r-1"></div>
        <div className="revealer r-2"></div>
      </div>
      <div className="images">
        <div className="img">
          <img src="/imgs/img-intro-5.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-intro-6.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-intro-7.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/imgs/img-intro-2.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-intro-4.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-intro-3.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/imgs/img-intro-1.jpg" alt="" />
        </div>
      </div>
      <div className="hero-content">
        <div className="cover-img">
          <img src="/imgs/img-studio.jpg" alt="" />
        </div>

        <div className="site-info">
          <div className="row-intro row">
            <div className="col">
              <div className="line">
                <p className="bold feature">Feature Works</p>
              </div>
            </div>
            <div className="col">
              <h2 className="intro">
                Hi, I'm Cyan Nguyen👋 A Software Engineer from Vietnam. <br />I
                always want to bring great experience to clients. <br />I always
                try my best in every product with my co-workers. It's great to
                connect with someone who shares similar interests!
              </h2>
            </div>
          </div>
          <div className="row row-info">
            <div className="col"></div>
            <div className="col col-info">
              <div className="address">
                <div className="line">
                  <p> Vietnam</p>
                </div>
                <div className="line">
                  <p>- HCM city</p>
                </div>
                <div className="line">
                  <p>N1 4DX</p>
                </div>
              </div>
              <div className="socials">
                <div className="line">
                  <Link
                    href="mailto:tuanngv24.4@gmail.com"
                    className="hover-line"
                  >
                    tuanngv24.4@gmail.com
                  </Link>
                </div>
                <br />
                <div className="line">
                  <Link href="#" className="hover-line">
                    Instagram
                  </Link>
                </div>
                <div className="line">
                  <Link href="#" className="hover-line">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
