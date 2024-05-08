
'use client'
import React from 'react';


 
const ShareButtonWhatsApp = ({ url, text, style }) => {
    const shareOnWhatsApp = () => {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
      window.open(whatsappUrl, '_blank', 'width=600,height=400');
    };

const shareBtn =(
    <img src="data:image/png;base64,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"></img>
) 

  return (
    <a href={url} onClick={shareOnWhatsApp} className={`text-gray-500 hover:text-gray-700 focus:outline-none ${style}`}>
    {shareBtn}
  </a>
  );
};

export default ShareButtonWhatsApp;
