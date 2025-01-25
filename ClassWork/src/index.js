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
import { TwoWayBindingEx } from './components/two-way-binding-ex'
import { TwoWayBindingEx2 } from './components/two-way-binding-ex2'
import { TwoWayClassBindDemo } from './components/state-Binding-class'
import { StyleClassBindingEx } from './components/style-class-binding-ex'
import { FormikDemo } from './components/formik-demo'
import { FormValidationEx1 } from './components/form-validation-ex1'
import { YupValidationsEx1 } from './components/yup-validation-ex1'
import { YupValidationsEx2 } from './components/yup-validation-ex2'
import { LifeCycleDemo } from './components/life-cycle-demo'
import { ContextMemoryDemo } from './components/context-memory-demo'
import { CookiesProvider } from 'react-cookie'
import { CookiesDemo } from './components/cookies-demo'
import { ReducerComponent } from './components/reducer-demo'
import { ReducerComplexEx1 } from './components/reducer-complex-ex1'
import { CustomSort } from './components/custom-hook-ex'
import { JQueryAjaxDemo } from './components/jquery-ajax-demo'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <JQueryAjaxDemo/>
)