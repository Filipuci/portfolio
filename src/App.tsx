import { AboutSection } from "./components/About/AboutSection"
import { HeroSection } from "./components/Hero/HeroSection"
import { ProjectSection } from "./components/Projects/ProjectSection"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HeroSection />
        <ProjectSection />
        <AboutSection />
    </ThemeProvider >
  )
}

export default App