import React from 'react';
import {
    NavbarContainer,
    Logo,
    SearchInput,
    Tools,
    Profile
} from 'style';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>Logo</Logo>
            <SearchInput><input placeholder="search" /></SearchInput>
            <Tools>
                <li>Home</li>
                <li>Message</li>
                <li>Add</li>
                <li>Browse</li>
                <li>Like</li>
            </Tools>
            <Profile>profile</Profile>
        </NavbarContainer>
    )
}

export default Navbar