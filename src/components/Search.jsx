import React, { useState } from 'react';

const Search = (props) => {

    const { searchMovies = Function.prototype } = props

    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')



    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type)
        searchMovies(search, event.target.dataset.type)
    }


    return <div className="row">

        <div className="input-field ">
            <input
                placeholder='search'
                type='search'
                id="email_inline"
                type="email"
                className="validate"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <button
                className='btn search-btn'
                onClick={() => searchMovies(search, type)}>
                Search</button>

            <div>
                <label>
                    <input name="type"
                        type="radio"
                        data-type='all'
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>Все</span>
                </label>
                <label>
                    <input name="type" type="radio" data-type='movie' onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Только фильмы</span>
                </label>
                <label>
                    <input name="type" type="radio" data-type='series' onChange={handleFilter}
                        checked={type === 'series'} />
                    <span>Только сериалы</span>
                </label>
            </div>

        </div>
    </div>



}

export default Search