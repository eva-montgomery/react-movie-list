import React from 'react';


function _handleMouseOver() {
    console.log('ouch');
};

// const movies = [
//     'The Goonies',
//     'E.T.',
//     'Dirty Dancing',
// ]

// MovieLOsit is a React Component
class MovieList extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        movies: [
            'The Goonies',
            'E.T.',
            'Dirty Dancing'
        ]

    };
}

    render() {
        return (
            // <ul>
            //     <li onClick={_handleClick}>The Goonies</li>
            //     <li onMouseOver={_handleMouseOver}>E.T.</li>
            //     <li>Dirty Dancing</li>
            // </ul>

            <ul>
                {
                this.state.movies.map((movie, i) => (
                <li onClick={() => {
                    this._handleClick(i)
                }}>{movie}</li>
                ))
                }
            </ul>
        )
    };
    // "_handleClick" is an arrow function and it is part of this class
    //  _handleClick = (event) => {
    //     console.log('They clicked');
    //     console.log(event.target);
    // };

        _handleClick = (index) => {
            // console.log(index);
            const newMovies = [
                ...this.state.movies
            ];
            newMovies[index] += '!'; 

            this.setState({
                movies: newMovies
            });

        }

}




export default MovieList;


// in case you need to export more than one thing:
// function MoviePosterList() {

// }; 

// export default MoviePosterList;