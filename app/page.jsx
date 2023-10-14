import Header from '@/components/Header'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <div>
      <Header />

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

      <div className="home">
        <img src="img/uni_logo.png" />
        <h1>안녕하세요</h1>
        <p>중부대학교 정보보호학전공 송지현입니다.</p>
      </div>
    </div>
  )
}
