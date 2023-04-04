import { AuthProvider } from "./contexts/AuthContext"
import { NoticeProvider } from "./contexts/NoticeContext"
import { AppRoutes } from "./routes"

function App() {

  return (
    <div className="bg-background text-white">
      <AuthProvider>
        <NoticeProvider>
          <AppRoutes />
        </NoticeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
