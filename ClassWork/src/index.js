import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/client'
import { HelloWorld} from './components/hello-world'
import { NetflixRegisterComponent } from './components/netflix-register'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(NetflixRegisterComponent())