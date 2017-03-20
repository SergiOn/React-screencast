let Hero = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },

    handleClick: function () {
        this.setState({ count: this.state.count + 1 });
        // this.state.count += 1;
        // console.log(this.state.count);
        // console.log('click');
    },

    render: function () {
        return (
            <div className="container">
                <div className="count">{this.state.count}</div>
                <img src={this.props.imageUrl} onClick={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

ReactDOM.render(
    <div className="container-wrapper">
        <Hero title="React"
              subtitle="A javascript library for building user interface"
              imageUrl="https://facebook.github.io/react/img/logo.svg"
        />
        <Hero title="Angular 2"
              subtitle="One framework"
              imageUrl="https://angular.io/resources/images/logos/angular2/angular.svg"
        />
    </div>,
    document.getElementById('root'));