import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../assets/pex-black-transparent.png';
import { useState, useEffect, useRef } from 'react';
import { Chevron } from './Chevron';

export const Navbar = () => {
	return (
		<nav className="text-sm font-plus px-16 py-3 flex justify-between items-center shadow-md text-black">
			<div>
				<img src={Logo} alt="Pex Logo" className="w-24" />
			</div>
			<div className="flex items-center gap-8">
				<DropdownItem dropdownText="Addiction Help">
					<AddictionHelpMenu />
				</DropdownItem>
				<DropdownItem dropdownText="Support Someone">
					<SupportSomeoneMenu />
				</DropdownItem>
				<DropdownItem dropdownText="Offer Help">
					<OfferHelpMenu />
				</DropdownItem>
				<DropdownItem dropdownText="Get Educated">
					<GetEducatedMenu />
				</DropdownItem>
				<DropdownItem dropdownText="Academy">
					<AcademyMenu />
				</DropdownItem>
				<NavItem itemText="Store" route="/store" />
				<NavItem itemText="About" route="/about" />
				<NavItem itemText="Contact" route="/contact" />
			</div>
			<div className="flex items-center gap-8">
				<p>Register</p>
				<p>Login</p>
			</div>
		</nav>
	);
};

const NavItem = (props) => {
	return (
		<Link
			className="list-none hover:text-blue transition-all duration-300 ease"
			to={props.route}
		>
			{props.itemText}
		</Link>
	);
};

const DropdownItem = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	// Closes dropdown item on click
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				closeDropdown();
			}
		};

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, [dropdownRef]);

	return (
		<div className="" ref={dropdownRef}>
			<p
				className="cursor-pointer flex items-center gap-2"
				onClick={toggleDropdown}
			>
				{props.dropdownText}
				<Chevron
					className={`${
						dropdownOpen ? 'rotate-180' : 'rotate-0'
					} transition-all duration-500 ease-in-out`}
				/>
			</p>
			<div
				className={`${
					dropdownOpen
						? 'opacity-100'
						: 'opacity-0 pointer-events-none'
				}  transition-opacity duration-300 absolute w-2/12 flex flex-col top-20 bg-white border border-slate-200 shadow-xl rounded-lg`}
			>
				{props.children}
			</div>
		</div>
	);
};

// AddictionHelpMenu
const AddictionHelpMenu = () => {
	return (
		<>
			<Link
				to={'/where-to-start'}
				className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300"
			>
				Where to start
			</Link>
			<Link
				to={'/groups'}
				className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300"
			>
				Join a group
			</Link>
			<Link
				to={'/join-programme'}
				className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300"
			>
				Join a programme
			</Link>
			<Link
				to={'/pex-app'}
				className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300"
			>
				PEx App
			</Link>
			<Link
				to={'/resources'}
				className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300 rounded-b-lg"
			>
				Resources
			</Link>
		</>
	);
};
// SupportSomeoneMenu
const SupportSomeoneMenu = () => {
	return (
		<>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				How can I Help
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Supporter group
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Supporter programme
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Resources
			</p>
		</>
	);
};
// OfferHelpMenu
const OfferHelpMenu = () => {
	return (
		<>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Start a group
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Start a programme
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Consulting services
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Donate
			</p>
		</>
	);
};
// GetEducatedMenu
const GetEducatedMenu = () => {
	return (
		<>
			<p className="hover:bg-blue font-bold px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				thrive
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				ERS
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Vantage
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Self-assessments
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Blog
			</p>
		</>
	);
};
// AcademyMenu
const AcademyMenu = () => {
	return (
		<>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Group facilitation
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				ERS facilitation
			</p>
			<p className="hover:bg-blue px-5 py-2 cursor-pointer hover:bg-blue-100 transition-all duration-300">
				Umbrella Care Academy
			</p>
		</>
	);
};

// Prop Validation
NavItem.propTypes = {
	itemText: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
};
DropdownItem.propTypes = {
	dropdownText: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
