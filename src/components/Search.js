import React from 'react';

const Search = props => {
    return (
        <section className="search">
            <div className="container flex">
                <div className="py2 flex">
                    <form onSubmit={props.submit}>
                        <input
                            type='text'
                            value={props.value}
                            onChange={props.change}
                            placeholder='wpisz miasto'
                        />
                        <button>
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Search;