exports.handler = async (event) => {   
	
    const catFactArray = [
        "The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!",
        "Cats have \"nine lives\" thanks to a flexible spine and powerful leg and back muscles",
        "A cat's nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
        "Florence Nightingale owned more than 60 cats in her lifetime.",
        "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light."
        ];
     
    var random_index = Math.floor(Math.random() * catFactArray.length);
    var fact = catFactArray[random_index];
    var length = catFactArray[random_index].length;	
    const response = {
            "fact": fact,
            "length": length
        };
    return response;
};