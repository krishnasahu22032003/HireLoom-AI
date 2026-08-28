import Button from "../ui/Button";
import ToggleThemeButton from "../ui/ToggleThemeButton";

const navItems = [
    { id: 1, title: "Features", href: "#features" },
    { id: 2, title: "Testimonials", href: "#testimonials" },
    { id: 3, title: "About", href: "#About" },
    { id: 4, title: "Pricing", href: "#pricing" },
];

const Navbar = () => {
    return (
        <div className="items-center flex justify-between p-4">
            <div>Logo</div>
            <div className="text-gray-500 hover:text-black font-semibold gap-4 flex">
                {navItems.map((item) => (
                    <a key={item.id} href={item.href}>{item.title}</a>
                ))}
                <ToggleThemeButton/>
                <Button variant="primary">Get Started</Button>
            </div>
        </div>
    )
}

export default Navbar