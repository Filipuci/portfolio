import { HeroSection } from "./components/Hero/HeroSection"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HeroSection />
    </ThemeProvider >
  )
}

export default App