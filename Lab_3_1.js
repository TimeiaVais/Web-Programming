var ware_1 = {
    name:"Зошит в клітинку", cost:15,
    number:10
};
var x1=ware_1.cost * ware_1.number;
var y1=ware_1.cost;

var ware_2 = {
    name:"Зошит у лінійку", cost:15,
    number:6
};
var x2=ware_2.cost * ware_2.number;
var y2=ware_2.cost;

var ware_3 = {
    name:"Олівець", cost:10,
    number:12
};
var x3=ware_3.cost * ware_3.number;
var y3=ware_3.cost;

var ware_4 = {
    name:"Ручка", cost:20,
    number:8
};
var x4=ware_4.cost * ware_4.number;
var y4=ware_4.cost;

document.write("Зошит в клітинку:", y1);
document.write("Зошит у лінійку:",y2);
document.write("Олівець:",y3);
document.write("Ручка:",y4);

document.write("Загальна вартість зошитів в клітинку: ",x1);
document.write("Загальна вартість зошитів у лінійку: ",x2);
document.write("Загальна вартість олівців: ",x3);
document.write("Загальна вартість ручок: ",x4);