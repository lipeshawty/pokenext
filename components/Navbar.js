import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    return (<>
    <nav className="navbar navbar-expand-lg shadow">
    <div className="container">
            <div className="col-6 collapse-brand">
              <a >
                    <Image src="/pokeball.png" width="40" height="40" alt="pokeball"/></a> <strong>PokeNext</strong>
              
            </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-primary">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-close">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav ml-lg-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/"><strong>Início</strong>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" href="/sobre"><strong>Sobre</strong></Link>
          </li>
          <li className="nav-item ">
          <Link href="https://github.com/lipeshawty/pokenext"><button type="button" class="btn btn-default btn-round"><i class="fa-brands fa-github"></i>&nbsp;SourceCode</button></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>)
}