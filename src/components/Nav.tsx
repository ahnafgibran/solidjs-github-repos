import { Component } from 'solid-js';
import { NavLink } from 'solid-app-router';

const Nav: Component = () => {
    return (
        <div class='w-full flex items-center gap-3 p-4 text-white'>
            <NavLink href='/' activeClass='bg-green-700' inactiveClass='bg-blue-700' class='px-4 py-2 rounded-md' end>Home</NavLink>
            <NavLink href='/savedrepos' activeClass='bg-green-700' inactiveClass='bg-blue-700'  class='px-4 py-2 rounded-md' >Saved Repos</NavLink>
        </div>
    )
}

export default Nav;