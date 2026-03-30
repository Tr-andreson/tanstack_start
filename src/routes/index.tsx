import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
	  <div>
		  <h4>Home Page</h4>
		  <a href="/about" >About page</a>
	  </div>

  )
}
