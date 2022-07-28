
var AWS = require("aws-sdk");
var s3 = new AWS.S3();
function putObjectToS3(message, filename) {
    console.log('From async:', message);
    const params = { Bucket: "centrica-aws-challenge-02", Key: filename, Body: message };
    try {
        return s3.putObject(params).promise();
    } catch(e) {
        console.err(e);
    }
}


exports.handler = async (event) => {
    
	var params = {
		Bucket: "centrica-aws-challenge-02", 
		Key: "catfact_previous_resp.csv"
		};
		
	var previous_fact_resp = "";
	await s3.getObject(params, function(err, data) {
		if (err) console.log(err, err.stack); 
		else {
		    console.log(data.Body);
		    previous_fact_resp = data.Body.toString('utf-8');
		}
	}).promise();
	console.log('previous_fact_resp: ', previous_fact_resp)
    const catFactArray = [
        "The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!",
        "Cats have \"nine lives\" thanks to a flexible spine and powerful leg and back muscles",
        "A cat's nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
        "Florence Nightingale owned more than 60 cats in her lifetime.",
        "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light."
        ];
    var counter_value = 0;
    var fact = previous_fact_resp;
    var length;
    while ( fact == previous_fact_resp){   
        var random_index = Math.floor(Math.random() * catFactArray.length);
        fact = catFactArray[random_index];
        length = catFactArray[random_index].length;
        counter_value++;
    }
	console.log('Counter: ', counter_value);
	const result = await putObjectToS3(fact, "catfact_previous_resp.csv");
    console.log('p SNS:', result);
    const response = {
            "fact": fact,
            "length": length
        };
    return response;
};