#!/usr/bin/env python
# example of proof of work algorithm

import hashlib
import time
from flask import Flask, render_template, request

max_nonce = 2 ** 32  # 4 billion


app = Flask(__name__, template_folder='templates')
@app.route('/')
def index():
    return render_template('sample.html')

@app.route('/action', methods = ['POST', 'GET'])
def main():
    if request.method == 'POST':
        (hash_result, nonce) = proof_of_work(int(request.form['bits']))
        res = "Your hash-result is = " + str(hash_result) + " and nonce = " + str(nonce)
        return render_template('result.html', result=res)

def proof_of_work(difficulty_bits):
    hash_result = ''
    new_block = 'test block with transactions' + hash_result
    target = 2 ** (256 - difficulty_bits)
    for nonce in range(max_nonce):
        hash_result = hashlib.sha256((str(new_block).encode('utf-8')) + (str(nonce).encode('utf-8'))).hexdigest()
        if int(hash_result, 16) < target:
            print("Success with nonce %d" % nonce)
            print("Hash is %s" % hash_result)
            return (hash_result, nonce)

    print("Failed after %d (max_nonce) tries" % nonce)
    return nonce

if __name__ == '__main__':
    app.run(host='localhost', port=5000)
