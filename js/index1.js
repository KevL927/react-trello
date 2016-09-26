var React = require('react');
var ReactDOM = require('react-dom');


var Card = function (props) {
    return (
        <div className="card-view">
            <p>{props.text}</p>
        </div>
    );
};

// Stateless component
var List = function (props) {
    console.log(props);
var list=[];

    for(var i = 0; i < props.cards.length; i++) {
        list.push(<Card text={props.cards[i]} />);
    }
        return (
            <div className="card-list">
               <h3>{props.title}</h3>
               <p>{list}</p>
            </div>
        );
};

// Stateless component
var Board = function (props) {
    var lists = [];
    
    for(var i = 0; i < props.lists.length; i++) {
        lists.push(<List title={props.lists[i].title} cards={props.lists[i].cards}/>)
    }
    
    <List lists = {props.lists} />
    return (
        <div className="card-board">
            <h2>{props.title}</h2>
            <h4>{lists}</h4>
        </div>
    );
}

var lists = [{title:'Breakfast List', cards: ['milk', 'juice', 'egg', 'bread']}, {title:'Dinner List', cards: ['steak', 'wine']}]

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Shopping List"
                               lists={lists}/>, 
                    document.getElementById('app')
    );
});