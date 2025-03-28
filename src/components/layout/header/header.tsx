import { Account } from "./Account"
import { Logo } from "./Logo"

export const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Account />
        </div>
    )
}