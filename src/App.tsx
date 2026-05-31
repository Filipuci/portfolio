import { HeroSection } from "./components/Hero/HeroSection"
import { ProjectSection } from "./components/Projects/ProjectSection"
import { ThemeProvider } from "./components/theme-provider"
import { Separator } from "./components/ui/separator"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HeroSection />
        <ProjectSection />
    </ThemeProvider >
  )
}

export default App