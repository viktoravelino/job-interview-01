import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API = 'http://localhost:4000/api';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [textField, setTextField] = useState('');
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API}/applicants`);
        setApplicants((prev) => [...response.data]);
      } catch (error) {
        console.log(error);
        alert('Error');
      }
    })();
  }, []);

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (fullName === '' || email === '' || textField === '') return;
    try {
      await axios.post(`${API}/applicants`, {
        fullName,
        email,
        textField,
      });
      alert('Entry saved');
    } catch (error) {
      console.log(error);
      alert('Error');
    }
  }

  async function handleUpdateApplicants() {
    try {
      const response = await axios.get(`${API}/applicants`);
      setApplicants((prev) => [...response.data]);
    } catch (error) {
      console.log(error);
      alert('Error');
    }
  }

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label htmlFor="fullName">Full Name: </label>
            <input
              type="name"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Why Should us hire you: </label>
            <textarea
              name="textField"
              value={textField}
              onChange={(e) => setTextField(e.target.value)}
            />
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="cards-container">
        {applicants.map((applicant, i) => (
          <div key={i} className="card">
            <p>Name: {applicant.fullName}</p>
            <p>Email: {applicant.email}</p>
            <p>FieldText: {applicant.textField}</p>
          </div>
        ))}
        <button onClick={handleUpdateApplicants} style={{ marginTop: 20 }}>
          UPDATE
        </button>
      </div>
    </div>
  );
}

export default App;
