import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/navbar';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Store } from './pages/store';
import { AddictionHelpOverview } from './pages/addiction-help-overview';
import { SupportSomeoneOverview } from './pages/support-someone-overview';
import { GetEducatedOverview } from './pages/get-educated-overview';
import { AcademyOverview } from './pages/academy-overview';
import { WhereToStart } from './pages/where-to-start';
import { Groups } from './pages/groups';
import { JoinProgramme } from './pages/join-programme';
import { PExApp } from './pages/pex-app';
import { Resources } from './pages/resources';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/addiction-help-overview"
						element={<AddictionHelpOverview />}
					/>
					<Route path="/where-to-start" element={<WhereToStart />} />
					<Route path="/groups" element={<Groups />} />
					<Route path="/join-programme" element={<JoinProgramme />} />
					<Route path="/pex-app" element={<PExApp />} />
					<Route path="/resources" element={<Resources />} />

					<Route
						path="/support-someone-overview"
						element={<SupportSomeoneOverview />}
					/>
					<Route
						path="/get-educated-overview"
						element={<GetEducatedOverview />}
					/>
					<Route
						path="/academy-overview"
						element={<AcademyOverview />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/store" element={<Store />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
