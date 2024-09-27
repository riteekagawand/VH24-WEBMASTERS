// eslint-disable-next-line no-unused-vars
import React from 'react'

const DonationsSection = () => (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">How we spend your donations and where it goes</h2>
        <p className="mt-4">We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
        <div className="mt-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <ul className="space-y-2">
              <li>40% child care home</li>
              <li>30% education program</li>
              <li>15% feeding the poor</li>
              <li>15% helping people</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://placehold.co/400x400" alt="Pie chart showing donation distribution" className="mx-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
  
export default DonationsSection
