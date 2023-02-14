import React from 'react'

function FilterButton(props) {
    return (
        <div>
            <button className='border text-sm px-3 py-1 shadow rounded-lg bg-[#212121] border-[#212121] text-white ml-3'>{props.name}</button>
        </div>
    )
}

export default FilterButton
