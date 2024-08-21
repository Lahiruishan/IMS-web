import React from 'react';
import Header1 from 'components/Header1';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Header1 className="flex md:flex-col justify-between items-start gap-5 bg-blue-500" />
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Getting Quality Education Is Now More Easy</h2>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Register Here</button>
              <img src="public/images/image1.png" alt="Image" className="w-24 h-24 rounded-lg" />
              <img src="public/images/image2.png" alt="Image" className="w-24 h-24 rounded-lg" />

            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 rounded-full p-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 font-semibold">Total Classes</p>
                <p className="text-gray-500">25</p>
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 font-semibold">Expert Teachers</p>
                <p className="text-gray-500">5</p>
              </div>
              <div className="bg-gray-100 rounded-full p-4">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 font-semibold">Total Students</p>
                <p className="text-gray-500">200</p>
                <p className="text-gray-500">1060-197</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12">Explore Courses by Category</h2>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-gray-200 rounded-lg p-6 shadow-md">
            <div className="bg-gray-400 rounded-full p-4">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mt-4">BIOLOGICAL SCIENCE</h3>
            <p className="text-gray-500">100+ Students</p>
          </div>
          <div className="bg-green-200 rounded-lg p-6 shadow-md">
            <div className="bg-green-400 rounded-full p-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mt-4">PHYSICAL SCIENCE</h3>
            <p className="text-gray-500">100+ Students</p>
          </div>
          <div className="bg-yellow-200 rounded-lg p-6 shadow-md">
            <div className="bg-yellow-400 rounded-full p-4">
              <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mt-4">COMMERCE</h3>
            <p className="text-gray-500">100+ Students</p>
            <p className="text-gray-500">354-120</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12">Our Teachers</h2>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">SCIENCE</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-lg p-4 shadow-md">
                <h4 className="text-sm font-bold mb-2">Combined Maths</h4>
                <div className="flex items-center">
                  <div className="bg-gray-400 rounded-full p-4">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">100+ Students</p>
                    <p className="text-xs text-gray-400">4.9 (1200 reviews)</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-200 rounded-lg p-4 shadow-md">
                <h4 className="text-sm font-bold mb-2">Physics</h4>
                <div className="flex items-center">
                  <div className="bg-green-400 rounded-full p-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">100+ Students</p>
                    <p className="text-xs text-gray-400">4.8 (1100 reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">COMMERCE</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-200 rounded-lg p-4 shadow-md">
                <h4 className="text-sm font-bold mb-2">Business Studies</h4>
                <div className="flex items-center">
                  <div className="bg-yellow-400 rounded-full p-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">100+ Students</p>
                    <p className="text-xs text-gray-400">4.7 (1050 reviews)</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 shadow-md">
                <h4 className="text-sm font-bold mb-2">Economics</h4>
                <div className="flex items-center">
                  <div className="bg-gray-400 rounded-full p-4">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">100+ Students</p>
                    <p className="text-xs text-gray-400">4.9 (1300 reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">LANGUAGE</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-lg p-4 shadow-md">
                <h4 className="text-sm font-bold mb-2">English</h4>
                <div className="flex items-center">
                  <div className="bg-gray-400 rounded-full p-4">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">100+ Students</p>
                    <p className="text-xs text-gray-400">4.9 (1400 reviews)</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-200 rounded-lg p-4 shadow-md">
                <h4 className="text-sm font-bold mb-2">Sinhala</h4>
                <div className="flex items-center">
                  <div className="bg-green-400 rounded-full p-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 2.502a3 3 0 100-3.306m0 3.306a3 3 0 100 3.306m0-3.306a4 4 0 110-5.292M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">100+ Students</p>
                    <p className="text-xs text-gray-400">4.8 (1350 reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
