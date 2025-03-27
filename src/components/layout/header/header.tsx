import { Account } from "./account";
import { Logo } from "./logo";

export const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Account />
        </div>
    )
}