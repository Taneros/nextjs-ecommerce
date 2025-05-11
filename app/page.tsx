import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className=" mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                productList={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                productList={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/019591b13a1a724b90092c16d9b1c05a.avif",
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
