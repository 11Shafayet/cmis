'use client';

import { noticeList } from '@data';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Notice = () => {
  const [searchedText, setSearchedText] = useState('');
  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Notices`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />

          <div className="flex justify-end items-center h-12">
            <input
              type="text"
              placeholder="Search..."
              value={searchedText}
              onChange={(e) => setSearchedText(e.target.value)}
              className="h-full bg-gray-100 px-4 rounded-l-md border"
            />
            <button className="bg-primary text-white rounded-r-md !h-full w-12 inline-flex justify-center items-center">
              <FaSearch />
            </button>
          </div>

          <div className="my-6">
            {noticeList.map((notice, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 justify-between items-center py-6 border-b border-dashed border-primary"
                >
                  <div>
                    <p className="text-sm opacity-50">{notice?.date}</p>
                    <Link
                      href={notice?.link ? notice.link : ''}
                      className="text-xl font-medium text-ellipsis overflow-x-hidden hover:text-primary duration-300"
                    >
                      {notice?.title}
                    </Link>
                  </div>
                  <Link
                    href={notice?.link ? notice.link : ''}
                    className="border border-primary py-2 px-5 text-primary hover:bg-primary hover:text-white duration-500 rounded-md font-medium"
                  >
                    Read More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notice;
