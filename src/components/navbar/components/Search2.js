import React, { Fragment, useEffect } from 'react'
import * as JsSearch from 'js-search';
import { useDispatch, useSelector } from 'react-redux';
import store from "../../index"
import { fetchPersonalDetail } from '../../login/logic/actions/signInAction';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';


function Search(props) {
    
    

    const state = useSelector(state => state.movies);
    //const [movie, setMovie] = useState(state);
    const dispatch = useDispatch();
    
    //console.log("Testing : ", state.imgMovies[0].image)

    store.subscribe(() => {

        console.log('something happened' , store.getState())    
    });

    useEffect(() => {
        console.log('[UseEffect Corousel]')
        dispatch(fetchPersonalDetail());
    }, [])

    var search = new JsSearch.Search('title');
    search.addDocuments(state.imgMovies)

    const onInputSearch = (event) => {
        search.search(event.target.value)
    }


    return (
        <Fragment>
            <Dropdown 
                // placeholder='Movie-title'
                // fluid
                // multiple
                search
                // selection
                // options={state.imgMovies}
            />
            {/* <input id="movie-search" onInput={onInputSearch}></input>
            <i id="search-icon" class="fa fa-search"></i> */}
        </Fragment>
    )
}

export default connect()( Search )
