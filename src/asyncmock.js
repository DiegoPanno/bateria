import imgMoura from "./assets/ImgMarcas/imgMoura.png"
import imgSermat from "./assets/ImgMarcas/bateria65am.png"

const productos = [
    {
        id: "ME40FD",
        titulo: "ME40FD",
        medida: "Medida comercial 12x40",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$93.900"
    },
    {
        id: "M18FD",
        titulo: "M18FD",
        medida: "Medida comercial 12x50",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$103.700"
    },
    {
        id: "M22ED",
        titulo: "M22ED",
        medida: "Medida comercial 12x55",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$113.450"
    },
    {
        id: "M20GD",
        titulo: "M20GD",
        medida: "Medida comercial 12x65",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$105.650"
    },
    {
        id: "Sermat65",
        titulo: "Sermat 65",
        medida: "Medida comercial 12x65",
        image: imgSermat,
        idCat: "auto-pickups",
        precio: "$"
    },
    {
        id: "M22GD",
        titulo: "M22GD",
        medida: "Medida comercial 12x65 reforzada",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$128.450"
    },
    {
        id: "M26AD",
        titulo: "M26AD",
        medida: "Medida comercial 12x70",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$128.450"
    },
    {
        id: "M24KD",
        titulo: "M24KD",
        medida: "Medida comercial 12x75",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$138.500"
    },
    {
        id: "M28KD",
        titulo: "M28KD",
        medida: "Medida comercial 12x75 reforzada",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$155.950"
    },
    {
        id: "M30LD",
        titulo: " M30LD",
        medida: "Medida comercial 12x75 alta",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$157.550"
    },
    {
        id: "ME80CD",
        titulo: "ME80CD",
        medida: "Medida comercial 12x80",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$190.800"
    },
    {
        id: "ME95QD",
        titulo: "ME95QD",
        medida: "Medida comercial 12x90",
        image: imgMoura,
        idCat: "auto-pickups",
        precio: "$210.650"
    },
  
    {
        id: "M18SD",
        titulo: "M18SD",
        medida: "Medida comercial 12x40",
        image: imgMoura,
        idCat: "linea-asiatica",
        precio: "$112.250"
    },
    {
        id: "M22JD",
        titulo: "M22JD",
        medida: "Medida comercial 12x50",
        image: imgMoura,
        idCat: "linea-asiatica",
        precio: "$124.300"
    },
    {
        id: "M22RI",
        titulo: "M22RI",
        medida: "Medida comercial 12x85",
        image: imgMoura,
        idCat: "linea-asiatica",
        precio: "$169.550"
    },
    {
        id: "ME90TI",
        titulo: "ME90TI",
        medida: "Medida comercial 12x90",
        image: imgMoura,
        idCat: "linea-asiatica",
        precio: "$239.100"
    },
    {
        id: "ME100HA",
        titulo: "ME100HA",
        medida: "Medida comercial 12x110",
        image: imgMoura,
        idCat: "linea-pesada",
        precio: "$236.150"
    },
    {
        id: "ME150BD",
        titulo: "ME150BD",
        medida: "Medida comercial 12x180",
        image: imgMoura,
        idCat: "linea-pesada",
        precio: "$275.550"
    },
    {
        id: "ME180BD",
        titulo: "ME180BD",
        medida: "Medida comercial 12x180 reforzada",
        image: imgMoura,
        idCat: "linea-pesada",
        precio: "$327.350"
    },
    {
        id: "ME23UI",
        titulo: "ME23UI",
        medida: "Medida comercial 12x24",
        image: imgMoura,
        idCat: "pequenos-tractores",
        precio: "$96.900"
    },
    {
        id: "MF60AD",
        titulo: "MF60AD",
        medida: "Medida comercial 12x70",
        image: imgMoura,
        idCat: "linea-efb",
        precio: "$242.700"
    }, 
    {
        id: "MF72LD",
        titulo: "MF72LD",
        medida: "Medida comercial 12x80",
        image: imgMoura,
        idCat: "linea-efb",
        precio: "$296.900"
    },    
]


export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};



export const getIntem = (id) => {
  return new Promise (resolve => {
    setTimeout ( () => {
      const producto = productos.find(prod => prod.id === id);
      resolve(producto);
    }, 100)
  })
}

export const getProductosPorCategoria = (idCatergoria) => {
  return new Promise (resolve => {
    setTimeout(() => {
      const productosCategoria = productos.filter(prod => prod.idCat === idCatergoria);
        resolve(productosCategoria);
    }, 100)
  })
}  