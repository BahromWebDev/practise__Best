    let ism = 'Ahror';
    let yosh = 25;
    console.log(yosh);

    yosh = 24;

    console.log(yosh);

    // String
    console.log('Hello World');

    let email = 'bahromweb@gmail.com';
    console.log(email);

    let firstName = 'Otabek';
    let lastName = 'Bahrom';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
    // getting characters is (boxdan item olish ya'ni jsda 0 raqamlar boshlanadi)
    console.log(fullName[5]);
    console.log(firstName[3]);
    // length yani variableni nechta ekanligini anglatadi 
    console.log(fullName.length);

    // methods ya'ni bular funcition hisoblanada endi harakatni ifodalaydi;
    console.log(fullName.toUpperCase());
    // methodlarni oxirida albatta () qavs bolishi kerek ! important !!!;

    let result = fullName.toLowerCase();
    console.log(result);

    let index = email.indexOf('@');
    console.log(index);

    let box = email.indexOf('m');
    console.log(box);

    let markWeight = 75;
    let markHeight = 1.8;
    let markBmi = markWeight / (markHeight * markHeight);
    console.log(markBmi);

    let otabekWeight = 33.7;
    let otabekHeight = 1.41;
    let otabekBmi = otabekWeight / (otabekHeight * otabekHeight);
    console.log(otabekBmi);

    let z = 8;
    let y = 15;
    let x = 8 - 15;
    console.log(x);

    const axe = 75;
    const exa = 1.79;
    const axe__exa = exa + (axe - exa) + (exa * exa) - (axe + exa);
    console.log(axe__exa);

    let gmail = email.indexOf('a')
    console.log(gmail);

    let gmail2 = email.lastIndexOf('a');
    console.log(gmail2);


    