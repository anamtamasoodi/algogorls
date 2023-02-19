import cohere
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

co = cohere.Client('Krw9gVH920pXY4xvEap6bxFNqaF6FcymgYGPV0fD')
name = "Kelly Owenya"
location = "Edmonton, Alberta, Canada"
issue = "deforestation"
facts = "We Lose Around 10 Million Hectares of Forest Every Single Year, Deforestation Contributes about 4.8 Billion Tonnes of Carbon Dioxide A Year, Beef is Responsible for 41% of Global Deforestation."
story = "I loved climbing trees when I was 10 years old so much that my dad actually gave me a leaf necklace."

@app.route('/', methods=['POST', 'GET'])
def email_generator():
  member_of_parliament = co.generate(
    model='command-xlarge-nightly',
    prompt='Tell me just only the first and last name of one of the current Members of Parliament (MPs) of {}\n'.format(location),
    max_tokens=20,
    temperature=0.1,
    k=0,
    p=0.75,
    frequency_penalty=0,
    presence_penalty=0,
    stop_sequences=[],
    return_likelihoods='NONE'
  )
  member_of_parliament = member_of_parliament.generations[0].text
  response = co.generate(
    model='command-xlarge-nightly',
    prompt='Write a formal email to a Member of Parliament named {} from someone called {} about {} environmental concerns. Include these talking points:\n {} Be sure to write it from the perspective of a person who wrote this following text: \"{}\"'.format(member_of_parliament, name, issue, facts, story),
    max_tokens=1200,
    temperature=0.8,
    k=0,
    p=0.75,
    frequency_penalty=0,
    presence_penalty=0,
    stop_sequences=[],
    return_likelihoods='NONE'
  )
  response = str(response)
  response = response[response.find("text:") + 5 : response.find("likelihood:")]
  response = response.strip()
  new_response = jsonify({"message": response})
  new_response.headers.add('Content-Type', 'application/json')
  return new_response

""" my attempt at a customizable backend w/ the form
@app.route('/', methods=['POST', 'GET'])
def email_generator():
    co = cohere.Client('Krw9gVH920pXY4xvEap6bxFNqaF6FcymgYGPV0fD')
    data = request.get_json()
    name = data['name']
    location = data['location']
    issue = data['issue']
    facts = data['facts']
    story = data['story']

    print(location, name, issue, facts, story)

    member_of_parliament = co.generate(
        model='command-xlarge-nightly',
        prompt='Tell me only the first and last name of one of the current Members of Parliament (MPs) of {}\n'.format(location),
        max_tokens=20,
        temperature=0.1,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=[],
        return_likelihoods='NONE'
    )

    response = co.generate(
        model='command-xlarge-nightly',
        prompt='Write a formal email to a Member of Parliament named {} from someone called {} about {} environmental concerns. Include these talking points:\n {} Be sure to write it from the perspective of a person who wrote this following text: \"{}\"'.format(member_of_parliament, name, issue, facts, story),
        max_tokens=300,
        temperature=0.8,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=[],
        return_likelihoods='NONE'
    )

    print(response)
    
    response = str(response)
    response = response[response.find("text:") + 5 : response.find("likelihood:")]
    response = response.strip()

    print(response)

    new_response = jsonify({"message": response})
    new_response.headers.add('Content-Type', 'application/json')

    print(new_response)

@app.route('/', methods=['POST', 'GET'])
def email_generator():
    return new_response
"""

if __name__ == '__main__':
    app.run(debug=True)