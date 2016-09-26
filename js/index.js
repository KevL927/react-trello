var React = require('react');
var ReactDOM = require('react-dom');



// var Card = function(props) {
    
//     return (
//         <div className='card'>
//         {props.title}
//         </div>
//     );    
// };

// var List = function(props) {
//     var lists=[];
//     for(var i = 0; i < 3; i++) {
//         props.lists.push(<Card key={i}/>);
//     }
//     return(
//         <div className="card-list">
//             {props.title}
//         </div>
//         )
// };

// var Board = function(props) {
//     var lists = [];
//     for(var i = 0; i < 3; i++) {
//         lists.push(<Card key={i}/>);
//     }
//     return(
//         <div className="card-board">
//             <CardList props.lists/>
//         </div>
//     );
// };

var Card = function (props) {
    
    return (
        <span className="card-view">
            <li>{props.text}</li>
        </span>
    );
};

// Stateless component
var List = function (props) {

var list=[];

    for(var i = 0; i < props.cards.length; i++) {
        list.push(<Card text={props.cards[i]} key={i} />);
    }
        return (
            <div className="card-list">
            <h2>{props.title}</h2>
               <p>{list}</p>
            </div>
        );
};

// Stateless component
var Board = function (props) {
    var lists=[];
    for(var i=0; i< props.lists.length; i++){
         lists.push(<List title={props.lists[i].title} cards={props.lists[i].cards} key={i} />)
    }
//   <List lists={props.lists} />
    
    return (
        <div className="card-board">
            <h1>{props.title}</h1>
            <h4>{lists}</h4>
        </div>
    );
}

var lists = [{title:'Breakfast List', cards: ['milk', 'juice', 'egg', 'bread']}, {title:'Dinner List', cards: ['steak', 'wine']}]

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title = "Shopping List"
                               lists = {lists}/>, 
                    document.getElementById('app')
    );
});