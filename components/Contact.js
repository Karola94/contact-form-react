var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {className: 'contactItem'},
          React.createElement('i', {className: 'fas fa-id-card-alt'}),
          React.createElement('div', {className: 'personalData'},
            React.createElement('div', {className: 'name'}, 
              React.createElement('p', {className: 'contactLabel'}, this.props.item.firstName),
              React.createElement('p', {className: 'contactLabel'}, this.props.item.lastName),
            ),
              React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
              this.props.item.email
            )
          ),
          React.createElement('i', {className: 'fas fa-info-circle'})
        )
      )
    },
});