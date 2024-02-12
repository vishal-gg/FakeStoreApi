import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <div>
            <div>logo</div>
            <div>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Docs</Link></li>
                    <li><Link href="#">Github</Link></li>
                    <li><button>Dark</button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
