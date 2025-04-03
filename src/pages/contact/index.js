import React from 'react';
import { useRouter } from 'next/router';

const ContactPage = () => {
    
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/thank-you');
      };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default ContactPage;