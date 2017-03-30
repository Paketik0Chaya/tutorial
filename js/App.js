let App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <p> Компонент App</p>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);