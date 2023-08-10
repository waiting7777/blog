import Home from "./home";
import About from './about'
import Projects from "./projects";
import Posts from "./posts";

export default function Icons({ name, size = 18 }: { name: string, size?: number }) {
  switch (name) {
    case 'Home':
      return <Home width={size} height={size} />
    case 'About':
      return <About width={size} height={size} />
    case 'Projects':
      return <Projects width={size} height={size} />
    case 'Posts':
      return <Posts width={size} height={size} />
    default:
      return null
  }
}