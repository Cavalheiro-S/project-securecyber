import { NoticeProvider } from "./contexts/NoticeContext"
import { AppRoutes } from "./routes"

function App() {

  return (
    <div className="bg-background text-white">
      <NoticeProvider>
        <AppRoutes />
      </NoticeProvider>
    </div>
  )
}

export default App
