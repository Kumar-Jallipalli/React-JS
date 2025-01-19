import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

import { HelloWorld} from './components/hello-world'
import { NetflixRegisterComponent } from './components/netflix-register'
import { DataBinding } from './components/data-binding'
import { DataBindingEx } from './components/data-binding-ex'
import { UseEffect } from './components/use-effects'
import { OneWayBindingEx } from './components/one-way-binding-ex'
import { EventBinding } from './components/event-binding'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <EventBinding/>
)