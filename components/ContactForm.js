var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        <form className={'contactForm'}>
          <div className={'nameRow'}>
            <div className={'first form-group'}>
              <label className={'nameLabel'} htmlFor={'inputFirstName'}>Imię</label>
              <input type='text' 
                    placeholder='Imię' 
                    id='inputFirstName' 
                    className='form-control' 
                    value={this.props.contact.firstName} />      
            </div>
            <div className={'last form-group'}>
              <label className={'nameLabel'} htmlFor={'inputLastName'}>Nazwisko</label>
              <input type='text' 
                    placeholder='Nazwisko' 
                    id='inputLastName' 
                    className='form-control' 
                    value={this.props.contact.lastName} />
            </div>
          </div>
          <label className={'formLabel'} htmlFor={'inputEmail'}>Email</label>
          <input type='email' 
                placeholder='Email' 
                id='inputEmail' 
                className='form-control' 
                value={this.props.contact.email} />
          <button type='submit' className='submit btn btn-info'>Dodaj kontakt</button>
        </form>        
      )
    },
});