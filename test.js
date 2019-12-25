const polinom = (str) => {
    let message = str.toLowerCase();
    let reverseMessage = message.split('').reverse().join('');

    console.log(message);
    console.log(reverseMessage);

    if(message === reverseMessage) {
        console.log('This is Polinom');
    } else {
        console.log('Unfortunately!');
    }
};

polinom('opopopo');
