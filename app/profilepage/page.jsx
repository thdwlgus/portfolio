import Header from '@/components/Header'
import Image from 'next/image'
import '../globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav className="home_bg">
        <div className="flex items-center">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="home_name">PROFILE</div>
            </Link>
          </div>
        </div>
      </nav>

      <aside class="side-bar">
        <section class="side-bar__icon-box">
          <section class="side-bar__icon-1">
            <div></div>
            <div></div>
            <div></div>
          </section>
        </section>
        <ul>
          <li>
            <a href="/profilepage">
              <i class="fa-solid fa-cat"></i> Profile
            </a>
          </li>
          <li>
            <a href="/projectpage">Project</a>
          </li>
          <li>
            <a href="/t-projectpage">T-Project</a>
          </li>
        </ul>
      </aside>

      <div className="profile">
        <img src="img/my_pic.jpg" />
        <h1>About Me</h1>
      </div>
      <div className="profile_f">
        <img src="img/file.png" />
      </div>
      <div className="profile_container">
        <p>
          <b>이름 : </b>송지현(Song JiHyun)
        </p>
      </div>
      <div className="profile_container1">
        <p>
          <b>생년월일 : </b>2003.10.17
        </p>
      </div>
      <div className="profile_container2">
        <p>
          <b>MBTI : </b>ESTJ
        </p>
      </div>
      <div className="profile_container3">
        <p>
          <b>거주지 : </b>은평구 연신내
        </p>
      </div>
    </div>
  )
}
