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
              <div className="home_name">PROJECT</div>
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

      <div className="project_web">
        <img src="/img/webdemo.png" />
        <p>
          <a
            href="https://github.com/thdwlgus/web_programing"
            target="_blank"
            className="github"
          >
            <b>Go to GitHub</b>
          </a>
        </p>
        <a href="https://web-programing-eta.vercel.app/" target="_blank"></a>
      </div>
      <div className="project_web">
        <img src="/img/webclerk.png" />
        <p>
          <a href="https://github.com/thdwlgus/clerk2" target="_blank">
            <b>Go to GitHub</b>
          </a>
        </p>
        <a href="https://clerk2-seven.vercel.app/" target="_blank"></a>
      </div>
    </div>
  )
}
