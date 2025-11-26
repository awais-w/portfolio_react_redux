import React from 'react';
import { User, MapPin, Mail, FileText } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl">
      <div className="flex flex-col items-center gap-4 mb-6 text-center">
        <div className="w-16 h-16 bg-blue-100/50 rounded-full flex items-center justify-center text-blue-600">
          <User className="w-8 h-8" />
        </div>
        <div>
          <span className="block font-bold text-slate-900 text-xl">Awais Waheed</span>
          <span className="text-slate-500 text-sm">Full Stack Designer</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-slate-600">
          <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
          <span>London</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600 w-full">
          <Mail className="w-5 h-5 text-blue-500 shrink-0" />
          <a href="mailto:awais@alwaysawais.com" className="hover:text-blue-600 transition-colors truncate">
            awais@alwaysawais.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <FileText className="w-5 h-5 text-blue-500" />
          <a href="/CV_AWAIS.pdf" target="_blank" className="hover:text-blue-600 transition-colors">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
