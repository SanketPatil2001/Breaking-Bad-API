import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterList = ({ items, isLoading }) => {
    return isLoading ? (<h1 className='center'>Loading...</h1>) : (<section className='cards'>
        {items.map(item => (
            <CharacterItem className='center' key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
    )
}

export default CharacterList
