import React from "react"
import MainLayout from './src/components/Layout/MainLayout'
import './src/scss/main-bootstrap.scss'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab, fas)

export const wrapRootElement = ({ element }) => (
   <MainLayout>{element}</MainLayout>
 )