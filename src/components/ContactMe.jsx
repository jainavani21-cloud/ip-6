import React from 'react';

const ContactMe = () => {
  return (
    <section className="bg-black text-black p-8">
      <h2 className="text-4xl font-bold mb-4"><span className='text-green-400'>Contact Me </span></h2>
      <form className="text-lg">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea id="message" className="w-full p-2 rounded" rows="4"></textarea>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
