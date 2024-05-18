document.addEventListener('DOMContentLoaded', function() {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    button1.addEventListener('click', () => {
        var input = document.getElementById('input').value;
        const sillycase = toSillyCase(input);
        document.getElementById('input').value = sillycase;
    });

    button2.addEventListener('click', () => {
        var input = document.getElementById('input').value;
        const reverseSillyCase = toReverseSillyCase(input);
        document.getElementById('input').value = reverseSillyCase;
    });
});

function toSillyCase(silly) {
    var sillycase = '';
    for (var i = 0; i < silly.length; i++) {
        if (i % 2 === 0) {
            sillycase += silly[i].toLowerCase();
        } else {
            sillycase += silly[i].toUpperCase();
        }
    }
    return sillycase;
}

function toReverseSillyCase(silly) {
    var reverseSillyCase = '';
    for (var i = 0; i < silly.length; i++) {
        if (i % 2 === 0) {
            reverseSillyCase += silly[i].toUpperCase();
        } else {
            reverseSillyCase += silly[i].toLowerCase();
        }
    }
    return reverseSillyCase;
}
