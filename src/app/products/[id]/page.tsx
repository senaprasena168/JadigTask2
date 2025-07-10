type Props = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Product Details</h1>
      <p className="mt-4 text-lg">You are viewing product with ID: {params.id}</p>
    </main>
  );
}