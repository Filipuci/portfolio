
import { HeroHeader } from "./components/Hero/HeroHeader"
import { ThemeProvider } from "./components/theme-provider"
import { Separator } from "./components/ui/separator"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-dvh container m-auto">
        <HeroHeader />
        <Separator />
      </div>
    </ThemeProvider >
  )
}

export default App