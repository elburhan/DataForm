import React from 'react';
import './App.css';

function App() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        serviceNumber: '',
        accountNumber: '',
        command: '',
    });
    const { firstName, lastName, accountNumber, serviceNumber, command } = data;

    const updateInfo = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([
            [new Date().toLocaleDateString(), firstName, lastName, serviceNumber, accountNumber, command],
                ]),
            });
            await response.json();
            setData({
                firstName: '',
                lastName: '',
                serviceNumber: '',
                accountNumber: '',
                command: '',
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <div className="submissions">
                <div className="heading">
                    <img className="logo" src="https://dss.gov.ng/assets/images/logos/it_logo_white1.png" alt="Logo" />
                    <h2 className="header">
                        DSS OSINT Department
                    </h2>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="names">
                        <div className="first_name name field">
                            <label
                                className="input"
                                htmlFor="first_name">
                                First Name
                            </label>
                            <input
                                className="input"
                                id="first_name"
                                type="text"
                                placeholder="Jane"
                                value={firstName}
                                onChange={updateInfo}
                                name="firstName" />
                        </div>
                        <div className="second_name field name">
                            <label
                                className="input"
                                htmlFor="last_name">
                                Last Name
                            </label>
                            <input
                                className="input"
                                id="last_name"
                                type="text"
                                placeholder="Doe"
                                name="lastName"
                                onChange={updateInfo}
                                value={lastName} />
                        </div>
                    </div>
                    <div className="">
                        <div className="field">
                            <label
                                className="input"
                                htmlFor="service_number">
                                Service Number
                            </label>
                            <input
                                className="input"
                                id="service_number"
                                type="tel"
                                placeholder="00000000"
                                onChange={updateInfo}
                                value={serviceNumber}
                                name="service_Number" />
                        </div>
                    </div>
                    <div className="">
                        <div className="field">
                            <label
                                className="input"
                                htmlFor="accountnumber">
                                Account Number
                            </label>
                            <input
                                className="input"
                                id="accountNumber"
                                type="tel"
                                placeholder="000000000"
                                onChange={updateInfo}
                                value={accountNumber}
                                name="accountNumber" />
                        </div>
                    </div>
                    <div className="field">
                        <label
                            className="input"
                            htmlFor="command">
                            Command
                        </label>
                        <input
                            className="input"
                            id=""
                            type="text"
                            placeholder="Command"
                            name="command"
                            onChange={updateInfo}
                            value={command} />
                    </div>
                    <div className="button">
                        <button className="btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default App;
