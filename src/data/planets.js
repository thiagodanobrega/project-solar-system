/* eslint-disable max-len */
import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const Planets = [
  {
    name: 'Mercúrio',
    image: MercurioImg,
    info: 'Mercúrio é o planeta mais próximo do Sol, mas talvez surpreendentemente, não tem as temperaturas mais altas. Isto é o segundo planeta mais denso do Sistema Solar, mas também o menor planeta. A estrutura de Mercúrio o torna o mais planeta semelhante à Terra.',
  },
  {
    name: 'Vênus',
    image: VenusImg,
    info: 'Vênus é o segundo planeta a partir do Sol é o sexto maior. Junto com Mercúrio, eles são os únicos planetas sem satélite, embora Mercúrio esteja mais próximo de o sol, Vênus é o planeta mais quente.',
  },
  {
    name: 'Terra',
    image: TerraImg,
    info: 'A Terra é o terceiro planeta a partir do Sol e o quinto maior planeta do Sistema Solar com a maior densidade. Isto é atualmente o único local conhecido onde a vida está presente.',
  },
  { name: 'Marte',
    image: MarteImg,
    info: 'Marte é o quarto planeta a partir do Sol e o segundo menor planeta com uma atmosfera fina, tendo o características da superfície que lembram ambas as crateras de impacto do Lua e os vales, desertos e calotas polares da Terra.',
  },
  {
    name: 'Júpiter',
    image: JupiterImg,
    info: 'Júpiter é o quinto planeta a partir do Sol e o maior planeta do Sistema Solar. É o planeta mais antigo do Sistema Solar, portanto, foi o primeiro a tomar forma a partir do restos da nebulosa solar.',
  },
  { name: 'Saturno',
    image: SaturnoImg,
    info: 'Saturno é o sexto planeta a partir do Sol, com o maior anéis planetários do Sistema Solar. É o segundo maior planeta depois de Júpiter, e recentemente, com muitas outras luas sendo descoberto, ultrapassou o número de luas de Júpiter.',
  },
  { name: 'Urano',
    image: Uranoimg,
    info: 'Urano é o sétimo planeta descoberto no Sistema Solar que também levou à descoberta do último planeta, Netuno ambos são referidos como gigantes de gelo.',
  },
  { name: 'Netuno',
    image: Netunoimg,
    info: 'Netuno é o quarto maior e o mais distante planeta do planeta Sistema Solar com as velocidades de vento mais poderosas de todas as planetas. É o menor dos gigantes gasosos.',
  },
];

export default Planets;
