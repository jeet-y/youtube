import logo from '../Images/youtube-logo.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDEOS_API } from '../constant'
import { useState, useEffect } from 'react'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSearchSuggestionsVisible, setShowSearchSuggestionsVisible] = useState(false);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API + searchQuery);
        const result = await data.json();
        setSearchSuggestions(result[1]);
        // console.log(result[1])
    }

    const clickHandlerOnSearchListItem = (e) => {
        setSearchQuery(e.slice(7))
        document.getElementById('searchInput').value = e.slice(7);
        setShowSearchSuggestionsVisible(false);
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            getSearchSuggestions();
        }, 200);
        return () => {
            clearTimeout(timeout)
        }
    }, [searchQuery]);


    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col items-center h-14 bg-[#0f0f0f]">
            <div className="col-span-1 grid grid-flow-col items-center">
                <div name="sidebar-menu" className='flex flex-col col-span-1 ml-5 cursor-pointer' onClick={() => toggleMenuHandler()}>
                    <div className="inline border-t ml-2 m-[2.5px] w-5 border-whtie"></div>
                    <div className="inline border-t ml-2 m-[2.5px] w-5 border-whtie"></div>
                    <div className="inline border-t ml-2 m-[2.5px] w-5 border-whtie"></div>
                </div>
                <Link to="/" className='w-24 col-span-5 cursor-pointer' href='/'><img src={logo} alt="youtube logo" /></Link>
            </div>
            <div className='col-span-10 h-9 mr-10 flex justify-center border-none'>
                <div className='w-1/3 relative'>
                    <input id="searchInput"
                        onKeyUp={() => { setShowSearchSuggestionsVisible(true) }}
                        onBlur={() => { setTimeout(() => { setShowSearchSuggestionsVisible(false) }, 200) }}
                        onFocus={() => { setTimeout(() => { setShowSearchSuggestionsVisible(true) }, 200) }}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className=' w-full py-[7px] px-4 border-[#303030] rounded-l-full text-white bg-[#0f0f0f] border-[1px] focus:border-[#2d5faf] focus:outline-none' placeholder='Search' />
                    {showSearchSuggestionsVisible && (
                        <ul className=' text-black rounded-xl bg-white w-full'>
                            {
                                searchSuggestions.map((e, index) => {
                                    return <li className='px-5 p-2 flex flex-row font-medium cursor-pointer' key={index}
                                        onClick={(e) => {
                                            clickHandlerOnSearchListItem(e.target.innerText);
                                        }}
                                    >
                                        <span className="material-symbols-sharp mr-2">search</span>
                                        {e}</li>
                                })
                            }
                        </ul>
                    )}

                </div>
                <div className='p-[19px] flex justify-start items-center bg-[#212121] border-[#303030] border-[1px] rounded-r-full cursor-pointer'><span className="material-symbols-sharp text-white"> search</span></div>
            </div>
            <div className='col-span-1'>
                <img className='w-12' src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' alt='user' />
            </div>
        </div >
    )
}

export default Head;