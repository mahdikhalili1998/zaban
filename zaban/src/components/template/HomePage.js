import Image from "next/image";

function HomePage() {
  return (
    <div>
      {" "}
      <Image
        src={"/Group 10.png"}
        width={300}
        height={300}
        alt=" logo"
        priority
      />
    </div>
  );
}

export default HomePage;
