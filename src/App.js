import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const ThirdSide = lazy(() => import('./pages/thirdside'))
const rules = lazy(() => import('./pages/rules'))
const Privacy = lazy(() => import('./pages/privacy'))

function App() {
	return (
		<Router>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route component={rules} path='/rules' exact />
					<Route component={ThirdSide} path='/third-side' exact />
					<Route component={Privacy} path='/terms-and-privacy' exact />
				</Switch>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<ToastContainer />
			</Suspense>
		</Router>
	)
}

export default App
