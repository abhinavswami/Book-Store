import React, {PropTypes} from 'react';

export default class BookDetails extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="media">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src ="http://placehold.it/200/450" alt="Placehold"/>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">Title</h4>
                    <ul>
                        <li><strong>Author: </strong> Author</li>
                        <li><strong>Price: </strong> Price</li>
                        <li><strong>Year: </strong> Year</li>
                        <br/>
                        <button className="btn btn-primary">Buy</button>
                    </ul>
                </div>
            </div>
        );
    }
}