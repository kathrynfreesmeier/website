from flask import Flask, render_template

app = Flask(__name__)

# Load Index page 
@app.route('/')
def index():
    return render_template("index.html")
    
# Run Flask app on load
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
