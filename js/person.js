var React = require('react');
var ReactDOM = require('react-dom');

var Person = function () {
    var name = 'Derek Zoolander';
    var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
    var job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

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