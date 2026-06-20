import React from 'react';
import { Helmet } from 'react-helmet-async';
const Archive = () => {
  const pastEditions = [
  { 
    volume: "Volume 2 | 2024", 
    description: "Our 2024 annual review covering all major technical achievements and student milestones.", 
    cover: "/newsletter-previews/cover(2024).png", 
    pdf: "https://drive.google.com/file/d/1VBhI2sp5J2RBFuTFMbVI45RSs9IJh_fy/preview" 
  },
  { 
    volume: "Volume 1 | 2023", 
    description: "The foundational issue marking the start of VJ Data Questers and our core mission.", 
    cover: "/newsletter-previews/cover(2023).png",
    pdf: "https://drive.google.com/file/d/1VBhI2sp5J2RBFuTFMbVI45RSs9IJh_fy/preview" 
  },
];
  return (
    <>
    <Helmet>
  <title>Archive | VJ Data Questers</title>
  <meta name="description" content="Browse our past issues of VJ Data Questers insights and technical reviews." />
</Helmet>
    <div className="bg-slate-950 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-12">Newsletter Archive</h1>

        <div className="grid gap-8">
          {pastEditions.map((edition, index) => (
            <div key={index} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cover Preview */}
                <div className="aspect-[3/4] bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                  <img src={edition.cover} alt="Cover" className="w-full h-full object-cover" />
                </div>
                
                {/* Details */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">{edition.volume}</h2>
                  <p className="text-slate-400 mb-8 leading-relaxed">{edition.description}</p>
                  <a 
  href={edition.pdf} 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full py-4 bg-white text-slate-950 font-bold rounded-lg text-center hover:bg-slate-200 transition-all block"
>
  Read Full PDF
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Archive;