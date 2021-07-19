import './_app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SwipeToExplore from './components/animation1'
import House from './components/animation2'
import ImageComparisonSlider from './components/animation3'
import WaterDrops from './components/animation4'
import ButtonRippleHover from './components/animation5'
import ShootingStars from './components/animation6'
import ButtonRippleEffectOnHover from './components/animation7'
import RippleAnimation from './components/animation8'
import NeonButton from './components/animation9'
import LoaderAnimation from './components/animation10'
import SplitVideo from './components/animation11'
import SkillsRatingBar from './components/animation12'
import OxygenHoverEffect from './components/animation13'
import GlassMorphismCalculator from './components/animation14'
import RotatingCube from './components/animation15'
import TextDistortion from './components/animation16'
import EndlessRoad from './components/animation17'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <SwipeToExplore />
          </Route>
          <Route path='/animation2'>
            <House />
          </Route>
          <Route path='/animation3'>
            <ImageComparisonSlider />
          </Route>
          <Route path='/animation4'>
            <WaterDrops />
          </Route>
          <Route path='/animation5'>
            <ButtonRippleHover />
          </Route>
          <Route path='/animation6'>
            <ShootingStars />
          </Route>
          <Route path='/animation7'>
            <ButtonRippleEffectOnHover />
          </Route>
          <Route path='/animation8'>
            <RippleAnimation />
          </Route>
          <Route path='/animation9'>
            <NeonButton />
          </Route>
          <Route path='/animation10'>
            <LoaderAnimation />
          </Route>
          <Route path='/animation11'>
            <SplitVideo />
          </Route>
          <Route path='/animation12'>
            <SkillsRatingBar />
          </Route>
          <Route path='/animation13'>
            <OxygenHoverEffect />
          </Route>
          <Route path='/animation14'>
            <GlassMorphismCalculator />
          </Route>
          <Route path='/animation15'>
            <RotatingCube />
          </Route>
          <Route path='/animation16'>
            <TextDistortion />
          </Route>
          <Route path='/animation17'>
            <EndlessRoad />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
