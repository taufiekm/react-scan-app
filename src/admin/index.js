import React from 'react';
import QrReader from 'react-qr-reader';
// Styles
import '../styles/main.css';

const Admin = () => {
	let [data, setData] = React.useState([]);
	const [isScan, setIsScan] = React.useState(false);

	const handleScan = user => {
    if (user) {
			// REMOVE SYMBOLIC
			let newData = user.replace(/""/g, "");
			// PARSE JSON TO OBJECT
			let parseData = JSON.parse(newData);
			// SAVE DATA TO STATE
			setData([...data, parseData]);
			setIsScan(false);
    }
  }
  const handleError = err => {
    console.error(err)
	}
	
	const ScanQRCode = () => {
		return (
			<div className="QRCode">
				<QrReader
					delay={300}
					onError={handleError}
					onScan={handleScan}
					style={{ width: '320px' }}
				/>
			</div>
		)
	}

	const updateData = data.reverse();
	return (
		<div className="Body">
			{isScan ? (
				<ScanQRCode />
			) : (
				<>
					<div className="ListHeader">
						<p>Daftar User</p>
						<button className="ButtonStyle" onClick={() => setIsScan(true)}>
							Scan QRCode
						</button>
					</div>

					<div className="List">
						{updateData.map((item, index) => (
							<li className="UserList" key={index}>
								{item.fullName}, {item.address}, {item.noKTP}, {item.phoneNumber}
							</li>
						))}
					</div>
				</>
			)}
		</div>
	)
};

export default Admin;

