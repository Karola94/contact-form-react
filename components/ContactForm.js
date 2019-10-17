var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        React.createElement('form', {className: 'contactForm'},
          React.createElement('div', {className: 'nameRow'}, 
            React.createElement('div', {className: 'first form-group'},
              React.createElement('label', {className: 'nameLabel', for: 'inputFirstName'}, 'Imię'),
              React.createElement('input', {
                type: 'text',
                placeholder: 'Imię',
                id: 'inputFirstName',
                className: 'form-control',
                value: this.props.contact.firstName            
              })
            ),
            React.createElement('div', {className: 'last form-group'},
              React.createElement('label', {className: 'nameLabel', for: 'inputLastName'}, 'Nazwisko'),
              React.createElement('input', {
                type: 'text',
                placeholder: 'Nazwisko',
                id: 'inputLastName',
                className: 'form-control',
                value: this.props.contact.lastName,
              })
            )
          ),
          React.createElement('label', {className: 'formLabel', for: 'inputEmail'}, 'Email'),
          React.createElement('input', {
            type: 'email',
            placeholder: 'Email',
            id: 'inputEmail',
            className: 'form-control',
            value: this.props.contact.email,
          }),
          React.createElement('button', {type: 'submit', className: 'submit btn btn-info'}, "Dodaj kontakt")
        )
      )
    },
})