import coffees from "@/data/coffees.json";
import { notFound } from "next/navigation";
import CoffeeDetailClient from "@/components/CoffeeDetailClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const coffee = coffees.find((item) => item.id === id);

  if (!coffee) {
    return { title: "Kahve Bulunamadı | ROASTERY." };
  }

  return {
    title: `${coffee.name} | ROASTERY.`,
    description: coffee.description,
  };
}

export async function generateStaticParams() {
  return coffees.map((item) => ({
    id: item.id,
  }));
}

export default async function CoffeeDetail({ params }) {
  const { id } = await params;
  const coffee = coffees.find((item) => item.id === id);

  if (!coffee) {
    notFound();
  }

  return <CoffeeDetailClient coffee={coffee} />;
}