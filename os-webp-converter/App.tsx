
import React, { useState, useCallback, useRef } from 'react';
import { ImageFormat } from './types';
import { UploadIcon, DownloadIcon, Spinner } from './components/icons';

// Helper Components (defined outside the main component to avoid re-creation on re-renders)

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
}
const NeumorphicCard: React.FC<NeumorphicCardProps> = ({ children, className }) => (
  <div className={`bg-gray-200 rounded-3xl p-6 sm:p-8 shadow-[9px_9px_18px_#aeaeae,_-9px_-9px_18px_#ffffff] ${className}`}>
    {children}
  </div>
);

interface NeumorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full flex items-center justify-center gap-3 text-gray-700 font-semibold px-6 py-3 rounded-xl bg-gray-200 shadow-[5px_5px_10px_#bebebe,_-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-600 mb-6 text-center">{children}</h2>
);


// Main App Component
export default function App() {
  // Converter State
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [inputPreviewUrl, setInputPreviewUrl] = useState<string | null>(null);
  const [outputImageUrl, setOutputImageUrl] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [outputFormat, setOutputFormat] = useState<ImageFormat>('png');
  const [upscaleFactor, setUpscaleFactor] = useState<number>(1);
  const [converterError, setConverterError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'image/webp') {
        setConverterError('Please upload a WEBP image.');
        return;
      }
      setConverterError(null);
      setInputFile(file);
      setOutputImageUrl(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConvertClick = useCallback(() => {
    if (!inputFile || !inputPreviewUrl) {
      setConverterError('Please select a file first.');
      return;
    }
    setIsConverting(true);
    setConverterError(null);

    const image = new Image();
    image.src = inputPreviewUrl;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth * upscaleFactor;
      canvas.height = image.naturalHeight * upscaleFactor;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL(`image/${outputFormat}`, 0.95);
        setOutputImageUrl(dataUrl);
      } else {
        setConverterError('Could not process the image.');
      }
      setIsConverting(false);
    };
    image.onerror = () => {
        setConverterError('Could not load the image for conversion.');
        setIsConverting(false);
    }
  }, [inputFile, inputPreviewUrl, outputFormat, upscaleFactor]);
  
  const ControlWrapper: React.FC<{ children: React.ReactNode, label: string }> = ({ children, label }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-500">{label}</label>
      {children}
    </div>
  );
  
  const NeumorphicSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
    <select {...props} className="w-full bg-gray-200 text-gray-700 text-base py-3 px-4 rounded-xl shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] focus:outline-none appearance-none" />
  );

  const ImageDisplay: React.FC<{ src: string | null, alt: string, label: string}> = ({ src, alt, label }) => (
      <div className="w-full flex flex-col items-center">
        <p className="text-gray-500 font-medium mb-2">{label}</p>
        <div className="w-full aspect-video bg-gray-200 rounded-xl shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center p-2">
            {src ? (
                <img src={src} alt={alt} className="max-w-full max-h-full object-contain rounded-lg" />
            ) : (
                <p className="text-gray-500 text-sm">Image will appear here</p>
            )}
        </div>
      </div>
  );


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-700">Os-WEBP Converter</h1>
      </header>

      <main className="w-full max-w-2xl mx-auto">
        {/* Image Converter */}
        <NeumorphicCard>
          <SectionTitle>Image Converter & Upscaler</SectionTitle>
          
          <input type="file" accept="image/webp" onChange={handleFileChange} ref={fileInputRef} className="hidden" />
          <NeumorphicButton onClick={() => fileInputRef.current?.click()}>
            <UploadIcon className="w-6 h-6"/>
            {inputFile ? inputFile.name : 'Select WEBP Image'}
          </NeumorphicButton>

          {converterError && <p className="text-red-500 text-center mt-4">{converterError}</p>}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <ImageDisplay src={inputPreviewUrl} alt="Original WEBP preview" label="Original" />
            <ImageDisplay src={outputImageUrl} alt="Converted image" label="Converted" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
             <ControlWrapper label="Output Format">
                <NeumorphicSelect value={outputFormat} onChange={(e) => setOutputFormat(e.target.value as ImageFormat)}>
                  <option value="png">PNG</option>
                  <option value="jpeg">JPG</option>
                </NeumorphicSelect>
              </ControlWrapper>
              <ControlWrapper label="Upscale">
                <NeumorphicSelect value={upscaleFactor} onChange={(e) => setUpscaleFactor(Number(e.target.value))}>
                  <option value="1">1x (Original Size)</option>
                  <option value="1.5">1.5x</option>
                  <option value="2">2x</option>
                </NeumorphicSelect>
              </ControlWrapper>
          </div>

          <NeumorphicButton onClick={handleConvertClick} disabled={!inputFile || isConverting}>
            {isConverting ? <Spinner className="w-6 h-6"/> : 'Convert Image'}
          </NeumorphicButton>
          
          {outputImageUrl && (
            <a 
              href={outputImageUrl} 
              download={`converted_image.${outputFormat === 'jpeg' ? 'jpg' : 'png'}`}
              className="w-full mt-4 flex items-center justify-center gap-3 text-gray-700 font-semibold px-6 py-3 rounded-xl bg-gray-200 shadow-[5px_5px_10px_#bebebe,_-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all duration-150 ease-in-out"
            >
              <DownloadIcon className="w-6 h-6"/>
              Download Converted Image
            </a>
          )}
        </NeumorphicCard>
      </main>
    </div>
  );
}