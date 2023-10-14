import Link from 'next/link'

const Header = () => {
  return (
    <>
      <nav className="home_bg">
        <div className="flex items-center">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="home_name">PORTFOLIO</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
