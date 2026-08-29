import HeroSection from "../components/landing/HeroSection";
import Navbar from "../components/landing/Navbar"
import Container from "../components/ui/Container"

const LandingPage = () => {
  return (
<div   className="
    min-h-screen
    bg-[radial-gradient(ellipse_at_50%_0%,#ffffff_0%,#f7fbff_32%,transparent_68%),linear-gradient(180deg,#e8f4ff_0%,#e2f1ff_48%,#e0eafb_100%)]
    
    dark:bg-[radial-gradient(ellipse_at_50%_0%,#172554_0%,#0f172a_35%,transparent_68%),linear-gradient(180deg,#0b1220_0%,#0a1428_50%,#070d1b_100%)]
  ">
    <Container>
        <Navbar/>
        <HeroSection/>
    </Container>
</div>
  )
}

export default LandingPage ; 