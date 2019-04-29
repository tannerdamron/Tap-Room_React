import React from 'react';
import PropTypes from 'prop-types';
import EditKegForm from './EditKegForm';

class Keg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pints: props.pintsRemaining,
      showKegEditForm: false
    };
  }

  sellPint() {
    this.setState({ pints: this.state.pints-1});
    if (this.state.pints <= 0) {
      alert('Keg empty');
      this.setState({ pints: 0});
    }
  }

  sellGrowler() {
    this.setState({ pints: this.state.pints-2 });
    if (this.state.pints <= 0) {
      alert('Keg empty');
      this.setState({ pints: 0 });
    }
  }

  tapkeg() {
    this.setState({ pints: 124 });
  }

  showKegEditForm() {
    this.setState({ showKegEditForm: true });
  }

  render() {
    let editKegForm = null;
    if (this.state.showKegEditForm === true) {
      editKegForm = <EditKegForm
        kegId = {this.props.kegId}
        onEditKegCreation={this.props.onEditKegCreation}
      />;
    }
    return(
      <div>
        <style jsx>{`
          .keg {
            color: goldenrod;
            text-align: center;
            font-family: sans-serif;
            font-size: 20px;
            text-shadow: 1px 1px black;
            background-color: rgba(0,0,0,.7);
            width: 300px;
            margin-left: 25%;
            margin-bottom: 10px;
            border-radius: 5%;
            z-index: 2;
            padding: .1px;
          }
          button {
            background-image: url('../assets/images/pint.png');
          }
        `}</style>
        <div className="keg">
          <div>
            <p>Brewer: {this.props.brewer}</p>
            <p>Price: {this.props.price}</p>
            <p>ABV: {this.props.abv}</p>
            <p>Pints Remaining: {this.state.pints}</p>
            <p>Style of beer: {this.props.style}</p>
            <button onClick={this.sellPint.bind(this)}>Sell Pint</button>
            <button onClick={this.sellGrowler.bind(this)}>Sell Growler</button>
            <button onClick={this.showKegEditForm.bind(this)}>Edit Keg</button>
            <button onClick={this.tapkeg.bind(this)}>Tap this keg</button>
            {editKegForm}
          </div>
        </div>
      </div>
    );
  }
}

Keg.propTypes = {
  brewer: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
  kegId: PropTypes.number.isRequired,
  onEditKegCreation: PropTypes.func
};

export default Keg;