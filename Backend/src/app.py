from flask import Flask
import routes.login
import routes.register

app = Flask(__name__, static_folder="../pic", static_url_path="/pic")

app.register_blueprint(routes.login.blueprint)
app.register_blueprint(routes.register.blueprint)

