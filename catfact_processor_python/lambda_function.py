import json
import random

import boto3


def lambda_handler(event, context):
    s3_client = boto3.client('s3')
    
    try:
        resp = s3_client.get_object(Bucket="centrica-aws-challenge-01", Key="catfact_previous_resp.csv")
        catfact_prev_resp = resp['Body'].read().decode()
        print(f"Previous Response: {catfact_prev_resp}")
    except Exception as e:
        print(e)
    catfact_list = [
        "The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!",
        "Cats have \"nine lives\" thanks to a flexible spine and powerful leg and back muscles",
        "A cat's nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
        "Florence Nightingale owned more than 60 cats in her lifetime.",
        "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light."
    ]
    fact = catfact_prev_resp
    counter = 0
    while fact == catfact_prev_resp:
        fact = random.choice(catfact_list)
        counter += 1
    print(f"Counter: {counter}")
    resp = s3_client.put_object(Bucket="centrica-aws-challenge-01", Key="catfact_previous_resp.csv", Body=fact)
    length = len(fact)
    return {
            "fact": fact,
            "length": length
        }
