var React = require('react');
var ReactDOM = require('react-dom');



// Stateless component
var Card = function () {
    return (
        <div className="card-view">
            <p>"This is a card"</p>
        </div>
    );
};

// Stateless component
var CardList = function () {
    var list = [];
    for (var i=0; i < 3; i++) {
        list.push(<Card key={i}/>);
    }
    return (
        <div className="card-list">
            {list}
        </div>
    );
};

// Stateless component
var CardBoard = function () {
    var board = [];
    for (var i=0; i < 3; i++) {
        board.push(<CardList key={i}/>);
    }
    return (
        <div className="card-board">
            {board}
        </div>
    );
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<CardBoard />, document.getElementById('app'));
});