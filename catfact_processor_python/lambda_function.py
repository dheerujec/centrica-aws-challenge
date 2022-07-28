import json
import random

def lambda_handler(event, context):

    catfact_list = [
        "The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!",
        "Cats have \"nine lives\" thanks to a flexible spine and powerful leg and back muscles",
        "A cat's nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
        "Florence Nightingale owned more than 60 cats in her lifetime.",
        "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light."
    ]

    fact = random.choice(catfact_list)
    length = len(fact)
    return {
            "fact": fact,
            "length": length
        }
