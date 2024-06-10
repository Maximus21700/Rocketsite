from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
 return render_template('Miniprojet.html')

@app.route('/Miniprojet.html')
def page1():
 return render_template('Miniprojet.html')
@app.route('/Page2.html')
def page2():
  return render_template("Page2.html")

@app.route('/Page3.html')
def page3():
  return render_template("Page3.html")

@app.route('/Page4.html')
def page4():
  return render_template("Page4.html")

@app.route('/Questionnaire.html')
def Questionnaire():
  return render_template("Questionnaire.html")
app.run(host="0.0.0.0")