import React from 'react';
import { MyChip } from './Buttons/Chip-btn';
import { SectionTopProps } from '@/src/types/types';

export function SectionTop({
  mainText = '',
  subText = '',
  chipText,
  children,
}: SectionTopProps) {
  const renderMultilineText = (text: string | React.ReactNode[]) => {
    if (Array.isArray(text)) {
      return text.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < text.length - 1 && <br />}
        </React.Fragment>
      ));
    }

    return text.split('\n').map((line, i) => (
      <React.Fragment key={`line-${i}`}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col gap-6">
      {chipText && (
        <MyChip className="bg-transparent text-[#7575FE] border-1 border-[#7575FE]">
          {chipText}
        </MyChip>
      )}

      {/* Main Text */}
      <h1 className="text-3xl font-bold whitespace-pre-line">
        {renderMultilineText(mainText)}
      </h1>

      {/* Children or SubText */}
      {children || (
        <p className="text-[#555555] dark:text-gray-400 whitespace-pre-line">
          {renderMultilineText(subText)}
        </p>
      )}
    </div>
  );
}
