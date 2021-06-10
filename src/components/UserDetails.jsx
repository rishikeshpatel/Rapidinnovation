import React, { useState } from 'react';

function UserDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showUserDetails, setShowUserDetails] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowUserDetails(true);
  };
  return (
    <div className='user-details-container'>
      <h1>User Details</h1>
      <div className='form-container'>
        <form onSubmit={(data) => handleFormSubmit(data)} className='user-details-from'>
          <input
            className='form-input'
            required
            type='text'
            id='fname'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className='form-input'
            required
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className='form-input'
            required
            type='number'
            id='phone'
            name='phone'
            placeholder='Phone'
            value={phone}
            style={{ backgroundColor: '#f1f1f1' }}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className='form-input'
            required
            type='textarea'
            id='address'
            name='address'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <br />
          <input className='submit-button' type='submit' value='Submit' />
        </form>
      </div>
      {showUserDetails && (
        <div className='user-details-card'>
          <div className='book-title '>{name}</div>
          <div className='book-subtitle'>Address: {address}</div>
          <div className='book-subtitle'>Email: {email}</div>
          <div className='user-phone'>{phone}</div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
