import TextHoverTrail from "@/components/TextHoverTrail";
import "./page.css";

const text =
  "The Nissan Skyline GT-R is a sports car based on the Nissan Skyline range. The first cars named Skyline GT-R were produced between 1969 and 1972 under the model code KPGC10, and enjoyed legendary success in local Japanese touring car racing. This model was followed by a brief production run of second-generation cars, under model code KPGC110, in 1973. After a 16-year hiatus, the GT-R name was revived in 1989 as the BNR32 (R32) Skyline GT-R. This model GT-R proceeded to win the Japanese JTCC Group A series championship four years in a row. The R32 GT-R also had success in the Australian Touring Car Championship helping the R32 Skyline GT-R to victory in 1990 and 1991, until a regulation change excluded the GT-R in 1992. The formidable technology and performance of the R32 GT-R prompted the Australian motoring publication Wheels to nickname the GT-R Godzilla in its July 1989 edition.";

export default function Home() {
  return (
    <main className="container">
      <TextHoverTrail className="inner">{text}</TextHoverTrail>
    </main>
  );
}
