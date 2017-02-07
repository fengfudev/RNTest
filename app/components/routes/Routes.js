import Home from '../../scenes/Home'
import CustomTheme from '../../themes/Custom'

let Routes = [
  { path: 'home', component: Home, payload: {theme: CustomTheme} }
]

export default Routes