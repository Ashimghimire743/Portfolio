import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c3231sf', 'template_4n32wzx', form.current, 'NsdzT3HnafyTytCKh')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-200">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8 pt-2">Contact Me</h1>
      <div className="max-w-lg w-full p-8 bg-indigo-300 shadow-md rounded-lg">
        <h2 className=" pt-2 text-2xl font-semibold text-white mb-6 ">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="font-semibold text-white">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="font-semibold text-white">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="font-semibold text-white">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
