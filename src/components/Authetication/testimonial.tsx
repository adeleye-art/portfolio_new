import React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const PortofoiloTestimonial = () => {
  return (
    <div className="min-h-screen  p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-gradient-to-b from-gray-300 to-black rounded-3xl p-10 relative overflow-hidden">
        {/* Top Corner Pattern */}
        <div className="absolute top-0 right-0">
          <div className="w-16 h-16 bg-gradient-to-b from-white to-gray-400 rounded-bl-3xl" />
        </div>

        {/* Background Star Pattern */}
        <div className="absolute right-0 top-1/2 opacity-10">
          <div className="w-48 h-48 border-8 border-green-600 rotate-45" />
          <div className="w-48 h-48 border-8 border-emerald-200 rotate-[30deg] -mt-48" />
          <div className="w-48 h-48 border-8 border-emerald-200 rotate-[60deg] -mt-48" />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-3xl font-semibold mb-6">
            What&apos;s our <br />Jobseekers Said.
          </h1>

          {/* Testimonial */}
          <div className="text-white opacity-90 mb-4">
            &quot;Search and find your dream job is now easier than ever.
            Just browse a job and apply if you need to.&quot;
          </div>

          {/* Author */}
          <div className="text-white">
            <div className="font-medium">Mas Parjono</div>
            <div className="text-sm opacity-90">UI Designer at Google</div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 mb-8">
          <button className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 bg-black rounded-lg hover:bg-opacity-90 transition-all">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Bottom Card */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h2 className="font-semibold text-lg mb-2">
                Get your right job and right place apply now
              </h2>
              <p className="text-gray-600 text-sm">
                Be among the first founders to experience the easiest way to start run a business.
              </p>
            </div>
            <div className="bg-black bg-opacity-5 p-2 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </div>

          {/* Avatar Stack inside white card */}
          <div className="flex -space-x-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortofoiloTestimonial;