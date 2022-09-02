import { Card } from "./components/Card";
import { PriceCard } from "./components/PriceCard";
import { Section } from "./components/layout/Section";
import { Flex } from "./components/layout/Flex";

const data = ["стрижки", "борода", "прически"];
const priceData = [
  { name: "стрижки", price: 38 },
  { name: "Борода", price: 34 },
  { name: "бритье", price: 36 },
  { name: "лезвие бтирвы", price: 89 },
];

export default function App() {
  return (
    <main>
      <Section header="Наши услуги">
        <Flex justify="center" gap="10">
          {data.map((text) => {
            return <Card text={text} key={text} />;
          })}
        </Flex>
      </Section>
      <Section className="price" header="Наши цены">
        <Flex wrap justify="center" gap="10">
          {priceData.map(({ name, price }) => (
            <PriceCard name={name} price={price} key={name} />
          ))}
        </Flex>
      </Section>
    </main>
  );
}
