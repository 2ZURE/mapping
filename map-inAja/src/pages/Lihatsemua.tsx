import React from "react";

interface Product {
  image: string;
  name: string;
  address: string;
  description: string;
  kategori: string;
}

const products: Product[] = [
    {
      image: "https://assets.promediateknologi.id/crop/0x105:1080x789/750x500/webp/photo/p1/726/2023/08/29/Cafe-Batavia-Kota-Tua-Jakarta-4025484022.jpg",
      name: "Cafe D'lapan",
      address: "Karang Anyar 1",
      description: "Cafe dengan suasana nyaman dan menyenangkan hati",
      kategori: "Populer"
    },
    {
      image: "https://t4.ftcdn.net/jpg/04/73/38/69/360_F_473386975_Q04Y2PRal4QBHySQXXInOR59c4KkGP05.jpg",
      name: "Harvard University",
      address: "Massachusetts Hall, Cambridge, MA 02138, Amerika Serikat",
      description: "Universitas Harvard adalah universitas swasta di Cambridge, Massachusetts, Amerika Serikat dan anggota Ivy League. Universitas...",
      kategori: "Rekomendasi"
    },
    {
      image: "https://klikpajak.id/wp-content/uploads/2022/09/usaha-kecil-dan-menengah.jpg",
      name: "Cinnamon ",
      address: "Panglima Batur",
      description: "Aesthetic Place",
      kategori: "Populer"
    },
    {
      image: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2022/10/taman-di-jakarta.webp",
      name: "Taman Merdeka",
      address: "Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      kategori: "Populer"
    },
    {
      image: "https://www.smktelkom-bjb.sch.id/web/assets/img/23042022044915FotoProfilUpdate.jpg",
      name: "SMK Telkom Banjarbaru",
      address: "Jl. Pangeran Suriansyah",
      description: "SMK Telkom Sandhy Putra Banjarbaru merupakan Sekolah Menengah Kejuruan pertama dan satu-satunya di Kalimantan...",
      kategori: "Rekomendasi"
    },
    {
      image: "https://rocketchicken.co.id/storage/posts/July2019/7IEVkUFsjU3TXQsEf8tK.jpg",
      name: "Rocket Chicken",
      address: "Indonesia",
      description: "Rocket Chicken adalah suatu jaringan rumah makan siap saji asal Indonesia dengan menu utama ayam goreng. Rocket...",
      kategori: "Rekomendasi"
    },
];

const ProductCard: React.FC<Product> = ({ image, name, address, description }) => (
  <div className="border rounded-md shadow-sm p-4 flex flex-col">
    <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{address}</p>
    <p className="text-sm mt-2">{description}</p>
  </div>
);

const ProductPage: React.FC = () => {
  const populerProducts = products.filter((product) => product.kategori === "Populer");
  const rekomendasiProducts = products.filter((product) => product.kategori === "Rekomendasi");

  return (
    <div className="container mx-auto p-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">Populer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {populerProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Rekomendasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto">
          {rekomendasiProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
