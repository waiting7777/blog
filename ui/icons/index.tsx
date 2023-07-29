import Home from "./home";
import About from './about'

export default function Icons({ name, size = 18 }: { name: string, size?: number }) {
  switch (name) {
    case 'Home':
      return <Home width={size} height={size} />
    case 'About':
      return <About width={size} height={size} />
  }
}