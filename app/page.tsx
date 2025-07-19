import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* ✅ Alibaba Images */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image
              src="https://cbu01.alicdn.com/img/ibank/O1CN016wStBp1XPZdLIJeNv_!!2834542916-0-cib.jpg"
              alt="Alibaba Image 1"
              width={500}
              height={500}
              unoptimized
            />
            <span style={{ marginTop: "8px", fontWeight: "bold", backgroundColor: 'rgb(233, 69, 96)', padding: '5px', borderRadius: '5px' }}>Image Show in Tizaraa</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image
              src="https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg"
              alt="Alibaba Image 2"
              width={500}
              height={500}
            />
            <span style={{ marginTop: "8px", fontWeight: "bold", backgroundColor: 'rgb(233, 69, 96)', padding: '5px', borderRadius: '5px' }}>Image Not Show in Tizaraa</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src="https://cbu01.alicdn.com/img/ibank/O1CN01nN6X4B1XPZdHolOR2_!!2834542916-0-cib.jpg"
              alt="Alibaba Image 2"
              width={500}
              height={500}
            />
            <span style={{ marginTop: "8px", fontWeight: "bold", backgroundColor: 'rgb(233, 69, 96)', padding: '5px', borderRadius: '5px' }}>Image Not Show in Tizaraa</span>
          </div>
        </div>
      </main>


    </div>
  );
}
