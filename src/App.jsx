import ThemeToggle from './components/ThemeToggle.jsx'
import MatchAnalyze from "./pages/MatchAnalyze";
import Button from './components/ui/Button.jsx'
import Input from './components/ui/Input.jsx'
import Loader from './components/ui/Loader.jsx'

function App() {
  return (
    <>
      <ThemeToggle />
      <MatchAnalyze />
      
        <Input label="Email" placeholder="you@example.com" />
        <div className="flex gap-2 items-center">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Loader />
        </div>
      
    </>
  );
}

export default App;