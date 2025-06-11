import React from "react";

interface IProductPageProps {
  className?: string;
  params: { id: string };
}

export default function ProductPage({ className, params }: IProductPageProps) {
  const { id } = params;

  return <div className={className}>Product {id}</div>;
}
