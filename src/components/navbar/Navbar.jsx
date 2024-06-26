import './navbar.scss'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from "react";



const Navbar = () => {
	const {toggle , darkMode } =useContext(DarkModeContext);

	return (
		<div className='navbar'>
			<div className="left">
				<Link to="/" style={{textDecoration:"none"}}>
				<span>Dev Social</span>
				</Link>

				<HouseOutlinedIcon/>
				{darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> : <WbSunnyOutlinedIcon onClick={toggle}/> }
				<GridViewOutlinedIcon/>

				<div className="search">
					<SearchOutlinedIcon/>
					<input type="text" placeholder="Search" />
				</div>
			</div>

			<div className="right">
				<PersonOutlinedIcon/>
				<EmailOutlinedIcon/>
				<NotificationsOutlinedIcon/>
				<div className="user">
					<img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
					<span>John Doe</span>
				</div>
			</div>
		</div>
		);
	}

export default Navbar;