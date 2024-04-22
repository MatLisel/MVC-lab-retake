const cars = [
    {
        id: 0,
        make: "Toyota",
        model: "Hilux",
        year: 2023,
        color: "black",
    },
    {
        id: 3,
        make: "BMW",
        model: "M3",
        year: 1985,
        color: "blue",
    },
    {
        id: 1,
        make: "Audi",
        model: "Rs3",
        year: 2018,
        color: "yellow",
    },
    {
        id: 2,
        make: "Hyundai",
        model: "Tuscon",
        year: 2015,
        color: "red",
    },
    {
        id: 4,
        make: "Fiat",
        model: "126p",
        year: 1989,
        color: "orange",
    }
]

const getCars = () => {
    return cars;
}

const getCarInformation = (id) => {
    const findedCar = getCars().find((car) => car.id === id);
    if (findedCar) {
        return `Make: ${findedCar.make}, Model: ${findedCar.model}, Year: ${findedCar.year}, Color: ${findedCar.color}.`;
    }
    else {
        return 'Car doesn’t exist';
    }
}

const getCarAge = (id) => {
    const findedCar = getCars().find((car) => car.id === id);
    if (findedCar) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - findedCar.year;
        return `Car is ${carAge} years old.`;
    }
    else {
        return 'Car doesn’t exist';
    }
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge,
}