import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Hero from './components/Hero'
import MainNav from "./components/MainNav";
import BusinessHours from "./components/BusinessHours";

const openingHours = [
  { weekday: 'Montag', start: '09:00', endtime: '13:00' },
  { weekday: 'Montag', start: '14:00', endtime: '19:00' },
  { weekday: 'Dienstag', start: '09:00', endtime: '18:00' },
  { weekday: 'Mittwoch', start: '09:00', endtime: '18:00' },
  { weekday: 'Freitag', start: '09:00', endtime: '18:00' },
  { weekday: 'Samstag', start: '09:00', endtime: '18:00' }
];

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <Logo />
        <MainNav />
      </header>

      <main className="app-content">
        <BusinessHours openingHours={openingHours} />
      </main>

      <Footer />
    </div>
  )
}

export default App
