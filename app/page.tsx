// import Image from "next/image";

// export default function Home() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         padding: "2rem",
//         fontFamily: "sans-serif",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <main
//         style={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         {/* ✅ Alibaba Images */}
//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             marginTop: "40px",
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <Image
//               src="https://cbu01.alicdn.com/img/ibank/O1CN016wStBp1XPZdLIJeNv_!!2834542916-0-cib.jpg"
//               alt="Alibaba Image 1"
//               width={500}
//               height={500}
//               unoptimized
//             />
//             <span style={{ marginTop: "8px", fontWeight: "bold", backgroundColor: 'rgb(233, 69, 96)', padding: '5px', borderRadius: '5px' }}>Image Show in Tizaraa</span>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <Image
//               src="https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg"
//               alt="Alibaba Image 2"
//               width={500}
//               height={500}
//             />
//             <span style={{ marginTop: "8px", fontWeight: "bold", backgroundColor: 'rgb(233, 69, 96)', padding: '5px', borderRadius: '5px' }}>Image Not Show in Tizaraa</span>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <img
//               src="https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg"
//               alt="Alibaba Image 2"
//               width={500}
//               height={500}
//             />
//             <span style={{ marginTop: "8px", fontWeight: "bold", backgroundColor: 'rgb(233, 69, 96)', padding: '5px', borderRadius: '5px' }}>Image Not Show in Tizaraa</span>
//           </div>
//         </div>
//       </main>


//     </div>
//   );
// }



// pages/index.tsx or app/page.tsx

"use client";

import { JSX, useState } from "react";

interface ImageData {
  id: string;
  src: string;
  alt: string;
  label: string;
}

interface ImageLoadStatus {
  [key: string]: 'loaded' | 'error' | 'loading';
}

export default function Home(): JSX.Element {
  const [imageLoadStatus, setImageLoadStatus] = useState<ImageLoadStatus>({});
  const [useProxy, setUseProxy] = useState<boolean>(false);

  const handleImageLoad = (imageId: string): void => {
    setImageLoadStatus(prev => ({ ...prev, [imageId]: 'loaded' }));
  };

  const handleImageError = (imageId: string): void => {
    setImageLoadStatus(prev => ({ ...prev, [imageId]: 'error' }));
  };

  const handleImageLoadStart = (imageId: string): void => {
    setImageLoadStatus(prev => ({ ...prev, [imageId]: 'loading' }));
  };

  const images: ImageData[] = [
    {
      id: 'image1',
      src: "https://cbu01.alicdn.com/img/ibank/O1CN016wStBp1XPZdLIJeNv_!!2834542916-0-cib.jpg",
      alt: "Alibaba Product Image 1",
      label: "Product Image 1"
    },
    {
      id: 'image2', 
      src: "https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg",
      alt: "Alibaba Product Image 2",
      label: "Product Image 2"
    },
    {
      id: 'image3',
      src: "https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg",
      alt: "Alibaba Product Image 3", 
      label: "Product Image 3"
    }
  ];

  const getImageSrc = (originalSrc: string): string => {
    if (useProxy) {
      return `/api/image-proxy?url=${encodeURIComponent(originalSrc)}`;
    }
    return originalSrc;
  };

  const getStatusColor = (imageId: string): string => {
    const status = imageLoadStatus[imageId];
    if (status === 'loaded') return '#22c55e'; // green
    if (status === 'error') return '#ef4444'; // red
    if (status === 'loading') return '#f59e0b'; // yellow
    return '#9ca3af'; // gray (initial)
  };

  const getStatusText = (imageId: string): string => {
    const status = imageLoadStatus[imageId];
    if (status === 'loaded') return '✅ Loaded Successfully';
    if (status === 'error') return '❌ Failed to Load';
    if (status === 'loading') return '⏳ Loading...';
    return '⚪ Not Started';
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: "#f8fafc"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <header style={{
          textAlign: "center",
          marginBottom: "3rem"
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1e293b",
            marginBottom: "1rem"
          }}>
            Alibaba Image Loading Test
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#64748b",
            marginBottom: "2rem"
          }}>
            Testing different methods to load Alibaba CDN images
          </p>

          {/* Toggle for proxy mode */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
            <label style={{ fontSize: "1rem", fontWeight: "500" }}>
              <input
                type="checkbox"
                checked={useProxy}
                onChange={(e) => {
                  setUseProxy(e.target.checked);
                  setImageLoadStatus({}); // Reset status when switching
                }}
                style={{ marginRight: "0.5rem" }}
              />
              Use Image Proxy API
            </label>
            <span style={{ 
              fontSize: "0.875rem", 
              color: "#64748b",
              fontStyle: "italic"
            }}>
              {useProxy ? "Loading via proxy server" : "Loading directly from Alibaba CDN"}
            </span>
          </div>
        </header>

        <main>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem"
          }}>
            {images.map((image) => (
              <div key={`${image.id}-${useProxy}`} style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                textAlign: "center"
              }}>
                <div style={{
                  position: "relative",
                  marginBottom: "1rem",
                  backgroundColor: "#f1f5f9",
                  borderRadius: "8px",
                  overflow: "hidden",
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img
                    key={`${image.id}-${useProxy}`}
                    src={getImageSrc(image.src)}
                    alt={image.alt}
                    onLoadStart={() => handleImageLoadStart(image.id)}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: imageLoadStatus[image.id] === 'error' ? 'none' : 'block'
                    }}
                  />
                  {imageLoadStatus[image.id] === 'error' && (
                    <div style={{
                      padding: "2rem",
                      color: "#64748b",
                      textAlign: "center"
                    }}>
                      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🖼️</div>
                      <div>Image failed to load</div>
                    </div>
                  )}
                </div>
                
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  marginBottom: "0.5rem"
                }}>
                  {image.label}
                </h3>
                
                <div style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "white",
                  backgroundColor: getStatusColor(image.id),
                  marginBottom: "0.5rem"
                }}>
                  {getStatusText(image.id)}
                </div>

                <div style={{
                  fontSize: "0.75rem",
                  color: "#64748b",
                  fontFamily: "monospace",
                  wordBreak: "break-all",
                  padding: "0.5rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "4px"
                }}>
                  {useProxy ? 'Via Proxy' : 'Direct CDN'}
                </div>
              </div>
            ))}
          </div>

          {/* Debug Information */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          }}>
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "1rem"
            }}>
              Debug Information
            </h2>
            
            <div style={{
              backgroundColor: "#f8fafc",
              padding: "1rem",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              color: "#475569",
              marginBottom: "1rem"
            }}>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Current Mode:</strong> {useProxy ? 'Proxy API' : 'Direct CDN'}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Image Load Status:</strong>
              </div>
              <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                {JSON.stringify(imageLoadStatus, null, 2)}
              </pre>
            </div>

            <div style={{
              padding: "1rem",
              backgroundColor: "#dbeafe",
              borderRadius: "8px",
              fontSize: "0.875rem",
              color: "#1e40af"
            }}>
              <strong>🔧 Troubleshooting Steps:</strong>
              <ol style={{ margin: "0.5rem 0", paddingLeft: "1.5rem" }}>
                <li>First, try the direct CDN method (proxy disabled)</li>
                <li>If images don't load, enable the "Use Image Proxy API" option</li>
                <li>Make sure you've created the API route: <code>pages/api/image-proxy.ts</code></li>
                <li>Check browser console for CORS or network errors</li>
                <li>Verify the Next.js config includes proper headers</li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}