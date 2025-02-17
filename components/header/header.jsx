import { Account } from "./account"
import { Logo } from "./logo"
import { Search } from "./search"

const header = {
    logo: 'https://media.istockphoto.com/id/1133565424/photo/muscle-car-with-colored-pattern-of-flame-blue.jpg?s=1024x1024&w=is&k=20&c=TRH3NKSDboWyLnpOXpqy3yI--i1m_FkudIcrSPWzli8=',
    searchBarEnable: true,
    accountLogo: 'https://cdn-icons-png.flaticon.com/512/8345/8345328.png'
}

export const Header = () => {
    return (
        <div className="header">
            <Logo logo={header.logo} />
            <Search />
            <Account />
        </div>
    )
}