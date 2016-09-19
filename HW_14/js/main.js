	/**
	 * Реализовать ф-цию конструктор Лошадь, которая
	 * будет принимать имя новой лошади.
	 *
	 * свойства лошади:
	 * - имя
	 * - собственный пробег
	 *
	 * методы лошади:
	 * - бежать (увеличивает собственный пробег лошади)
	 *
	 * Часть 2
	 * Добавить лошади свойство усталость. Усталость максимум = 10;
	 * Каждый 1км пробега увеличивает усталость на единицу.
	 * После того, как лошадь набирает 10 ед. усталости, он
	 * ложится отдыхать в течении 2 секунд. И затем, после отдыха,
	 * пробегает оставшиеся километры (возможно, опять с отдыхом).
	 */

function Horse(name) {
	this.name = name;
	this.ownMileage = 0;

	this.tiredness = 0;
}
Horse.prototype.totalMileage = 0;

Horse.prototype.run = function(miles) {
	var strenghtForRun = 10 - this.tiredness ;

	if(miles > strenghtForRun) {
		this.tiredness += strenghtForRun;
		this.ownMileage += strenghtForRun;
		this.constructor.prototype.totalMileage += strenghtForRun;
		var args = miles - strenghtForRun;
		console.log(this.name + ' выдохлась. Теперь надо передохнуть...' + ' Осталось ' + args);
		
		setTimeout(this.run.bind(this), 2000, args);
		this.tiredness = 0;
	} else {
		var ramainRoad = miles;
		this.ownMileage += ramainRoad;
		this.constructor.prototype.totalMileage += ramainRoad;
		this.tiredness = ramainRoad;
		console.log(this.name + ' преодолела весь путь.');
	}
};

var h1 = new Horse('Ресинант');
h1.run(55);

var h2 = new Horse('Лошадка');
h2.run(20);
console.log(h1);




















