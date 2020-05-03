import React from 'react';
import '../styles/main.css';
import QRCode from 'react-qr-code';

const Home = () => {

  // STATE
  const [state, setState] = React.useState({
    fullName: '',
    address: '',
    noKTP: '',
    phoneNumber: '',
    error: 0,
    errorMessage: 'error',
    showQRCode: false,
    data: null,
  });

  const handleSave = () => {
    if (state.fullName) {
      if (state.address) {
        if (state.noKTP) {
          if (state.phoneNumber) {
            let data = {
              fullName: state.fullName,
              address: state.address,
              noKTP: state.noKTP,
              phoneNumber: state.phoneNumber,
            }
            let parseData = JSON.stringify(data);

            setState({
              ...state, 
              showQRCode: true,
              data: parseData,
              fullName: '',
              address: '',
              noKTP: '',
              phoneNumber: '',
            })
          } else {
            setState({...state, error: 4, errorMessage: 'Harap masukan nomor handphone', showQRCode: false});
          }
        } else {
          setState({...state, error: 3, errorMessage: 'Harap masukan nomor identitas', showQRCode: false});
        }
      } else {
        setState({...state, error: 2, errorMessage: 'Harap masukan alamat anda!', showQRCode: false});
      }
    } else {
      setState({...state, error: 1, errorMessage: 'Harap masukan nama anda!', showQRCode: false});
    }
  }

  return (
    <div className="Body">
      <input 
        type="text" 
        name="fullName" 
        id="fullName" 
        placeholder="Nama Lengkap" 
        className="InputStyle" 
        value={state.fullName} 
        onChange={({target}) => setState({...state, error: 0, fullName: target.value})} 
      />
      {state.error === 1 && (
        <p className="ErrorMessage">{state.errorMessage}</p>
      )}

      <input 
        type="text" 
        name="address" 
        id="address" 
        placeholder="Alamat KTP" 
        className="InputStyle" 
        value={state.address} 
        onChange={({target}) => setState({...state, error: 0, address: target.value})} 
      />
      {state.error === 2 && (
        <p className="ErrorMessage">{state.errorMessage}</p>
      )}

      <input 
        type="number" 
        name="noKTP" 
        id="noKTP" 
        placeholder="No Identitas" 
        className="InputStyle" 
        value={state.noKTP} 
        onChange={({target}) => setState({...state, error: 0, noKTP: target.value})} 
      />
      {state.error === 3 && (
        <p className="ErrorMessage">{state.errorMessage}</p>
      )}

      <input 
        type="number" 
        name="phoneNumber" 
        id="phoneNumber" 
        placeholder="Nomor Handphone" 
        className="InputStyle" 
        value={state.phoneNumber} 
        onChange={({target}) => setState({...state, error: 0, phoneNumber: target.value})} 
      />
      {state.error === 4 && (
        <p className="ErrorMessage">{state.errorMessage}</p>
      )}

      <div className="ButtonView">
        <button onClick={handleSave} className="ButtonStyle">
          Simpan
        </button>
      </div>

      {state.showQRCode && (
        <>
        <div className="QRCode">
          <QRCode value={`${state.data}`} />
        </div>
        <p className="QRDesc">Screenshot this QRCode</p>
        </>
      )}
    </div>
  );
}

export default Home;
