let mobiles = {
  Samsung: {
    SamsungA10: {
        name: "Samsung A10",
        ram: "4gb",
        rom: "64gb",
        camera: "13MP",
        price: "22,000 PKR"
    },
    SamsungA20: {
        name: "Samsung A20",
        ram: "4gb",
        rom: "64gb",
        camera: "18MP",
        price: "28,000"
    },
    SamsungA30: {
        name: "Samsung A30",
        ram: "4gb",
        rom: "64gb",
        camera: "25MP",
        price: "29,000"
    }
},
IPhone: {
    IPhone11: {
        name: "IPhone11",
        ram: "4gb",
        rom: "64gb",
        camera: "12MP",
        price: "100,000"
    },
    IPhone12: {
        name: "IPhone12",
        ram: "4gb",
        rom: "64gb",
        camera: "12MP",
        price: "150,000"
    },
    IPhone13: {
        name: "IPhone13",
        ram: "6gb",
        rom: "128gb",
        camera: "24MP",
        price: "200,000"
    }
},
Oppo: {
    OppoV20: {
        name: "OppoV20",
        ram: "8gb",
        rom: "128gb",
        camera: "64MP",
        price: "54,999"
    },
    OppoF19: {
        name: "OppoF19",
        ram: "6gb",
        rom: "128gb",
        camera: "48MP",
        price: "36,999"
    },
    OppoF11: {
        name: "OppoF11",
        ram: "4gb",
        rom: "64gb",
        camera: "48MP",
        price: "35,999"
    }
},
Vivo: {
    VivoY20: {
        name: "VivoY20",
        ram: "4gb",
        rom: "64gb",
        camera: "13MP",
        price: "26,999"
    },
    VivoY21: {
        name: "VivoY21",
        ram: "4gb",
        rom: "64gb",
        camera: "13MP",
        price: "43,999"
    },
    VivoY55: {
        name: "VivoY55",
        ram: "8gb",
        rom: "128gb",
        camera: "50MP",
        price: "64,999"
    }
},
};

let brand = document.getElementById("phone");
let model = document.getElementById("phonemodel");
let data=document.getElementById("data");

let allphones = Object.keys(mobiles);
for (var i = 0; i < allphones.length; i++) {
  brand.innerHTML += `<option>${allphones[i]}</option>`;
}

function selectPhone() {
  let selectedBrand = brand.value;
let allModels = Object.keys(mobiles[selectedBrand]);
  model.innerHTML = "";
  for (var i = 0; i < allModels.length; i++) {
    model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
  }
}

function selectPhoneModel() {
  let a =Object.keys(mobiles[brand.value][model.value]);
  data.innerHTML=""
  for(var i=0; i<a.length;i++){
    data.innerHTML += `${a[i]} = ${mobiles[brand.value][model.value][a[i]]} <br>`
  }
}