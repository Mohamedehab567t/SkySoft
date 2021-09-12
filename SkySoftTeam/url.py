from SkySoftTeam import app
from flask import url_for, render_template


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')
