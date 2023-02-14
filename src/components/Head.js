import logo from '../Images/youtube-logo.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col items-center h-16 bg-[#0f0f0f]">
            <div className="col-span-1 grid grid-flow-col items-center">
                <div name="sidebar-menu" className='flex flex-col col-span-1 ml-5 cursor-pointer' onClick={() => toggleMenuHandler()}>
                    <div className="inline border-t ml-2 m-[2.5px] w-5 border-whtie"></div>
                    <div className="inline border-t ml-2 m-[2.5px] w-5 border-whtie"></div>
                    <div className="inline border-t ml-2 m-[2.5px] w-5 border-whtie"></div>
                </div>
                <a className='w-24 col-span-5 cursor-pointer' href='/'><img src={logo} alt="youtube logo" /></a>
            </div>
            <div className='col-span-10 mr-36 flex justify-center'>
                <input className='w-1/3 py-[7px] px-4 border-[#303030] rounded-l-full text-gray-900 bg-[#0f0f0f] border-[1px]' placeholder='Search' />
                {/* <button className='w-40 z-20 bg-black' src={searchBtn}></button> */}
                <img className='bg-[#212121] border-[#303030] border-[1px] rounded-r-full p-[11px] h-10 px-6' src='https://inmortaltechnologies.com/images/page/icon/search-interface-symbol.png' alt='searchIcon' />
            </div >
            <div className='col-span-1'>
                <img className='w-12' src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' alt='user' />
            </div>
        </div >
    )
}

export default Head;