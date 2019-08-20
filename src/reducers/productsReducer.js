import Item1 from '../images/Item1.jpg'
import Item2 from '../images/Item2.jpg'
import Item3 from '../images/Item3.jpg'
import Item4 from '../images/Item4.jpg'
import Item5 from '../images/Item5.jpg'
import Item6 from '../images/Item6.jpg'

const initialState = {
  products: [
    { id: 1, title: 'Wireless 3D Printer', desc: "With adjustable temperature settings and heated aluminum print bed, the da Vinci 1.0 Pro can print with any 3rd party 1.75mm filament, which includes PLA/ ABS/ Tough PLA/ PETG/ Wood/ HIPS.", price: 110, img: Item1 },
    { id: 2, title: 'IFUN UV Curing Box 3D Print Resin', desc: "UV post cure processing equipment. 50W UV LED Source. 12s/circulation rotation speed ,150*150*120mm largest curing size. Rotating tray inside,cure evenly to improve molecular force for further durability", price: 80, img: Item2 },
    { id: 3, title: 'The 3D Printing Handbook', desc: "The 3D Printing Handbook provides practical advice on selecting the right technology and how-to design for 3D printing, based upon first-hand experience from the industry's leading experts.", price: 120, img: Item3 },
    { id: 4, title: '3D Printer Nozzles', desc: "Aokin 16 PCS M6 3D Printer 0.2mm 0.3mm 0.4mm 0.5mm 0.6mm 0.8mm 1.0mm Extruder Brass Nozzle Print Head for E3D Makerbot", price: 260, img: Item4 },
    { id: 5, title: 'AMX3D 8 Piece 3D Print Clean-Up Kit with Case', desc: "Lendable, Loanable Specialty 3D Print Clean Up Tools Designed for Libraries, Schools and Makerspaces - 1 Kit", price: 160, img: Item5 },
    { id: 6, title: 'VR Headsets', desc: "VR Glasses Unisex 3D Game Glasses Head-Mounted HiFi Headset Eyewear Virtual Reality Portable Multifunction Blue Light Glasses", price: 90, img: Item6 }
  ]
}

const ProductsReducer = (state = initialState, action) => {
  return state
}
export default ProductsReducer