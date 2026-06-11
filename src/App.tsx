import { AboutSection } from "./components/About/AboutSection"
import { ContactSection } from "./components/Contact/ContactSection"
import { HeroSection } from "./components/Hero/HeroSection"
import { ProjectSection } from "./components/Projects/ProjectSection"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
    </ThemeProvider >
  )
}

export default App