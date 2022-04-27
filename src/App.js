import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const rules = lazy(() => import('./pages/rules'))

function App() {
	return (
		<Router>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route component={rules} path='/rules' exact />
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
