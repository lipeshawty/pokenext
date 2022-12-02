import Link from 'next/link'

export default function Footer() {

    return (<>
        <footer className="footer has-cards" onload="onLoad()">
          <div  className="container container-lg">
            <hr/>
            <div  className="row align-items-center justify-content-md-between">
              <div className="col-md-6">
                <div className="copyright">Desenvolvido com <i class="fa-solid fa-heart"></i> por <a href="https://discord.com/users/986987489346613248">lipesshw</a>.
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav nav-footer justify-content-end" >
                  <li className="nav-item" id="loadtime"></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
</>)
}