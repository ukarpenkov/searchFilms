import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })

    }

    render() {
        return <div className="row">

            <div className="input-field ">
                <input
                    placeholder='search'
                    type='search'
                    id="email_inline"
                    type="email"
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey}
                />
                <button
                    className='btn search-btn'
                    onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
                    Search</button>

                <div>
                    <label>
                        <input name="type"
                            type="radio"
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>Все</span>
                    </label>
                    <label>
                        <input name="type" type="radio" data-type='movie' onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Только фильмы</span>
                    </label>
                    <label>
                        <input name="type" type="radio" data-type='series' onChange={this.handleFilter}
                            checked={this.state.type === 'series'} />
                        <span>Только сериалы</span>
                    </label>
                </div>

            </div>
        </div>


    }
}

export default Search