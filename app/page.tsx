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



import { useState } from "react";

type ImageStatus = "loaded" | "error" | undefined;

type ImageData = {
  id: string;
  src: string;
  alt: string;
  label: string;
};

export default function Home() {
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, ImageStatus>>({});

  const handleImageLoad = (imageId: string) => {
    setImageLoadStatus((prev) => ({ ...prev, [imageId]: "loaded" }));
  };

  const handleImageError = (imageId: string) => {
    setImageLoadStatus((prev) => ({ ...prev, [imageId]: "error" }));
  };

  const images: ImageData[] = [
    {
      id: "image1",
      src: "https://cbu01.alicdn.com/img/ibank/O1CN016wStBp1XPZdLIJeNv_!!2834542916-0-cib.jpg",
      alt: "Alibaba Product Image 1",
      label: "Product Image 1",
    },
    {
      id: "image2",
      src: "https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg",
      alt: "Alibaba Product Image 2",
      label: "Product Image 2",
    },
    {
      id: "image3",
      src: "https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg",
      alt: "Alibaba Product Image 3",
      label: "Product Image 3",
    },
  ];

  const getStatusColor = (imageId: string): string => {
    const status = imageLoadStatus[imageId];
    if (status === "loaded") return "rgb(34, 197, 94)";
    if (status === "error") return "rgb(239, 68, 68)";
    return "rgb(156, 163, 175)";
  };

  const getStatusText = (imageId: string): string => {
    const status = imageLoadStatus[imageId];
    if (status === "loaded") return "Image Loaded Successfully";
    if (status === "error") return "Image Failed to Load";
    return "Loading...";
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: "#f8fafc"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1e293b",
            marginBottom: "1rem"
          }}>
            Image Loading Test
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b" }}>
            Testing Alibaba CDN images with error handling
          </p>
        </header>

        <main>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem"
          }}>
            {images.map((image) => (
              <div key={image.id} style={{
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
                  overflow: "hidden"
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
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
                  backgroundColor: getStatusColor(image.id)
                }}>
                  {getStatusText(image.id)}
                </div>
              </div>
            ))}
          </div>

          {/* Debug Info */}
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
              color: "#475569"
            }}>
              <strong>Image Load Status:</strong>
              <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                {JSON.stringify(imageLoadStatus, null, 2)}
              </pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
