function translateEventListener()
{
    const button = document.getElementById("pigInputButton");
    button.addEventListener("click", translate);
}

function translate()
{
    const input = document.getElementById("pigInput");
    const result = document.getElementById("pigResult");
    var phrase = input.value;
    var sentence = phrase.split(' ');
    var piggedPhrase = [];

    for (var i = 0; i < sentence.length; i++)
    {
        piggedPhrase.push(toPigLatin(sentence[i]));
    }

    var joinedPhrase = piggedPhrase.join(' ');

    result.innerHTML = piggedPhrase;
}

function toPigLatin(text)
{
    var first = "";
    var last = "";
    var i = 0;

    while (!(isVowel(text[i])))
    {
        last += text[i];
        i++;
    }
    while (text[i])
    {
        first += text[i];
        i++;
    }
    return (first + "-" + last + "ay");
}

function isVowel(c)
{
    c = c.toLowerCase();
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u")
        return (1);
    return (0);
}

document.addEventListener("DOMContentLoaded", translateEventListener);