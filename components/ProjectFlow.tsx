
import React from 'react';
import { FolderOpen } from 'lucide-react';
import { TYPOGRAPHY, COLORS } from '../styles';

const ProjectFlow: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h2 className={TYPOGRAPHY.h2}>Project Flow</h2>
        <p className={`${TYPOGRAPHY.body} ${COLORS.gray500} max-w-xl`}>
          A collection of case studies, design processes, and architectural workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Placeholder for future content */}
        <div className={`border border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center text-center ${COLORS.gray400} hover:border-coral hover:text-coral transition-colors cursor-pointer group`}>
          <FolderOpen size={48} className="mb-4 opacity-50 group-hover:scale-110 transition-transform" />
          <h3 className={TYPOGRAPHY.h3 + " mb-2"}>Case Study 01</h3>
          <p className="text-sm opacity-70">Coming Soon</p>
        </div>

        <div className={`border border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center text-center ${COLORS.gray400} hover:border-coral hover:text-coral transition-colors cursor-pointer group`}>
          <FolderOpen size={48} className="mb-4 opacity-50 group-hover:scale-110 transition-transform" />
          <h3 className={TYPOGRAPHY.h3 + " mb-2"}>Case Study 02</h3>
          <p className="text-sm opacity-70">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectFlow;
