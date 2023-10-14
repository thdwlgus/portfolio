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
              <div className="home_name">T-PROJECT</div>
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

      <div className="t_p1">
        <img src="img/web-t1.png" />
      </div>
      <div className="t_p2">
        <img src="img/web-t2.png" />
      </div>
      <div className="t_p3">
        <img src="img/web-t3.png" />
      </div>
      <div className="t_p4">
        <img src="img/web-t4.png" />
      </div>
      <div className="t_p5">
        <img src="img/web-t5.png" />
      </div>
      <div className="t_p6">
        <img src="img/web-t6.png" />
      </div>
    </div>
  )
}
