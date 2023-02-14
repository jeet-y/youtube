import React from 'react'
import FilterButton from './FilterButton';

const list = ["All", "News", "Mantras", "Mixes", "Live", "Bollywood Music", "Chill-out", "Javascript", "Motivation", "Cooking", "Songs", "Barbells", "Computer Application", "Sitcoms", "Scene", "Bhajan", "DJ mix", "Rapping"];
function FilterButtonList() {
    return (
        <div className='flex'>
            {
                list.map((listItem) => {
                    return <FilterButton name={listItem} key={list.indexOf(listItem)} />
                })
            }


        </div>
    )
}

export default FilterButtonList;
