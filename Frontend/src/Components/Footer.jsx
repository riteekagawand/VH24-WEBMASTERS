// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold">largerthan</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold">More</h3>
            <ul className="mt-4 space-y-2">
              <li>Home</li>
              <li>Team</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Gallery</li>
              <li>Links</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Subscribe to get latest updates</h3>
            <form className="mt-4 flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l bg-gray-800 text-white"/>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-r">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
  

export default Footer
